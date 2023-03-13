const express = require('express')
const productRouter = require('./products/products.router')
const db = require('./utils/database')
const initModels = require('./models/initModels')

const app = express()

app.use(express.json())

db.authenticate() // Shows in console if the conection was done succesfully
    .then(() => {
        console.log('Credentials of the database are correct')
    })
    .catch((err) => {
        console.log(err) // authentication errors
    })

db.sync() // Synchronize our database with the models that we have defined  (create tables)
    .then(() => {
        console.log('Database has been sinchronized correctly')
    })
    .catch((err) => {
        console.log(err) // errors on tables, properties, etc...
    })

initModels()

// require("dotenv").config();

// const dotenv = require('dotenv')
// dotenv.config()

app.get('/', (req, res) => {
    res.json({
        message: 'Server Ok!',
        password: process.env.MY_PASSWORD,
    })
})

app.use('/api/v1', productRouter)

app.listen(9000, () => {
    console.log('Server started at http://localhost:9000')
})
