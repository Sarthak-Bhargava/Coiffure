const express = require('express')
const db = require('./db')
const utils = require('./utils')
const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from  City`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))

    })

})

router.post('/', (request, response) => {

    const { City_Area, City_Name } = request.body
    const connection = db.connect()
    const statement = `insert into City ( City_Area, City_Name) values ('${City_Area}','${City_Name}' )`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))

    })

})
router.delete('/:id', (request, response) => {
    const { id } = request.params
    const connection = db.connect()
    const statement = `Delete  from City where CityID = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})
module.exports = router