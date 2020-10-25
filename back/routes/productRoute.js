const express = require('express')
const router = express.Router()
const Product = require('../models/productModel')

router.get('/', async (req, res) => {
  const products = await Product.find({})
	res.json(products)
})
router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

module.exports = router
