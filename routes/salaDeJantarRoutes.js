const {produtos} = require('../produtos.json')
const express = require('express');
const salaDeJantarRoutes = express.Router();


salaDeJantarRoutes.get("/produtos/sala-de-jantar", (req, res) => {
    return res.json(produtos['sala-de-jantar'])
})

module.exports = salaDeJantarRoutes