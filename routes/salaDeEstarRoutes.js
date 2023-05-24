const express = require('express');
const { salaDeEstar } = require('../salaDeEstar');
const salaDeEstarRoutes = express.Router();

salaDeEstarRoutes.get('/produtos/categoria/sala-de-estar', (req, res) => {
    return res.json(salaDeEstar)
});

module.exports = salaDeEstarRoutes;