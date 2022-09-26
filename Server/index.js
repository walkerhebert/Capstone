const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getRestaurants,
} = require('./controller')

app.get('./getRestaurants', getRestaurants)

app.listen(4004, () => console.log('Relp is running on port 4004!'))