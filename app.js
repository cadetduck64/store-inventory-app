const express = require('express')
const app = express()

//view engines
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: true}))


const {indexRoute} = require('./routes/indexRoute.js')
const {searchRoute} = require('./routes/searchRoute.js')
const {createRoute} = require('./routes/createRoute.js')
const {updateRoute} = require('./routes/updateRoute.js')


app.use('/', indexRoute)
app.use('/search', searchRoute)
app.use('/create', createRoute)
app.use('/update', updateRoute)

const PORT = 3000
app.listen(PORT, () => {
    console.log('app server running on port: ' + PORT)
})