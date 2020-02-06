const express = require('express')
const bodyParser = require('body-parser')

// import the routers
const routerUser = require('./user')
const routerProduct = require('./product')
const routerCategory = require('./category')
const routerAdmin = require('./Admin')
const routerCity = require('./City')
const routerVendors_Information = require('./Vendors_Information')

const app = express()

// add middlewares

// for CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// dont need any route for any file in thumbanils directory
//app.use(express.static('thumbnails'))
app.use(bodyParser.json())
app.use('/user', routerUser)
app.use('/product', routerProduct)
app.use('/category', routerCategory)
app.use('/Admin', routerAdmin)
app.use('/City', routerCity)
app.use('/Vendors_Information', routerVendors_Information)
app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})