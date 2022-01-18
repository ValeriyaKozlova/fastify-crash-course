const items = require('../Items')
const {getItem, getItems, addItem} = require('../controllers/items')

// Item schema
const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'}
    }
}

// Options for get all items
const getItemsOpts = {
    schema: {
        response: {
           200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getItems
}

// Options for get single item
const postItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: {type: 'string'}
            }
        },
        response: {
            201: Item
        }
    },
    handler: addItem
}

// Options for post single item
const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getItem
}

function itemRoutes (fastify, options, done) {
    // Get all items
    fastify.get('/items', getItemsOpts)
    
    // Get single items
    fastify.get('/items/:id', getItemOpts)

    fastify.post('/items', postItemOpts)
    
    done()
}

module.exports = itemRoutes