export const config = { api: { bodyParser: true } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const ALLOWED_ORIGIN = 'https://vitefimov.github.io';

  const origin = req.headers.origin || req.headers.referer || '';
  if (!origin.includes(ALLOWED_ORIGIN)) {
    return res.status(403).send('Forbidden');
  }

  const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;
  const SHARED_SECRET = process.env.SHARED_SECRET; 

  if (!APPS_SCRIPT_URL) return res.status(500).send('Server misconfigured');

  try {
    const payload = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

    if (SHARED_SECRET) {
      if (!payload._secret || payload._secret !== SHARED_SECRET) {
        return res.status(403).send('Forbidden - bad secret');
      }
      delete payload._secret;
    }

    const params = new URLSearchParams();
    for (const key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        params.append(key, payload[key]);
      }
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const text = await response.text();
    res.status(response.ok ? 200 : response.status).send(text);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error');
  }
}
