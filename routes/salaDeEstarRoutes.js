const {produtos} = require('../produtos.json')
const express = require('express');
const salaDeEstarRoutes = express.Router();

salaDeEstarRoutes.get("/produtos/sala-de-estar", (req, res) => {
    return res.json(produtos['sala-de-estar'])
})

module.exports = salaDeEstarRoutes