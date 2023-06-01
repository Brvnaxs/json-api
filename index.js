const express = require('express');
const produtosRoutes = require('./routes/produtosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const decoracaoRoutes = require('./routes/decoracaoRoutes');
const salaDeJantarRoutes = require('./routes/salaDeJantarRoutes');
const salaDeEstarRoutes = require('./routes/salaDeEstarRoutes');
const quartoRoutes = require('./routes/quartoRoutes');
const cozinhaRoutes = require('./routes/cozinhaRoutes');
const banheiroRoutes = require('./routes/banheiroRoutes');
const cors = require('cors')
const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors())

App.use(produtosRoutes);
App.use(categoriasRoutes);
App.use(quartoRoutes);
App.use(decoracaoRoutes);
App.use(banheiroRoutes);
App.use(cozinhaRoutes);
App.use(salaDeEstarRoutes);
App.use(salaDeJantarRoutes);

const PORT = process.env.PORT || 3000;
App.listen(PORT, () => {
    console.log('API rodando.')
});
