// Lista de Salas
var salas = [];

module.exports.gameRooms = salas;

// Generador de códigos
var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
function generateCode(length, chars) {
    var code = '';
    for (var i = length; i > 0; --i) code += chars[Math.floor(Math.random() * chars.length)];
    result = code.toUpperCase()
    return result;
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function getRandomMap(){
    num = randomIntFromInterval(0,2)
    switch (num) {
        case 0:
            return 'ciudad'
        case 1:
            return 'mansion'
        case 2:
            return 'wildWest'
        default:
            return 0
    }
}

// Crear sala
exports.crearSala = (req, res, next) => {
    roomIndex = salas.length;
    salas.push({
        code: generateCode(6,chars),
        private: true,
        canBeJoined: true,
        head: req.ip,
        members : [],
        map: req.params.map
    });
    salas[roomIndex].members.push(req.ip);
    req.room = salas[roomIndex]
    return next();
}
// Unirse a una sala
exports.joinRoom = (req, res) => {
    const code = req.body.roomCode.toUpperCase();
    const roomIndex = salas.map(function(e) { return e.code; }).indexOf(code);
    if(roomIndex < 0){
        res.redirect('lobby')
    } else {
        if(salas[roomIndex].canBeJoined && salas[roomIndex].members.length < 14 && !salas[roomIndex].members.includes(req.ip)){
            salas[roomIndex].members.push(req.ip);
            req.room = salas[roomIndex]
            res.redirect('/room/' + code)
        }
        else{
            res.redirect('/lobby')
        }
    }
}
// Buscar sala disponible
exports.buscarSala = (req, res, next) => {
    if(salas.length == 0){
        salas.push({
            code: generateCode(6,chars),
            private: false,
            canBeJoined: true,
            head: req.ip,
            members : [],
            map: getRandomMap()
        });
        salas[0].members.push(req.ip);
        req.room = salas[0]
        return next();
    } else {
        for(i = 0; i < salas.length; i++){
            if(!salas[i].private && salas[i].canBeJoined && salas[i].members.length < 14 && !salas[i].members.includes(req.ip)){
                salas[i].members.push(req.ip);
                req.room = salas[i]
                return next();
            }
        }
        roomIndex = salas.length;
        salas.push({
            code: generateCode(6,chars),
            private: false,
            canBeJoined: true,
            head: req.ip,
            members : [],
            map: getRandomMap()
        });
        salas[roomIndex].members.push(req.ip);
        req.room = salas[roomIndex]
        return next();
    }
}

exports.getRoom = (req, res, next) =>{
    const code = req.params.room;
    const roomIndex = salas.map(function(e) { return e.code; }).indexOf(code);
    if(roomIndex < 0){
        res.redirect('/lobby')
    }
    else{
        req.room = salas[roomIndex];
        return next();
    }
}
exports.isMember = (req, res, next) =>{
    if(req.room.members.includes(req.ip)){
        return next();
    }
    else{
        res.redirect('lobby');
    }
}