// Invocamos Express
const express = require('express');
const router = express.Router()

// Invocamos a UserAgent
const useragent = require('express-useragent');
router.use(useragent.express());

// Invocamos a los controladores
const deviceController = require('../controllers/deviceController')
const roomController = require('../controllers/roomController')

router.get('/', deviceController.checkDevice, (req, res) => {
    res.render('index')
});
router.get('/lobby', deviceController.checkDevice, (req, res) => {
    res.render('lobby')
})
router.get('/mobile', (req, res) => {
    res.render('mobile')
});
router.get('/buscarSala', (req, res) => {
    res.send(req.ip)
});
router.get('/crearSala', (req, res) => {
    res.render('crearSala')
});

// Rutas POST
router.post('/joinRoom', roomController.joinRoom)

// Exportamos el router
module.exports = router;