const express = require('express');
const produtosRoutes = require('./routes/produtosRoutes') 
const decoracaoRoutes = require('./routes/decoracaoRoutes') 
const salaDeJantarRoutes = require('./routes/salaDeJantarRoutes') 
const salaDeEstarRoutes = require('./routes/salaDeEstarRoutes') 
const quartoRoutes = require('./routes/quartoRoutes')
const cozinhaRoutes = require('./routes/cozinhaRoutes')
const banheiroRoutes = require('./routes/banheiroRoutes')
const App = express();

App.use(express.json())
App.use(express.urlencoded({extended: true}))
App.use(produtosRoutes)
App.use(banheiroRoutes)

App.listen(3000, () =>{
    console.log('API rodando na porta: http://localhost:3000')
})