import Player from './Player.js';
import Pipe from './Pipe.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const bg = new Image();
bg.src = '/img/background.png';  

const player = new Player(WIDTH, HEIGHT);
const pipe = new Pipe(WIDTH, HEIGHT);

var points = 0;

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);  
    ctx.drawImage(bg, 0, 0); 
    
    player.draw(ctx);
    pipe.draw(ctx);

    points++;
    ctx.font = "20px Arial";
    ctx.fillText(`Points: ${points}`, 0, 20);

    checkCollision();
}

function checkCollision() {
    const playerY = player.playerY;
    const playerX = player.playerX + 12;
    const topY = pipe.topPipeImg.height + pipe.rand;
    const botY = (pipe.topPipeImg.height + pipe.rand) + 80;


    if(playerY <= topY && playerX >= pipe.pipeX && playerX <= pipe.pipeX + pipe.pipeWidth){
        points = 0;
    }

    if(playerY >= botY && playerX >= pipe.pipeX && playerX <= pipe.pipeX + pipe.pipeWidth){
        points = 0;
    } 

    if(playerY >= HEIGHT || playerY <= 0){
        points = 0;
    }
}

document.addEventListener('keypress', (event) => {
    if(event.keyCode === 32){
        player.jump();
    }
});

setInterval(draw, 1000/60);