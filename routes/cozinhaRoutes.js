const express = require('express');
const { cozinha } = require('../cozinha')
const cozinhaRoutes = express.Router();

cozinhaRoutes.get('/produtos/categoria/cozinha', (req, res) => {
    return res.json(cozinha)
});

module.exports = cozinhaRoutes;