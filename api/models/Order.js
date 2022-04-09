const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  products: [],
  name: { type: String },
  email: { type: String },
  address: { type: String, required: true },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Order', OrderSchema);
