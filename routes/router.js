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
router.get('/buscarSala', deviceController.checkDevice, roomController.buscarSala, (req, res) => {
    res.redirect('/room/' + req.room.code)
});
router.get('/crearSala', deviceController.checkDevice, (req, res) => {
    res.render('crearSala')
});
router.get('/crearSala/:map', deviceController.checkDevice, roomController.crearSala, (req, res) => {
    res.redirect('/room/' + req.room.code)
});
router.get('/room', deviceController.checkDevice, (req, res) => {
    res.redirect('lobby');
});
router.get('/room/:room', deviceController.checkDevice, roomController.getRoom, roomController.isMember, (req, res) => {
    res.render('sala', {room: req.room})
});

// Rutas POST
router.post('/joinRoom', deviceController.checkDevice, roomController.joinRoom)

// Exportamos el router
module.exports = router;