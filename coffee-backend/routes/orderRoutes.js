const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Ambil semua order
router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Tambah order baru
router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: 'Order created', data: newOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
