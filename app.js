// Invocamos EXPRESS
const express = require('express');
const app = express();

// Invocamos al compresor
const compression = require('compression');
app.use(compression());

// Seteamos el motor de plantillas
app.set('view engine', 'ejs');

// Seteamos el directorio público
app.use('/resources', express.static('public'))
app.use('/resources', express.static(__dirname + '/public'))

// Seteamos urlencoded para que no haya errores al capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'})

// Llamar al Router
app.use('/', require('./routes/router'))

// Iniciamos el servidor
app.listen(process.env.PORT, (req, res) => {
    console.log('SERVER RUNNING')
})