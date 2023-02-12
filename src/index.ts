const express = require('express')
const app = express()

const porta = process.env.PORT || 3000;
const produtos = require('../src/produtos/produtos.json')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/produtos', (req: any, res: any)=> {
    return res.json(produtos)
})

const server = app.listen(porta, ()=> console.log(`App ouvindo a porta ${porta}`))

process.on("SIGINT", ()=> {
    server.close()
    console.log(`App Finalizado`)
})