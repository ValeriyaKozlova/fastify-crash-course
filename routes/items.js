const items = require('../Items')
const {getItem, getItems, deleteItem, updateItem, addItems} = require('../controllers/items')

// Item schema
const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'}
    }
}

// Items schema
const Items = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: {type: 'string'},
            name: {type: 'string'}
        }
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

// Options for post single item
const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getItem
}

// Options for post single item
// const postItemOpts = {
//     schema: {
//         body: {
//             type: 'object',
//             required: ['name'],
//             properties: {
//                 name: {type: 'string'}
//             }
//         },
//         response: {
//             201: Item
//         }
//     },
//     handler: addItem
// }

// Options for post several items
const postItemsOpts = {
    schema: {
        body: {
            type: 'array',
            items: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: {type: 'string'}
                }
            }
        },
        response: {
            201: Items
        }
    },
    handler: addItems
}

// Options for delete single item
const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string'}
                }
            }
        }
    },
    handler: deleteItem
}

// Options for update  item
const updateItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: updateItem
}


function itemRoutes (fastify, options, done) {
    // Get all items
    fastify.get('/items', getItemsOpts)
    
    // Get single items
    fastify.get('/items/:id', getItemOpts)

    // Add item
    fastify.post('/items', postItemsOpts)

    // Delete item
    fastify.delete('/items/:id', deleteItemOpts)
    
     // Update item
     fastify.put('/items/:id', updateItemOpts)


    done()
}

module.exports = itemRoutes