const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getRests,
    addRest,
    deleteRest,
    updateLikes
} = require('./controller')

app.get('/getRests', getRests)
app.post('/addRest', addRest)
app.delete('/deleteRest/:id', deleteRest)
app.put('/updateLikes/:id', updateLikes)


app.listen(4005, () => console.log('Port is running on port 4005!'))