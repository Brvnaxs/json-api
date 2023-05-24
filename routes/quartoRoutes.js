const express = require('express');
const { quarto } = require('../quarto');
const quartoRoutes = express.Router();

quartoRoutes.get('/produtos/categoria/quarto', (req, res) => {
    return res.json(quarto)
});

module.exports = quartoRoutes;