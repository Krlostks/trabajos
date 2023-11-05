const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');
let dirX = 1;
let dirY = 1;
let idx = 10;
let idy = 10;
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

function cuadrito(x, y){
    ctx.fillStyle = hslColor(ini);
    ini += 2;
    ctx.fillRect(x, y, 40, 40);
}

function bolita(x, y) {
    ctx.fillStyle = hslColor(ini);
    ini += 1
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
}

setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    cuadrito(idx, idy);
    idx++;
    if(idx > 640) idx=20;

    if (dirX === 1 && dirY === 1) {
         idx += 1;
         idy += 1;
     } else if (dirX === 1 && dirY === 2) {
         idx += 1;
         idy -= 1;
     } else if (dirX === 2 && dirY === 1) {
         idx -= 1;
         idy += 1;
     } else {
         idx -= 1;
         idy -= 1;
     }
     if (idx > 580) dirX = 1;
     if (idx < 10) dirX = 1;
     if (idy > 390) dirY = 2;
     if (idy < 10) dirY = 1;
}, 1);