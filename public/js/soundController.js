// Devuelve si está muteado o no
function getCookie() {
    let name = "mute=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for(let i = 0; i <cookieArray.length; i++) {
      let c = cookieArray[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        cookieValue = c.substring(name.length, c.length);
        return cookieValue;
      }
    }
    return "";
}

// Guarda en una cookie el segundo en el que se ha quedado la música
function saveMusic() {
    const music = document.getElementById("music");
    document.cookie = "music= " + music.currentTime;
}

// Devuelve el segundo en el que se ha quedado la música
function getMusicTime() {
    let name = "music=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for(let i = 0; i <cookieArray.length; i++) {
      let c = cookieArray[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        cookieValue = c.substring(name.length, c.length);
        return cookieValue;
      }
    }
    return 0;
}

// Mutea la web
function mute(){
    const music = document.getElementById("music");
    const muteIcon = document.getElementById("sound");
    const unmuteIcon = document.getElementById("silence");
    document.cookie = "mute= true";
    unmuteIcon.style.display = "block";
    muteIcon.style.display = "none";
    music.volume = 0;
}

// Desmutea la web
function unmute(){
    const music = document.getElementById("music");
    const muteIcon = document.getElementById("sound");
    const unmuteIcon = document.getElementById("silence");
    document.cookie = "mute= false";
    muteIcon.style.display = "block";
    unmuteIcon.style.display = "none";
    music.volume = 0.01;
}

// Muestra el icono correcto para el boton de muteado
function getIcon(){
    const muteIcon = document.getElementById("sound");
    const unmuteIcon = document.getElementById("silence");
    isMuted = getCookie();
    if (isMuted == "true") {
        unmuteIcon.style.display = "block";
        muteIcon.style.display = "none";
    }
    else{
        muteIcon.style.display = "block";
        unmuteIcon.style.display = "none";
    }
}

// Al cargar encuentra todas las posibles intetracciones con sonido y les añade un EventListener
window.onload = function() {
    // Sonidos
    const music = document.getElementById("music");
    const hoverSound = document.getElementById('hoverSound');
    // Landing
    const playBtn = document.getElementById("jugar");
    const insta = document.getElementById("instaLink");
    // Lobby
    const back = document.getElementById("backLink");
    const muteBtn = document.getElementById("mute");
    const help = document.getElementById("helpLink");
    const buscar = document.getElementById("buscar");
    const crear = document.getElementById("crear");
    const code = document.getElementById("roomCode");
    const join = document.getElementById("unirse");

    // Cambia el icono de muteo al correcto
    if(muteBtn){
        getIcon();
    }

    // Música del juego
    music.loop = true;
    music.currentTime = getMusicTime();
    if(getCookie() == "true"){
        music.volume = 0;
    }
    else{
        music.volume = 0.01;
    }
    music.play();

    // Sonidos de interacción
        // Globales
    if(back && muteBtn){
        back.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
            hoverSound.play();
        });
        muteBtn.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
            hoverSound.play();
        });
    }
        // Landing
    if(insta && playBtn) {
        playBtn.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
            hoverSound.play();
        });
        insta.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
            hoverSound.play();
            hoverSound.play();
        });
    }
        // Lobby
    if(help && buscar && crear && code && join){
        help.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
            hoverSound.play();
            hoverSound.play();
        });
        buscar.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
            hoverSound.play();
        });
        crear.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
            hoverSound.play();
            hoverSound.play();
        });
        code.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
            hoverSound.play();
        });
        join.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
            hoverSound.play();
            hoverSound.play();
        });
    }
}


