const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    usuario: String,
    email: String,
    senha: String
},
    {
        versionKey: false
    });

module.exports = mongoose.model("usuarios", UsuariosSchema);