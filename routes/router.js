// Invocamos Express
const express = require('express');
const router = express.Router()

// Invocamos a los controladores
const deviceChecker = require('../controllers/deviceChecker')

// Rutas GET
// router.get('/RUTA', FUNCIÓN, (req, res) => {
//     res.render('VIEW', {PARÁMETRO: VALOR})
// })


// Rutas POST
//router.post('/RUTA', FUNCIÓN)


// Exportamos el router
module.exports = router;