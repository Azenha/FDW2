const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/produtos', (req, res) => {
    res.send('Produto!')
})

app.get('/produtos/:id', (req, res) => {
    res.send('Produto! ID')
})

app.post('/produtos', (req, res) => {
    res.send('Produto POST!')
})

app.put('/produtos/:id', function (req, res) {
    res.send('Produto PUT!');
  });

app.delete('/produtos/:id', function (req, res) {
    res.send('Produto DELETE!');
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

