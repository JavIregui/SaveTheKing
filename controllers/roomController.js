// Lista de Salas
salas = [];

// Generador de códigos
var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
function generateCode(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

// Crear sala
exports.crearSala = (req, res) => {
    roomIndex = salas.length;
    salas.push({
        code: generateCode(6,chars),
        private: false,
        canBeJoined: true,
        head: req.ip,
        members : [],
        map: ''
    });
    salas[roomIndex].members.push(req.ip);
}

// Unirse a una sala
exports.joinRoom = (req, res) => {
    res.send(req.ip)
}

// Buscar sala disponible