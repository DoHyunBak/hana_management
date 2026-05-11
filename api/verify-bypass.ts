import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Maintenance Bypass Verification API
 * 
 * This API replaces the client-side secret verification logic.
 * It ensures that the BYPASS_SECRET never leaves the server environment.
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow GET requests for verification
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { secret, token } = req.query;
  const BYPASS_SECRET = process.env.MAINTENANCE_BYPASS_SECRET;

  if (!BYPASS_SECRET || BYPASS_SECRET.length < 12) {
    return res.status(500).json({ error: 'Bypass logic is not properly configured on server.' });
  }

  // Generate the derived token (same logic as before, but on server)
  const expectedToken = Buffer.from(`hana:bypass:${BYPASS_SECRET}`).toString('base64').slice(0, 20);

  // Case 1: Checking a secret (e.g., from ?admin=<secret>)
  if (secret) {
    if (secret === BYPASS_SECRET) {
      return res.status(200).json({ 
        success: true, 
        token: expectedToken,
        message: 'Bypass authorized.' 
      });
    }
    return res.status(401).json({ success: false, error: 'Invalid secret.' });
  }

  // Case 2: Verifying an existing cookie token
  if (token) {
    if (token === expectedToken) {
      return res.status(200).json({ success: true });
    }
    return res.status(401).json({ success: false, error: 'Invalid token.' });
  }

  return res.status(400).json({ error: 'Missing secret or token parameter.' });
}
