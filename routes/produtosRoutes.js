const express = require('express');
const { produtos } = require('../produtos');
const produtoRoutes = express.Router();

produtoRoutes.get('/produtos', (req, res) => {
    return res.json(produtos)
});

module.exports = produtoRoutes;







