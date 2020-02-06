const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')
const router = express.Router()



router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from user`
    connection.query(statement, (error, data) => {
        connection.end()
        const users = []
        for (let index = 0; index < data.length; index++) {
            const user = data[index]
            users.push({
                id: user['id'],
                username: user['username'],
                email: user['email']
            })
        }
        response.send(utils.createResult(error, users))
    })
})

router.post('/login', (request, response) => {
    const {email, password} = request.body
    const encryptedPassword = '' + cryptoJs.MD5(password)
    const connection = db.connect()
    const statement = `select * from user where email = '${email}' and password = '${encryptedPassword}'`
    connection.query(statement, (error, users) => {
        connection.end()
        
        if (users.length == 0) {
            response.send(utils.createResult('user does not exist'))
        } else {
            console.log('hello')
            const user = users[0]
            const info = {
                id: user['id'],
                username: user['username'],
                email: user['email']
            }
            response.send(utils.createResult(null, info))
        }
    })
})

router.post('/reset-password', (request, response) => {
    const {id, password} = request.body
    const encryptedPassword = '' + cryptoJs.MD5(password)
    const connection = db.connect()
    const statement = `update user set password = '${encryptedPassword}' where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})




router.post('/register', (request, response) => {
    const {username, email, password,firstname,fullname,lastname} = request.body
    const encryptedPassword = '' + cryptoJs.MD5(password)
    const connection = db.connect()

    const statement1 = `select * from user where email = '${email}'`
    connection.query(statement1, (error, users) => {

        if (users.length == 0) {
            // user with the required email does not exist

            // insert a new record
            const statement = `insert into user (username,firstname,lastname,fullname, email, password) values ('${username}','${firstname}','${lastname}','${fullname}', '${email}', '${encryptedPassword}')`
            connection.query(statement, (error, data) => {
                console.log(statement)
                connection.end()
                response.send(utils.createResult(error, data))
            })
        } else {
            // user with email already exists
            connection.end()
            response.send(utils.createResult('email exists. please use another email.'))
        }


    })

    
})

module.exports = router