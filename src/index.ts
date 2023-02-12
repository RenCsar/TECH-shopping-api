const express = require('express')
const app = express()

const porta = process.env.PORT || 3000

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/', (req: any, res: any)=> {
    res.json({
        message: 'Primeira rota criada com sucesso'
    })
})

const server = app.listen(porta, ()=> console.log(`App ouvindo a porta ${porta}`))

process.on("SIGINT", ()=> {
    server.close()
    console.log(`App Finalizado`)
})