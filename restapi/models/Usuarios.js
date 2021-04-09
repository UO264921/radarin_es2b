const { Schema, model } = require('mongoose');

const UsuariosSchema = new Schema ({
    nombreUsuario: String,
    webid : String,
    coordinates : String
});

module.exports = model('Usuarios',UsuariosSchema);