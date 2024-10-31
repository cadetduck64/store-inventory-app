const {Router} = require('express')
const {createControllerFunction} = require('../controllers/createController.js')

const createRoute = Router()

createRoute.post('/', async (req, res) => {
    // console.log(req.body)
    createControllerFunction(req.body)
    res.render('createView')
})

createRoute.get('/', async (req, res) => {
    res.render('createView')
    // createControllerFunction()
})

module.exports = {createRoute};

