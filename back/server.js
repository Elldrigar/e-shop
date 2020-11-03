const express = require('express')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5555
const connectDB = require('./config/db')
const { notFound, errorHandler } = require('./middleware/errorHandler')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoutes')

dotenv.config()
connectDB().then()

app.listen(PORT, () => {
  console.log(`Server 🚀 in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('API 👍🏻')
})

app.use(express.json())
app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use(notFound)
app.use(errorHandler)
