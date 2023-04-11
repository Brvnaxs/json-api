const {produtos} = require('../produtos.json')
const express = require('express');
const cozinhaRoutes = express.Router();

cozinhaRoutes.get("/produtos/cozinha", (req, res) => {
    return res.json(produtos.cozinha)
})

module.exports = cozinhaRoutes