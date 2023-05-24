const express = require('express');
const { decoracao } = require('../decoracao');
const decoracaoRoutes = express.Router();

decoracaoRoutes.get('/produtos/categoria/decoracao', (req, res) => {
    return res.json(decoracao)
});

module.exports = decoracaoRoutes;