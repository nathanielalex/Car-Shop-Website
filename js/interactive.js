// get canvas
var canvas = document.getElementById('canvas');

// canvas context
var c = canvas.getContext('2d');

let w, h,  circleArray, particleAmount = 500, pColor = "rgba(255, 255, 255, .2)",
mouse = {
    x: undefined,
    y: undefined,
    radius: (canvas.width * .3)
};

function init() {
    resizeReset();
    circleArray = [];
    for (let i = 0; i < particleAmount; i++) {
        
        circleArray.push(new Circle());
    }
    //akan panggil setiap frame
    // requestAnimationFrame(animationLoop);
    animationLoop();
    //ini cuman start animasi
}


window.addEventListener("mousemove", mousemove);
window.addEventListener("mouseout", mouseout);
window.addEventListener("resize", resizeReset);

function mousemove(event) {
    mouse.x = event.x;
    mouse.y = event.y;
}

function mouseout(event) {
    mouse.x = undefined;
    mouse.y = undefined;
}

function resizeReset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}

function animationLoop() {
    c.clearRect(0, 0, w, h);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        circleArray[i].draw();
    }
    requestAnimationFrame(animationLoop); //ini itu supaya continue loop
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
    //krn random return desimal 
}

class Circle {
    constructor() {
        this.radius = 10;
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.color = pColor;
        this.directionAngle = getRandomNumber(1, 360);
        this.speed = getRandomNumber(7, 10) / 5;

        //ini adalah object
        //dengan property x dan y
        //dan value x adalah setelah colon
        //ibaratnya seperti struct tanpa constructor
        this.vector = {
            x: Math.cos(this.directionAngle) * this.speed,
            y: Math.sin(this.directionAngle) * this.speed,
        }
    }

    draw() {
        //draw the circle
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.closePath();
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }

    update() {
        //check border
        if(this.x > w || this.x < 0) {
            this.vector.x *= -1;

        }
        if(this.y > h || this.y < 0) {
            this.vector.y *= -1;
        }
        //buat aman aja sih
        if(this.x > w) {
            this.x = w;
        }
        if(this.y > h) {
            this.y = h;
        }
        if(this.x < 0) {
            this.x = 0;
        }
        if(this.y < 0) {
            this.y = 0;
        }

        //mouse
        let dmx = mouse.x - this.x;
        let dmy = mouse.y - this.y;
        let distance = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distance < mouse.radius + this.radius) {
            if (mouse.x < this.x && this.x < canvas.width - this.radius * 5) {
                this.x += this.speed;
            }
            if (mouse.x > this.x && this.x > this.radius * 5) {
                this.x -= this.speed;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.radius * 5) {
                this.y += this.speed;
            }
            if (mouse.y > this.y && this.y > this.radius * 5) {
                this.y -= this.speed;
            }
        }

        //move particle
        this.x += this.vector.x;
        this.y += this.vector.y;
    }
}

document.addEventListener("DOMContentLoaded" , init);