const rests = require('./db.json')
let restId = 11
// Get, Put, Delete, Push

module.exports = {
    getRests: (req, res) => {
        res.status(200).send(rests)
    },

    addRest: (req, res) => {
        const {name, picture} = req.body

        let newRestObject = {
            id: restId,
            name: name,
            picture: picture,
            likes: 0
        }

        rests.push(newRestObject)

        restId++
        res.status(200).send(rests)
    },

    deleteRest: (req, res) => {
        const index = rests.findIndex(el => el.id === +req.params.id)

        rests.splice(index, 1)

        res.status(200).send(rests)
    },

    updateLikes: (req, res) => {
        const index = rests.findIndex(el => el.id === +req.params.id)
        const {type} = req.body

        if(type === 'like') {
            rests[index].likes++
        }else if(type === 'dislike'){
            rests[index].likes--
        }
        res.status(200).send(rests)
    }
}