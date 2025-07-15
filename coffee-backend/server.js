const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

// Middlewares
app.use(cors({
  origin: ['http://localhost:5173', 'https://coffee-shop-production-e6b2.up.railway.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Serve Frontend
app.use(express.static(path.join(__dirname, '../coffee-frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../coffee-frontend/dist', 'index.html'));
});

// Error Handler (penting untuk debug)
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.stack);
  res.status(500).send('Internal Server Error');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}).catch(err => console.error('❌ MongoDB connection error:', err));
