const restaurants = require('./db.json')

// Get, Put, Delete, Put

module.exports = {
    getRestaurants: (req, res) => {
        res.status(200).send(restaurants)
    }
}