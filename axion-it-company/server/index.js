import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRouter from './routes/api.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
});

// API Routes
app.use('/api', apiRouter);

// Serve static frontend in production
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (req.accepts('html')) {
    res.sendFile(indexPath, (err) => {
      if (err) {
        // If dist hasn't been built yet in dev mode:
        res.status(200).send(`
          <!DOCTYPE html>
          <html>
            <head><title>Axion IT API Server</title></head>
            <body style="font-family: sans-serif; background: #080d1a; color: #fff; padding: 40px; text-align: center;">
              <h1>⚡ Axion Technologies Backend API Server</h1>
              <p>Node.js API Server is running on port <strong>${PORT}</strong>.</p>
              <p>To view the full user interface in development, run <code>npm run dev</code> or open <a href="http://localhost:3000" style="color: #00f2fe;">http://localhost:3000</a>.</p>
              <p>To build for production, run <code>npm run build</code>.</p>
            </body>
          </html>
        `);
      }
    });
  } else {
    res.status(404).json({ error: 'Endpoint not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Axion IT Enterprise Server running on port ${PORT}`);
  console.log(`📡 API Health: http://localhost:${PORT}/api/health`);
  console.log(`📡 System Telemetry: http://localhost:${PORT}/api/system-status`);
  console.log(`💻 Web Portal: http://localhost:${PORT}`);
  console.log(`====================================================`);
});
