const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  categories: {
    type: Array,
  },
  frame: {
    type: String,
    required: true,
  },
  wheel: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
  battery: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  travel: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
