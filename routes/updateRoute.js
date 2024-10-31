const {Router} = require('express')
const {updateControllerFunction} = require('../controllers/updateController.js')
const {updateControllerGetAllItems} = require('../controllers/updateController.js')
const {updateControllerdeleteItem} = require('../controllers/updateController.js')
const {updateControllerUpdateItem} = require('../controllers/updateController.js')

const updateRoute = Router()

updateRoute.get('/', async (req, res) => {
    const allitems = await updateControllerGetAllItems()
    res.render('updateView', {inventory: allitems})
})

updateRoute.get('/delete/:id', async (req, res) => {
    console.log(req.params.id)
    await updateControllerdeleteItem(req.params.id)
    res.redirect('/update')
})

updateRoute.post('/updateentry', async (req, res) => {
    console.log(await updateControllerUpdateItem(req.body))
    res.redirect('/update')
})



module.exports = {updateRoute};