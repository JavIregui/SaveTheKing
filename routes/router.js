// Invocamos Express
const express = require('express');
const router = express.Router()

// Invocamos a los controladores
const deviceChecker = require('../controllers/deviceChecker')

router.get('/', deviceChecker.checkDevice, (req, res) => {
    res.render('index')
});
router.get('/lobby', deviceChecker.checkDevice, (req, res) => {
    res.render('lobby')
})
router.get('/mobile', (req, res) => {
    res.render('mobile')
});

// Rutas GET
// router.get('/RUTA', FUNCIÓN, (req, res) => {
//     res.render('VIEW', {PARÁMETRO: VALOR})
// })


// Rutas POST
//router.post('/RUTA', FUNCIÓN)


// Exportamos el router
module.exports = router;