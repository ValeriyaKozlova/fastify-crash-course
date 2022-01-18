const items = require('../Items')

const getItems = (req, replay) => {
    replay.send(items)
}

const getItem = (req, replay) => {
    const {id} = req.params
    
    const item = items.find((item ) => item.id === id)
        
    replay.send(item)
}

module.exports = {getItem, getItems}