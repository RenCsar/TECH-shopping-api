import { Router } from "express";
import { app } from "../app";

const router = Router()

app.get('/', (req: any, res: any)=> {
    res.json({
        message: 'Primeira rota criada com sucesso'
    })
})