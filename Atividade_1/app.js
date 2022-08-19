const express = require('express')
const app = express()
const port = 3000

let listaProdutos = [];
let geradorId = 1;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/produtos', (req, res) => {
    res.send('Produto!')
})

app.get('/produtos/:id', (req, res) => {
    res.send('Buscando o produto!')
})

app.post('/produtos', (req, res) => {
    //res.send('Cadastro de produto!')
    res.json(req.body)
})

app.put('/produtos/:id', function (req, res) {
    res.send('Atualizando o produto!');
  });

app.delete('/produtos/:id', function (req, res) {
    res.send('Deletando o produto!');
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

