const {produtos} = require('../produtos.json')
const express = require('express');
const quartoRoutes = express.Router();

quartoRoutes.get("/produtos/quarto", (req, res) => {
    return res.json(produtos.quarto)
})

module.exports = quartoRoutes