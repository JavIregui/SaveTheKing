// Invocamos Express
const express = require('express');
const router = express.Router()

// Invocamos a UserAgent
const useragent = require('express-useragent');
router.use(useragent.express());

// Invocamos a los controladores
const deviceChecker = require('../controllers/deviceChecker')

router.get('/', function(req, res){
    if(!req.useragent.isDesktop){
        res.send('MOVIL')
    }
    else{
        res.send('DESKTOP')
    }
});

// Rutas GET
// router.get('/RUTA', FUNCIÓN, (req, res) => {
//     res.render('VIEW', {PARÁMETRO: VALOR})
// })


// Rutas POST
//router.post('/RUTA', FUNCIÓN)


// Exportamos el router
module.exports = router;