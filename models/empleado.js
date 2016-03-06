/* Esquema para el empleado y su modelo. */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emplSchema = new Schema({
   nombre: String,
   apellidos: String,
   fechaNac: Date,
   fechaCreacion: {type:Date, default: Date.now},
   descripcion: String
});

var emplModel = mongoose.model('Empleado'.emplSchema);
