"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const porta = process.env.PORT || 3000;
const produtos = require('../src/produtos/produtos.json');
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({
    extended: true,
}));
app.get('/produtos', (req, res) => {
    return res.status(200).json(produtos);
});
const server = app.listen(porta, () => console.log(`App ouvindo a porta ${porta}`));
process.on("SIGINT", () => {
    server.close();
    console.log(`App Finalizado`);
});
