export default class Pipe {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        const topPipeImg = new Image();
        topPipeImg.src = '/img/topPipe.png';    

        const botPipeImg = new Image();
        botPipeImg.src = '/img/botPipe.png';  

        this.botPipeImg = botPipeImg;
        this.topPipeImg = topPipeImg;
        this.pipeWidth = 26;
        this.pipeX = gameWidth;
        this.pipeSpeed = 1;

        this.rand = Math.floor(Math.random() * 50 - 50);
    }

    draw(ctx) {

        if(this.pipeX + this.pipeWidth < 0){
            this.pipeX = this.gameWidth;
            this.rand = Math.floor(Math.random() * 50 - 50);
        }

        this.pipeX -= this.pipeSpeed;
        ctx.drawImage(this.topPipeImg, this.pipeX, this.rand);
        ctx.drawImage(this.botPipeImg, this.pipeX, this.gameHeight - ((this.topPipeImg.height - this.rand) - 80));
    }
}