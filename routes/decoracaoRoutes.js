const {produtos} = require('../produtos.json')
const express = require('express');
const decoracaoRoutes = express.Router();

decoracaoRoutes.get("/produtos/decoracao", (req, res) => {
    return res.json(produtos.decoracao)
})

module.exports = decoracaoRoutes