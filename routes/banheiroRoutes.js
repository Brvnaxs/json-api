const express = require('express');
const { banheiro } = require('../banheiro');
const banheiroRouter = express.Router();

banheiroRouter.get('/produtos/categoria/banheiro', (req, res) => {
    return res.json(banheiro)
});

module.exports = banheiroRouter;
