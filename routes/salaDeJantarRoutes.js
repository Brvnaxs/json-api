const express = require('express');
const { salaDeJantar } = require('../salaDeJantar');
const salaDeJantarRoutes = express.Router();

salaDeJantarRoutes.get('/produtos/categoria/sala-de-jantar', (req, res) => {
    return res.json(salaDeJantar)
});

module.exports = salaDeJantarRoutes;