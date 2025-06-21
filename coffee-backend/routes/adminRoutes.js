// ==== routes/adminRoutes.js ====
const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
const router = express.Router();
require('dotenv').config();

console.log('[LOGIN ROUTE] diakses');

// POST /api/admin/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    console.log('[ADMIN]', admin);
    if (!admin) return res.status(401).json({ message: 'Admin tidak ditemukan' });

    const isMatch = await admin.comparePassword(password);
    console.log('[MATCH]', isMatch);
    if (!isMatch) return res.status(401).json({ message: 'Password salah' });

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, name: admin.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

module.exports = router;
