'use strict'

const
  mongoose = require('mongoose'),
  ProductRepository = require('../repositories/productRepository')

class ProductService {

  *
    findOne(product) {
    return yield ProductRepository.findOne({
      'sku': product
    });
  }

  *
    create(product) {
    return yield ProductRepository.create(product);
  }

  *
    update(product, bodyUpdate) {
    return yield ProductRepository.update({
      'sku': product
    }, bodyUpdate);
  }

  *
    delete(product) {
    return yield ProductRepository.delete(product);
  }
}

module.exports = new ProductService()