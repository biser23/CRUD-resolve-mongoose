const express = require('express')
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000
const routes = require('./routes/tasks');
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

dbConnection()

app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})

//
