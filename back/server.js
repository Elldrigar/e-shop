const express = require('express')
const products = require('./data/products')
const app = express()

app.get('/', (req,res) => {
	res.send('API 👍🏻')
})
app.listen(5555, console.log('Server 🚀 on port 5555'))