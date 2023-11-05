const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

const canvasWidth = 600;
const canvasHeight = 400;

let direction = 1;

let posX = 0;
let posY = 1;
document.addEventListener("DOMContentLoaded", function() {


const snake = [];
snake.push({
    x: 2,
    y: 1,
    xNext: 0,
    yNext: 0,
    pinta: function(){
        ctx.font = '25px Serif'
        ctx.fillText('🟢', this.x * 20, this.y * 20);
    }
});
snake.push({...snake[0]});
snake.push({...snake[0]});
snake[1].x = 1;
snake[1].xNext = snake[0].x;
snake[1].yNext = snake[0].y;
snake[2].x = 0;
snake[2].xNext = snake[1].x;
snake[2].yNext = snake[1].y;

snake.forEach(mouse => mouse.pinta());

const comida = {
    x: 0,
    y: 0,
    aparece: function(){
        this.x = Math.floor(Math.random() * (canvasWidth / 20)); // Ajustar al ancho del lienzo
        this.y = Math.floor(Math.random() * (canvasHeight / 20)); // Ajustar al alto del lienzo
    },
    pinta: function(){
        ctx.fillText('👹', this.x * 20, this.y * 20)
    }
}

function nextMove(){
    snake.forEach((mouse, index) => {
        if(index === 0){
            mouse.x = posX;
            mouse.y = posY;
        } else {
            mouse.x = mouse.xNext;
            mouse.y = mouse.yNext;
            mouse.xNext = snake[index - 1].x;
            mouse.yNext = snake[index - 1].y;
        }
    })
}

comida.aparece();
setInterval(() => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    snake.forEach(mouse => mouse.pinta());
    comida.pinta();
    if(snake[0].x === comida.x && snake[0].y === comida.y){
        snake.push({...snake[0]});
        comida.aparece();
    }
    nextMove();
    switch(direction){
        case 1:
            posX++;
            break;
        case 2:
            posY++;
            break;
        case 3:
            posX--;
            break;
        case 4:
            posY--;
            break;
    }
    if(posX >= (canvasWidth / 20)) posX = 0;
    if(posX < 0) posX = (canvasWidth / 20) - 1;
    if(posY >= (canvasHeight / 20)) posY = 0;
    if(posY < 0) posY = (canvasHeight / 20) - 1;
}, 50);

document.querySelector('body')
    .addEventListener('keydown', (e) =>{
        e.preventDefault();
        switch(e.key){
            case 'ArrowRight':
                direction = 1;
                break;
            case 'ArrowDown':
                direction = 2;
                break;
            case 'ArrowLeft':
                direction = 3;
                break;
            case 'ArrowUp':
                direction = 4;
                break;
        }
    });

    const arrowButtons = document.querySelectorAll(".arrow-button");

    arrowButtons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonId = this.id;
            handleArrowButtonClick(buttonId);
        });
    });

    function handleArrowButtonClick(buttonId) {
        switch (buttonId) {
            case "up":
                direction = 4;
                break;
            case "down":
                direction = 2;
                break;
            case "left":
                direction = 3;
                break;
            case "right":
                direction = 1;
                break;
        }
    }
});