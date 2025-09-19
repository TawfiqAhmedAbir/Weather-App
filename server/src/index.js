import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

// Load & validate config
const PORT = Number(process.env.PORT || 3000);
const API_KEY = process.env.OPENWEATHER_API_KEY;

if (!API_KEY) {
  console.error('Missing OPENWEATHER_API_KEY in server/.env');
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Timeout helper
const withTimeout = (ms, promise) =>
  Promise.race([promise, new Promise((_, rej) => setTimeout(() => rej(new Error('Upstream timeout')), ms))]);

// Health route
app.get('/health', (_req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// Weather route with resilience
app.get('/api/weather', async (req, res) => {
  try {
    const q = req.query.q || 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&appid=${API_KEY}&units=metric`;
    
    const r = await withTimeout(8000, fetch(url));
    
    if (!r.ok) {
      // Map common OpenWeather errors to useful messages
      const text = await r.text().catch(() => '');
      const code = r.status;
      
      if (code === 401) return res.status(401).json({ error: 'Invalid API key' });
      if (code === 404) return res.status(404).json({ error: 'City not found' });
      if (code === 429) return res.status(429).json({ error: 'Rate limit from OpenWeather' });
      
      return res.status(code).json({ error: `Upstream error ${code}`, detail: text.slice(0, 200) });
    }
    
    const data = await r.json();
    res.json(data);
  } catch (err) {
    console.error('Weather route error:', err);
    res.status(502).json({ error: 'Server could not reach OpenWeather' });
  }
});

// Global safety nets
process.on('unhandledRejection', (r) => console.error('unhandledRejection', r));
process.on('uncaughtException', (e) => console.error('uncaughtException', e));

// Start server with port collision guard
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
}).on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is in use. Change PORT in server/.env or free the port.`);
    process.exit(1);
  }
});