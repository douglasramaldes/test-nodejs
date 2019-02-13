'use strict';

const
  Product = require('../models/productModel').Product

class ObjectiveRepository {

  *
    find(product) {
    return yield Product.find(product)
  }

  *
    findOne(product) {
    return yield Product.findOne(product)
  }

  *
    create(product) {
    return yield Product.create(product)
  }

  *
    update(id, data) {
    return yield Product.findOneAndUpdate(id, data, { new: true })
  }

  *
    delete(product) {
    return yield Product.remove({
      'sku': product
    })
  }

}

module.exports = new ObjectiveRepository();