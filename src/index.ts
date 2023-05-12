const express = require('express')
const app = express()
import dotenv from 'dotenv'

dotenv.config()

const porta = process.env.PORT || 3000;
const produtos = require('../src/produtos/produtos.json')
const cors = require("cors")

app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/produtos', (_: any, res: any)=> {
    return res.status(200).json(produtos)
})

const server = app.listen(porta, ()=> console.log(`App ouvindo a porta ${porta}`))

process.on("SIGINT", ()=> {
    server.close()
    console.log(`App Finalizado`)
})