const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/adminModel');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createAdmin = async () => {
  try {
    const exists = await Admin.findOne({ email: 'admin@kopi.com' });
    if (exists) {
      console.log('✅ Admin sudah ada');
    } else {
      const admin = new Admin({
        email: 'admin@kopi.com',
        password: 'admin123', // di-hash otomatis oleh schema
        name: 'Super Admin',
      });
      await admin.save();
      console.log('✅ Admin berhasil dibuat');
    }
    process.exit();
  } catch (err) {
    console.error('❌ Gagal:', err);
    process.exit(1);
  }
};

createAdmin();

