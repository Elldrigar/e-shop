const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { addOrderItems, getOrderbyId }
 = require('../controllers/orderController')

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderbyId)

module.exports = router