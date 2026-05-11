import { useState, useEffect, type ReactNode } from 'react';
import Maintenance from '../pages/Maintenance';

// VITE_ env vars are compiled into the JS bundle and are readable by anyone.
// Maintenance status is still public, but the BYPASS_SECRET is now backend-only.
const IS_MAINTENANCE = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

const COOKIE_NAME = 'maintenance_bypass';
const COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours

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
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Strict${secure}`;
}

interface Props {
  children: ReactNode;
}

const MaintenanceGuard = ({ children }: Props) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (!IS_MAINTENANCE) {
      setIsAuthorized(true);
      return;
    }

    const checkBypass = async () => {
      const params = new URLSearchParams(window.location.search);
      const providedSecret = params.get('admin');
      const existingToken = getCookie(COOKIE_NAME);

      try {
        // Case 1: URL has ?admin=<secret>
        if (providedSecret) {
          const res = await fetch(`/api/verify-bypass?secret=${encodeURIComponent(providedSecret)}`);
          if (res.ok) {
            const data = await res.json();
            setCookie(COOKIE_NAME, data.token, COOKIE_MAX_AGE);
            
            // Clean URL
            params.delete('admin');
            const cleaned = window.location.pathname + (params.size ? `?${params.toString()}` : '');
            window.history.replaceState(null, '', cleaned);
            
            setIsAuthorized(true);
            return;
          }
        }

        // Case 2: Check existing cookie token
        if (existingToken) {
          const res = await fetch(`/api/verify-bypass?token=${encodeURIComponent(existingToken)}`);
          if (res.ok) {
            setIsAuthorized(true);
            return;
          }
        }
        
        setIsAuthorized(false);
      } catch (error) {
        console.error('Bypass verification failed:', error);
        setIsAuthorized(false);
      }
    };

    checkBypass();
  }, []);

  // Loading state (prevents flash of Maintenance page if authorized by cookie)
  if (IS_MAINTENANCE && isAuthorized === null) {
    return (
      <div className="min-h-screen bg-primary-deep flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (IS_MAINTENANCE && !isAuthorized) {
    return <Maintenance />;
  }

  return <>{children}</>;
};

export default MaintenanceGuard;
