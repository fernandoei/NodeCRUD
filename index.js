"use strict";

var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();

/* Utilizando Jade para las views. */
app.set('view engine','jade');

/* Activamos el log de desarollo. */
app.use(morgan('dev'));

/* Activamos un directorio de archvios estáticos. */
app.use(express.static('public'));

/* Establecer la conexión con MongoDB. */
mongoose.connect('mongodb://localhost/crud');

/* Tratar el error de conexión. */
mongoose.connection.on('error',console.error.bind("Error de conexión"));

app.get('/ejemplo',(req, res) =>{
    res.render('ejemplo');
});

app.get('/variables',(req, res) =>{
    res.render('variables',{
        'pageTitle':'Titutlo en variable',
        'parrafo': req.query.nombre || 'Parrafo en variable'
    });
});

/* Iniciamos el servidor. */
app.listen(3000,()=>{
   console.log('El servidor esta escuchando'); 
});