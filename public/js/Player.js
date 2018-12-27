export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        const playerImg = new Image();
        playerImg.src = '/img/player.png';   
        
        this.playerImg = playerImg;
        this.playerY = gameHeight/2 - playerImg.height;
        this.playerX = this.gameWidth/2 - this.playerImg.width;

       this.gravity = 0.25;
       this.velocity = 0;
       this.lift = -5;

       this.frame = [0, 18, 36]; 
       this.frameRate = 0;
    }

    draw(ctx) {
        this.velocity += this.gravity;
        this.playerY += this.velocity;
        ctx.drawImage(this.playerImg, this.frame[this.frameRate], 0, 17, 12, this.playerX, this.playerY, 17, 12);
    } 

    jump() {
        if(this.frameRate < 2){
            this.frameRate++;
        } else {
            this.frameRate = 0;
        }

        this.velocity += this.lift;
    }
}