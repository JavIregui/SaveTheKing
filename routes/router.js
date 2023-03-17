// Invocamos Express
const express = require('express');
const router = express.Router()

// Invocamos a UserAgent
const useragent = require('express-useragent');
router.use(useragent.express());

// Invocamos a los controladores
const deviceChecker = require('../controllers/deviceChecker')

router.get('/', deviceChecker.checkDevice, (req, res) => {
    res.render('index')
});
router.get('/lobby', deviceChecker.checkDevice, (req, res) => {
    res.render('lobby')
})
router.get('/mobile', deviceChecker.checkDevice, (req, res) => {
    res.redirect('/')
});

// Rutas POST
//router.post('/RUTA', FUNCIÓN)

// Exportamos el router
module.exports = router;