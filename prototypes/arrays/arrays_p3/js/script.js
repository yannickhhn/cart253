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
let fireflies = [];


/**
 * screensize one 
*/
async function setup() {  
    createCanvas(windowWidth,windowHeight);
    noSmooth()
    fireflyImage = await loadImage('assets/firefly.png')
    jar = await loadImage('assets/jar.png')

 
}


/**
 * the background 
*/
function draw() {
    background('black')
    drawJar()

    for (let firefly of fireflies){
        moveFirefly(firefly);
        drawFirefly(firefly);
    }
   
}

function drawJar(){
    image(jar,500,10,800,800);
}

function drawFirefly(firefly){
    image(fireflyImage,firefly.x,firefly.y,50,50)
}

function mouseClicked(){
    let newFirefly = createFirefly(mouseX,mouseY);
    fireflies.push(newFirefly);
}

function moveFirefly(firefly){
    firefly.x += random(-2,2);
    firefly.y += random(-2,2);
    firefly.x = constrain(firefly.x, 736,1060-50);
    firefly.y = constrain(firefly.y, 250,710-50);

}

function createFirefly(x,y){
       let firefly = {
        x: x,
        y: y,
        size: 50,
    }
    return firefly;
}
