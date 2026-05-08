import type { ReactNode } from 'react';
import Maintenance from '../pages/Maintenance';

// IMPORTANT — architectural limitation of a pure client-side SPA:
// VITE_ env vars are compiled into the JS bundle and are readable by anyone
// who inspects the browser source. This bypass is designed to stop casual
// visitors from stumbling through during maintenance, NOT to resist a
// determined person reading the bundle. For true access control, use a
// server-side edge function (Vercel / Netlify Edge) instead.

const IS_MAINTENANCE = import.meta.env.VITE_MAINTENANCE_MODE === 'true';
const BYPASS_SECRET: string | undefined = import.meta.env.VITE_MAINTENANCE_BYPASS_SECRET;

// Bypass is fully disabled when the secret is absent or too short.
// A secret shorter than 12 chars is too easy to brute-force.
const BYPASS_ENABLED = typeof BYPASS_SECRET === 'string' && BYPASS_SECRET.length >= 12;

const COOKIE_NAME = 'maintenance_bypass';
const COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours

// Escape special regex characters to prevent ReDoS-style issues.
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${escapeRegex(name)}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, maxAge: number): void {
  // Add Secure flag on HTTPS to prevent transmission over plain HTTP.
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Strict${secure}`;
}

// Store a derived token (not the raw secret and not 'true') so someone
// can't bypass by manually setting an obvious cookie value.
function bypassToken(): string {
  return btoa(`hana:bypass:${BYPASS_SECRET}`).slice(0, 20);
}

// Check ?admin=<secret>. If valid:
//  1. Persist a derived cookie token (secret is never stored in the cookie).
//  2. Strip ?admin= from the URL so it doesn't appear in browser history or
//     get leaked in Referer headers when the user navigates away.
function checkAndActivateBypass(): boolean {
  if (!BYPASS_ENABLED) return false;

  const params = new URLSearchParams(window.location.search);
  const provided = params.get('admin');

  if (provided && provided === BYPASS_SECRET) {
    setCookie(COOKIE_NAME, bypassToken(), COOKIE_MAX_AGE);
    params.delete('admin');
    const cleaned =
      window.location.pathname + (params.size ? `?${params.toString()}` : '');
    window.history.replaceState(null, '', cleaned);
    return true;
  }

  return getCookie(COOKIE_NAME) === bypassToken();
}

interface Props {
  children: ReactNode;
}

const MaintenanceGuard = ({ children }: Props) => {
  if (!IS_MAINTENANCE || checkAndActivateBypass()) {
    return <>{children}</>;
  }
  return <Maintenance />;
};

export default MaintenanceGuard;
