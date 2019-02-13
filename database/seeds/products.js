'use strict';

const
  Product = require('../../src/models/productModel').Product

module.exports = () => (
  [
    new Product({
      sku: 50937,
      name: "Bioderma Sensibio H2O - Lenço Demaquilante (25 unidades)",
      inventory: {
        warehouses: [
          {
            locality: "SP",
            quantity: 5,
            type: "ECOMMERCE"
          },
          {
            locality: "MOEMA",
            quantity: 5,
            type: "PHYSICAL_STORE"
          }
        ]
      },
    }),
    new Product({
      sku: 50888,
      name: "Maybelline The Colossal Volum'Express Waterproof - Máscara para Cílios 9,2ml",
      inventory: {
        warehouses: [
          {
            locality: "SP",
            quantity: 8,
            type: "ECOMMERCE"
          },
          {
            locality: "MOEMA",
            quantity: 9,
            type: "PHYSICAL_STORE"
          }
        ]
      },
    }),

  ]
)
