import express from 'express'
import mongoose from 'mongoose'
import productRouter from './routers/product'
import bodyParser from 'body-parser'

const app = express()
const port = 8000
// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/device")
    .then(() => console.log("Connect to DB successfully"))

// Router
app.use('/api', productRouter)

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
})