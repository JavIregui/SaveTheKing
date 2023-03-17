// Get random color from list
function setColor(){
    const colors = ['#fdea18', '#53e200', '#008bd8', '#e42320', '#ef8216'];
    const transition = document.getElementById("transition");
    var color = colors[Math.round(Math.random() * 4)];
    transition.style.backgroundColor = color;
}

window.onload = setColor;
