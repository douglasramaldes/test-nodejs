'use strict';

const
	mongoose = require('mongoose'),
	Router = require('koa-router'),
	ProductService = require('../../services/productService'),
	_ = require('lodash')

let productRouter = new Router()

productRouter.get('/:sku', function* (next) {
	try {
		let qtdInventory = 0
		let product = yield ProductService.findOne(this.params.sku)

		if (!product)
			this.throw(404, 'Product not found!')

		if (product.inventory && product.inventory.warehouses.length > 0) {
			_.map(product.inventory.warehouses, (products) => {
				if (!products.quantity) products.quantity = 0
				qtdInventory += products.quantity
			})

			qtdInventory > 0 ? product.isMarketable = true : product.isMarketable = false;
			product.inventory.quantity = qtdInventory
		}

		if (product.inventory && !product.inventory.warehouses.length) {
			product.isMarketable = false
			product.inventory.quantity = 0
		}

		this.body = product
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

productRouter.post('/', function* (next) {
	try {
		let product = this.request.body
		let productExits = yield ProductService.findOne(product.sku)

		if (productExits)
			this.throw(409, 'Product sku exist!')

		let newProduct = yield ProductService.create(product)

		if (!newProduct)
			this.throw(400, 'Error in Product creation!')

		this.body = newProduct
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

productRouter.patch('/:sku', function* (next) {
	try {
		let params = this.params.sku,
			bodyUpdate = this.request.body,
			update

		update = yield ProductService.update(params, bodyUpdate)

		if (!update)
			this.throw(400, 'Error in Product update!')

		this.body = update
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

productRouter.del('/:sku', function* (next) {
	try {
		let params = this.params.sku

		let product = yield ProductService.findOne(this.params.sku)

		if (!product)
			this.throw(404, 'Product not found!')

		let deleteProduct = yield ProductService.delete(params)

		if (!deleteProduct)
			this.throw(400, 'Error in delete Product!')

		this.body = "Product successfully removed"
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})



module.exports = productRouter