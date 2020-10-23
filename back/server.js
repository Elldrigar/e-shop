const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')
const connectDB = require('./config/db')
const app = express()

dotenv.config()
connectDB()

app.get('/', (req, res) => {
  res.send('API 👍🏻')
})
app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})
const PORT = process.env.PORT || 5555

app.listen(
  PORT,
  console.log(`Server 🚀 in ${process.env.NODE_ENV} mode on port ${PORT}`),
)
