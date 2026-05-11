import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Email Proxy API
 * 
 * Proxies email requests to EmailJS to hide Service IDs and Template IDs from the client.
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { user_name, user_phone, building_address, message } = req.body;

  if (
    typeof user_name !== 'string' ||
    typeof user_phone !== 'string' ||
    typeof message !== 'string'
  ) {
    return res.status(400).json({ error: 'Invalid field types.' });
  }

  if (
    user_name.trim().length === 0 || user_name.length > 100 ||
    user_phone.trim().length === 0 || user_phone.length > 20 ||
    message.trim().length === 0 || message.length > 2000 ||
    (building_address != null && (typeof building_address !== 'string' || building_address.length > 200))
  ) {
    return res.status(400).json({ error: 'Invalid or oversized field values.' });
  }

  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
  const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY; // Optional: used for server-side verification in EmailJS

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return res.status(500).json({ error: 'Email service is not properly configured on server.' });
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        accessToken: PRIVATE_KEY,
        template_params: {
          user_name,
          user_phone,
          building_address,
          message,
        },
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email sent successfully.' });
    } else {
      console.error('EmailJS upstream error:', response.status);
      return res.status(502).json({ error: 'Failed to send email via provider.' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
