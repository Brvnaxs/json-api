const {produtos} = require('../produtos.json')
const express = require('express');
const banheiroRouter = express.Router();

banheiroRouter.get("/produtos/banheiro", (req, res) => {
    return res.json(produtos.banheiro)
})

banheiroRouter.get("produtos/banheiro/id", (req, res) => {
    const id = req.params.id
    if(!produtos.banheiro[id]){
        return res.status(422).json({message: "Este produto não se encontra em nosso catálogo."})
    }else{
        return res.json(produtos.banheiro[id])
    }
})

module.exports = banheiroRouter
