let negroBtn = document.getElementById("negro");
let verdeBtn = document.getElementById("verde");
let azulBtn = document.getElementById("azul");
let amarilloBtn = document.getElementById("amarillo");
let carro = document.getElementById("carro");

negroBtn.onclick = function () {
    carro.style.backgroundImage = "url(img/Lamborghini_Black.jpg)";
}

azulBtn.onclick = function () {
    carro.style.backgroundImage = "url(img/Lamborghini_blue.jpg)";
}

verdeBtn.onclick = function () {
    carro.style.backgroundImage = "url(img/Lamborghini_SeeGreen.jpg)";
}

amarilloBtn.onclick = function () {
    carro.style.backgroundImage = "url(img/Lamborghini_Yellow.jpg)";
}