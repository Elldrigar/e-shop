const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const productRoute = require('./routes/productRoute')

dotenv.config()
connectDB()

app.get('/', (req, res) => {
  res.send('API 👍🏻')
})

app.use('/api/products', productRoute)

const PORT = process.env.PORT || 5555

app.listen(
  PORT,
  console.log(`Server 🚀 in ${process.env.NODE_ENV} mode on port ${PORT}`),
)
