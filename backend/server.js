import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve product images statically
app.use('/images', express.static(path.join(__dirname, 'images')));

// API: Get products
app.get('/api/products', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'data', 'products.json');
    const data = await fs.readFile(dataPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// API: Newsletter subscription
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  console.log(`New subscriber registered: ${email}`);
  res.json({ success: true, message: 'Terima kasih telah berlangganan!' });
});

// API: Get social configuration
app.get('/api/config', (req, res) => {
  res.json({
    socials: {
      instagram: 'https://www.instagram.com/fani_bouquet',
      whatsapp: 'https://wa.me/6282330602096?text=Halo%20fani%20bouquet,%20saya%20tertarik%20dengan%20produk%20Anda'
    }
  });
});

// Serve frontend in production
const frontendDistPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(frontendDistPath));

app.get('*', (req, res, next) => {
  if (req.url.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
