const asyncHandler = require('express-async-handler')
const Order = require('../models/orderModel')

// @desc       Create new order
// @route      GET /api/orders
// @access     Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    itemsTax,
    itemsShipping,
    itemsTotal,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('Brak zamówionych przedmiotów')
  } else {
    const order = new Order({
      orderItems,
	    user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      itemsTax,
      itemsShipping,
      itemsTotal,
    })

	  const createdOrder = await order.save()
	  res.status(201).json(createdOrder)
  }
})

module.exports = { addOrderItems }
