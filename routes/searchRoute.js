const {Router} = require('express')
const {searchControllerFunction} = require('../controllers/searchController.js')

const searchRoute = Router()

searchRoute.get('/', async (req, res) => {
    console.log('search')
    res.render('searchView')
    // searchControllerFunction()
})

searchRoute.post('/query', async (req, res) => {
    // console.log(req.body)
    const searchQuery  = await searchControllerFunction(req.body)
    // searchQuery.map((entry) => {console.log(entry)})
    console.log(searchQuery)
    res.render('searchView', {searchResults: searchQuery})
})

module.exports = {searchRoute}

// <% if (locals.searchResults != undefined) {%>
//     <% } %>