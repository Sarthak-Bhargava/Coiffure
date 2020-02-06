const express = require('express')
const db = require('./db')
const utils = require('./utils')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from  categories`
    connection.query(statement, (error, categories) => {
        connection.end()
        response.send(utils.createResult(error, categories))

    })
})
router.get('/:cg_id', (request, response) => {
    const {cg_id} = request.params
    const connection = db.connect()
    const statement = `select * from categories where cg_id = ${cg_id}`
    connection.query(statement, (error,categories ) => {
        connection.end()
        response.send(utils.createResult(error, categories))
    })
})

router.post('/', (request, response) => {
    const {cg_name} = request.body

    const connection = db.connect()
    const statement = `insert into categories (cg_name) values ('${cg_name}')`
    connection.query(statement, (error,categories ) => {
        connection.end()
        response.send(utils.createResult(error, categories))
    })
})

router.put('/:cg_id', (request, response) => {
    const { cg_id } = request.params
    const { cg_name } = request.body
    const connection = db.connect()
    const statement = `update categories set cg_name = '${cg_name}' where cg_id = ${cg_id}`
    connection.query(statement, (error, categories) => {
        connection.end()
        response.send(utils.createResult(error, categories))
    })
})

 router.delete('/:cg_id', (request, response) => {
    const { cg_id } = request.params
    //const { cg_id } = request.body
    const connection = db.connect()
    const statement = `delete from categories where cg_id = ${cg_id}`
    connection.query(statement, (error, categories) => {
        connection.end()
        response.send(utils.createResult(error, categories))
    })
}) 

module.exports = router