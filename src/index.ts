import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { UserController } from './controller/UserController'


dotenv.config()

// conexão com o banco de dados mysql

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const cors = require("cors") // dá permissão para o frontend acessar a api

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*") // quais endereços de requisições estão permitidos acessar o endpoint
    app.use(cors())
    next()
})

app.use(express.json()) //padrão de tranferência de dados no padrão json


app.post("/user/signup", new UserController().create) //endereços dos endpoints de signup e login
app.post("/user/login", new UserController().login)


const server = app.listen(process.env.PORT || 3306, () => { //servidor que permace escutando as requisições que chegam
    if(server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log('Failure upon starting server.')
    }
})