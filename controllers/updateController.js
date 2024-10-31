const database = require('../database/queries.js')

const updateControllerFunction = async (req, res) => {
    const allItems = await database.getAllItems()
    console.log('update')
    return allItems
}

const updateControllerGetAllItems = async (req, res) => {
    const allItems = await database.getAllItems()
    console.log('update')
    return allItems
}

const updateControllerdeleteItem = async (req, res) => {
    console.log('deleted item with ID ' + req )
    return await database.deleteItem(req)
}

const updateControllerUpdateItem = async (req, res) => {
    console.log(req.updateId)
    return await database.updateItem(
        req.updateId,
        req.updateName, 
        req.updateType,
        req.updateQuantity,
        req.updateExpiration, 
        req.updateLastOrdered)
}

module.exports = {updateControllerFunction, updateControllerGetAllItems, updateControllerdeleteItem, updateControllerUpdateItem}

// 