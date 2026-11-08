/**
 * Yannick Hantaniaina
 *
 * Trying to get a system running where all the elements in an array “live” and interact with each other or other elements on the screen
 *
 * Fireflies in a jar
 *
 */

"use strict";

let jar, fireflyImage;
//stores every firefly created by clicking
let fireflies = [];


/**
 * screensize canvas, loads the jar and firefly images
*/
async function setup() {
    createCanvas(windowWidth,windowHeight);
    //keeps the pixel art crisp
    noSmooth()
    fireflyImage = await loadImage('assets/firefly.png')
    jar = await loadImage('assets/jar.png')


}


/**
 * draws the background, the jar and all the fireflies
*/
function draw() {
    background('black')
    drawJar()

    //moves and draws each firefly in the array
    for (let firefly of fireflies){
        moveFirefly(firefly);
        drawFirefly(firefly);
    }

}

//draws the jar image
function drawJar(){
    image(jar,500,10,800,800);
}

//draws one firefly at its position
function drawFirefly(firefly){
    image(fireflyImage,firefly.x,firefly.y,50,50)
}

//creates a new firefly where the mouse clicked and adds it to the array
function mouseClicked(){
    let newFirefly = createFirefly(mouseX,mouseY);
    fireflies.push(newFirefly);
}

//moves the firefly around inside the jar
function moveFirefly(firefly){
    //nudges the speed a little each frame so it drifts and curves
    firefly.vx += random(-0.3, 0.3);
    firefly.vy += random(-0.3, 0.3);

    //limits how fast it can go
    firefly.vx = constrain(firefly.vx, -3, 3);
    firefly.vy = constrain(firefly.vy, -3, 3);

    //moves by its speed
    firefly.x += firefly.vx;
    firefly.y += firefly.vy;

    //gently pushes it back inside when it touches the glass
    if (firefly.x <= 736) {
        firefly.vx += 0.5;
    }
    if (firefly.x >= 1010) {
        firefly.vx -= 0.5;
    }
    if (firefly.y <= 250) {
        firefly.vy += 0.5;
    }
    if (firefly.y >= 660) {
        firefly.vy -= 0.5;
    }

    // keep inside the jar
    firefly.x = constrain(firefly.x, 736, 1010);
    firefly.y = constrain(firefly.y, 250, 660);
}

//returns a new firefly object with a position and a random speed
function createFirefly(x,y){
       let firefly = {
        x: x,
        y: y,
        size: 50,
        vx: random(-2, 2),
        vy: random(-2, 2)
    }
    return firefly;
}
