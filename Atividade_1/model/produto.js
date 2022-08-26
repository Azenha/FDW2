const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// OU const { Schema } = mongoose;

const ProdutosSchema = new Schema({
    nome: String,
    preco: Number
},
    {
        versionKey: false
    });

module.exports = mongoose.model("produtos", ProdutosSchema);