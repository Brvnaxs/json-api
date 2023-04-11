const {produtos} = require('../produtos.json')
const express = require('express');
const produtoRoutes = express.Router();

produtoRoutes.get('/produtos', (req, res) =>{
    res.json([produtos['sala-de-estar'],produtos['sala-de-jantar'],produtos.banheiro,produtos.cozinha,produtos.decoracao,produtos.quarto])
})


module.exports = produtoRoutes;







