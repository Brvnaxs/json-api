const express = require('express');
const categoriasRoutes = express.Router();

categoriasRoutes.get('/produtos/categorias', (req, res) => {
    return res.json([
        "quarto",
        'decoracao',
        'cozinha',
        'banheiro',
        'sala-de-estar',
        'sala-de-jantar'
    ])
});

module.exports = categoriasRoutes;