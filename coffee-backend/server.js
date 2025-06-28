const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://coffee-shop-production-e6b2.up.railway.app'],
  credentials: true
}));
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routing
app.use('/api/orders', orderRoutes);
app.use('/api/admin', require('./routes/adminRoutes'));

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
