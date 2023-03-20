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

function mute(){
    const muteIcon = document.getElementById("sound");
    const unmuteIcon = document.getElementById("silence");
    document.cookie = "mute= true";
    unmuteIcon.style.display = "block";
    muteIcon.style.display = "none";
}

function unmute(){
    const muteIcon = document.getElementById("sound");
    const unmuteIcon = document.getElementById("silence");
    document.cookie = "mute= false";
    muteIcon.style.display = "block";
    unmuteIcon.style.display = "none";
}

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

window.onload = function() {
    const hoverSound = document.getElementById('hoverSound');
    const playBtn = document.getElementById("jugar");
    const insta = document.getElementById("instaLink");
    const back = document.getElementById("backLink");
    const muteBtn = document.getElementById("mute");
    const help = document.getElementById("helpLink");
    const buscar = document.getElementById("buscar");
    const crear = document.getElementById("crear");
    const code = document.getElementById("roomCode");
    const join = document.getElementById("unirse");

    if(muteBtn){
        getIcon();
    }

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

    if(back && help && muteBtn && buscar && crear && code && join){
        back.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
            hoverSound.play();
        });
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
        muteBtn.addEventListener('mouseover', function() {
            if(getCookie() == "true"){
                hoverSound.volume = 0;
            }
            else{
                hoverSound.volume = 0.2;
            }
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


