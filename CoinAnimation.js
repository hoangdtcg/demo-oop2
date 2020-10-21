let canvas = document.getElementById("myCanvas");
let Coin = function (canvas,img,number) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 440;
    this.height = 100;
    this.img = img;
    this.numberSprite = number;
    this.frameIndex = 2;

    this.loadImage = function () {
        this.coinImg = new Image();
        this.coinImg.src = this.img;
        this.draw();
    }

    this.updateFrame = function(){
        if(this.frameIndex < this.numberSprite-1) {
            this.frameIndex++;
        }else{
            this.frameIndex = 0;
        }
    }

    this.draw = function () {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        this.ctx.drawImage(
            this.coinImg,
            this.frameIndex*this.width/this.numberSprite,
            0,this.width/this.numberSprite,
            this.height,
            0,0,
            this.width/this.numberSprite,
            this.height
        );
    }
}

let coin = new Coin(canvas,"Images/coin.png",10);
coin.loadImage();
loop2();
function loop() {
    coin.updateFrame();
    coin.draw();
    requestAnimationFrame(loop);
}

function loop2() {
    setInterval(function () {
        coin.updateFrame();
        coin.draw();
    },100);
}
