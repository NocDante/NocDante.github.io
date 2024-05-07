let speed = 3;
let scale = 1; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let dvdImages = [
    'D:\\NTUT\\Second\\Down\\DymanicWeb\\NocDante.github.io\\images\\0.png',
    'D:\\NTUT\\Second\\Down\\DymanicWeb\\NocDante.github.io\\images\\1.png',
    'D:\\NTUT\\Second\\Down\\DymanicWeb\\NocDante.github.io\\images\\2.png',
    'D:\\NTUT\\Second\\Down\\DymanicWeb\\NocDante.github.io\\images\\3.png',
    'D:\\NTUT\\Second\\Down\\DymanicWeb\\NocDante.github.io\\images\\4.png',
    'D:\\NTUT\\Second\\Down\\DymanicWeb\\NocDante.github.io\\images\\5.png'
];
let backgroundImage = new Image();
backgroundImage.src = 'D:\\NTUT\\Second\\Down\\DymanicWeb\\NocDante.github.io\\images\\background.png'; // Replace "path_to_your_background_image.jpg" with the path to your background image
let logoColor;

let dvd = {
    x: 200,
    y: 300,
    xspeed: speed,
    yspeed: speed,
    img: new Image(),
    lastImageIndex: -1 // Track the last image index
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    pickColor();
    update();
})();

function update() {
    // Clear previous image
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background image
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    
    //Draw DVD Logo
    ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
    
    //Move the logo
    dvd.x += dvd.xspeed;
    dvd.y += dvd.yspeed;
    
    //Check for collision 
    checkHitBox();

    // Request next frame
    requestAnimationFrame(update);
}

//Check for border collision
function checkHitBox(){
    if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
        pickColor();
    }
        
    if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
        pickColor();
    }    
}

//Pick a random color in RGB format
function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';

    // Choose a random DVD logo that is different from the last one
    let newImageIndex;
    do {
        newImageIndex = Math.floor(Math.random() * dvdImages.length);
    } while (newImageIndex === dvd.lastImageIndex);
    
    dvd.lastImageIndex = newImageIndex;
    dvd.img.src = dvdImages[newImageIndex];
}
