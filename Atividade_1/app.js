const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const { use } = require('./rotas/produto_rotas');
const port = 3000

const rotaProduto = require('./rotas/produto_rotas');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cors());

mongoose.connect('mongodb://localhost:27017/app_produtos')
    .then(() => {
        console.log('BD conectado')
    }).catch((error) => {
        console.log('Erro ao conectar ao BD')
    });

app.use('/api/produtos', rotaProduto);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})