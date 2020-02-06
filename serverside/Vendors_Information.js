const express = require('express')
const db = require('./db')
const utils = require('./utils')




const router = express.Router()

router.get('/', (request, response) => {
        const connection = my_db.connect()
        const statement = ` select * from VendorsInformation`
        connection.query(statement, (error, data) => {
            connection.end()
            response.send(utils.createResult(error, data))

        })
    })
    //for inserting info 
router.post('/', (request, response) => {

        const {
            VID,
            CityID,
            V_shopName,
            V_Address,
            V_ContactNO,
            Vshop_OPEN_TIME,
            Vshop_CLOSE_TIME,

        } = request.body
        const connection = db.connect()

        const statement = `insert into VendorsInformation ( VID,CityID,V_shopName,V_Address,V_ContactNO,Vshop_OPEN_TIME,Vshop_CLOSE_TIME ) 
    values ('${VID}','${CityID}','${V_shopName}','${V_Address}','${V_ContactNO}','${Vshop_OPEN_TIME}','${Vshop_CLOSE_TIME}')`
        connection.query(statement, (error, data) => {
            connection.end()
            response.send(utils.createResult(error, data))
        })
    })
    //for updating info
router.put('/:id', (request, response) => {
    const { id } = request.params
    const { V_Address, V_ContactNO } = request.body
    const connection = db.connect()
    const statement = `update VendorsInformation set V_Address = '${V_Address}',V_ContactNO = '${V_ContactNO}',
        Address_Discription = '${Address_Discription}'  where PID = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:id', (request, response) => {
    const { id } = request.params
    const { VID } = request.body
    const connection = db.connect()
    const statement = `Delete  from VendorsInformation where VID = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

module.exports = router