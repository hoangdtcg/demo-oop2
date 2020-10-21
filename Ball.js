class Ball {
    constructor(x,y,radius,speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }

    draw(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.arc(this.x,this.y,this.radius,0,Math.PI*2);
        pen.strokeStyle = 'pink';
        pen.lineWidth = 5;
        pen.fillStyle = 'black';
        pen.stroke();
        pen.fill();
        pen.closePath();
    }

    drawImg(canvas){
        // let img = new Image();
        let img = document.getElementById('base-img');
        // img.src = 'ball.jpeg';
        let pen = canvas.getContext('2d');
        pen.drawImage(img,this.x,this.y,100,100);
    }

    move(){
        this.x += this.speed;
    }

    fallDown(){
        this.y += this.speed;
    }

    flyTop(){
        this.y -= this.speed;
    }
}
