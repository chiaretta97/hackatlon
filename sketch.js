var myImg;
var imgs = [];

function preload() {

 myImg = loadImage('./assets/fiocco_1.png')
 myBall = loadImage('./assets/ball.png')
}

function setup() {

	createCanvas(windowWidth, windowHeight);

	// Deal with microphone
	mic = new p5.AudioIn();
	mic.start();
    angleMode(DEGREES);
    

}

function draw() {
    
    background('#07835C')
    
    var volume2 = mic.getLevel();
    var numb = map(volume2, 0, 1, 10, 500);
    
    if (numb < imgs.length) {
        imgs.splice(numb, imgs.length)
    
    } 
    
    if (numb > imgs.length) {
        
        for (var i = imgs.length; i <= numb; i++) {
        imgs[i] = new Pallina(myImg, -5, 6);
       
    }
        
    }


    
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].display();
        imgs[i].move();
        imgs[i].bounce();
    }
    
    textSize(width/10);
    fill(255,10,50);
    textFont('Parisienne');
    text('Merry Christmas', width/4, height/5);
    
    var h = height/2;
    var w = h * 1.5;
    
    push();
    
  
    
    translate(width/10,0)
    var volume3 = mic.getLevel();
    var an = map(volume3, 0, 1, -10, 40);
    var angle = 1;
    angle = angle + an;
    translate(0,-height/10)
    rotate(angle)
    if(angle >= 30) {
        angle = angle * -1;
    }
    image(myBall, 0, 0, h, w);   
       
    
    
    pop();


}

//if the window is resized, update the sketchs
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Pallina(im, speedX, speedY) {
    
    this.im = im;
    this.x = random(width);
    this.y = random(height);
//    this.w = w;
//    this.h = h;
    this.speedX = speedX;
    this.speedY = speedY;
    
this.display = function() {
    
    var volume = mic.getLevel();
    var diam = map(volume, 0, 1, width/50, width/2);

   image(this.im, this.x, this.y, diam, diam) 
}

this.move = function() {
    
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    
}

    this.bounce = function() {
        
        
        if (this.x >= width || this.x <= 0) {
            this.speedX = this.speedX * -1;
        }
        
        if (this.y >= height || this.y <= 0) {
            this.speedY = this.speedY * -1;
        }
    }
    
}


