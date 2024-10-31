const database = require('../database/queries.js')

const createControllerFunction = async (req, res) => {
    console.log(await database.addItem(req.itemName,  req.itemType ,  req.quantity ,  req.expirationDate , req.lastOrdered))
    console.log(await database.getAllItems())
    // return console.log('create')
}

module.exports = {createControllerFunction}