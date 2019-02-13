'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  sku: {
    type: Number,
    required: true
  },
  name: {
    type: String
  },
  inventory: {
    quantity: {
      type: Number,
    },
    warehouses: [{
      locality: {
        type: String
      },
      quantity: {
        type: Number
      },
      type: {
        type: String
      }
    }]
  },
  isMarketable: {
    type: Boolean
  }
});

module.exports.ProductSchema = ProductSchema;
module.exports.Product = mongoose.model('Product', ProductSchema);
