const {Router, text} = require('express')
const {indexControllerFunction} = require('../controllers/indexController.js')

const indexRoute = Router()


indexRoute.get('/', async (req, res) => {
    const inventoryArr = await indexControllerFunction()
    console.log(inventoryArr)
    res.render('indexView', {inventory: inventoryArr})
})

module.exports = {indexRoute};