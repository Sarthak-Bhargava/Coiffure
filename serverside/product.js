const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'thumbnails/'})

const router = express.Router()

router.get('/details', (request, response) => {
    const connection = db.connect()
    const statement = `select * from products`
    //console.log(statement)
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/', (request, response) => {
    const {cg_id} = request.params
    const connection = db.connect()
    const statement = `SELECT p.p_name, p.details, p.brand, p.thumbnail, c.cg_name, price FROM products p INNER JOIN categories c ON p.cg_id = c.cg_id`
    //console.log(statement)
    connection.query(statement, (error, products) => {
        connection.end()
        if (products.length > 0) {
            response.send(utils.createResult(error, products[0]))
        } else {
            response.send(utils.createResult('product does not exist'))
        }
    })
})

router.get('/products/:product_id', (request, response) => {
    const {product_id} = request.params
    const connection = db.connect()
    const statement = `select * from products where product_id = ${product_id}`
    console.log(statement)
    connection.query(statement, (error, products) => {
        connection.end()
        response.send(utils.createResult(error, products))
    })
})

/* router.get('/categories/:cg_id', (request, response) => {
    const {cg_id} = request.params
    const connection = db.connect()
    const statement = `select * from categories where cg_id = ${cg_id}`
    connection.query(statement, (error,categories ) => {
        connection.end()
        response.send(utils.createResult(error, categories))
    })
}) */

router.post('/', upload.single('thumbnail'), (request, response) => {
   // console.log("hello")
    const { p_name, details, brand, cg_id, price} = request.body
    const thumbnail = request.file.filename
    const connection = db.connect()
    const statement = `insert into products (p_name, details, brand, thumbnail, cg_id, price)values ('${p_name}','${details}','${brand}','${thumbnail}','${cg_id}',${price})`
    // console.log(statement)
    connection.query(statement, (error, products) => {
        connection.end()
        response.send(utils.createResult(error, products))
    })
})

router.put('/:product_id', (request, response) => {
    const { product_id } = request.params
    const { p_name, details, price } = request.body
    const connection = db.connect()
    const statement = `update products set p_name = '${p_name}',details  = '${details}', price = '${price}' where product_id = ${product_id}`
    connection.query(statement, (error, products) => {
        connection.end()
        response.send(utils.createResult(error, products))
    })
})

router.delete('/:product_id', (request, response) => {
    const { product_id } = request.params
    const connection = db.connect()
    const statement = `Delete  from products where product_id = ${product_id}`
    connection.query(statement, (error, products) => {
        connection.end()
        response.send(utils.createResult(error, products))
    })
})

module.exports = router