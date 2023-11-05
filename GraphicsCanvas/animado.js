const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');
let idX = 0;
let idY = 0;
let ini = 0;

function rgbRandom() {
    const letras = '0123456789abcdef';
    let colorRgb = '#';
    for (let i = 0; i < 6; i++) {
        colorRgb += letras.charAt(Math.floor(Math.random() * 16));
    }
    return colorRgb;
}

function hslColor(h){
    return `hsl(${ h },50%,50%)`;
}

function cuadro(x, y) {
    ctx.fillStyle = hslColor(ini);
    ini += 2;
    ctx.fillRect(x, y, 40, 40);
    ctx.strokeRect(x, y, 40, 40);
}

setInterval(() => {
    cuadro(idX, idY);
    if (idX < 380) {
        idX += 40;
    } else {
        idX = 0;
        idY += 40;
    }
    if (idY >= 380) {
        clearInterval();
    }
}, 20);