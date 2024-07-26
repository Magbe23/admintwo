const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'El título es requerido']
  },
  price: {
    type: Number,
    required: [true, 'El precio es requerido']
  },
  description: {
    type: String,
    required: [true, 'La descripción es requerida']
  }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
