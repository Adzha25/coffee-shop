const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer_name: String,
  customer_email: String,
  customer_phone: String,
  order_items: [
    {
      product_id: String,
      product_name: String,
      price: Number,
      quantity: Number,
      subtotal: Number,
    },
  ],
  total_price: Number,
  order_status: {
    type: String,
    enum: ['pending', 'confirmed', 'canceled'],
    default: 'pending',
  },
  notes: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
