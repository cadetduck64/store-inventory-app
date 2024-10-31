const database = require('../database/queries.js')

const indexControllerFunction = async (req, res) => {
    console.log('index')
    const allItems = await database.getAllItems()
    return allItems
}

module.exports = {indexControllerFunction}