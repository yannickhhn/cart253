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
let firefly;

/**
 * screensize one 
*/
async function setup() {  
    createCanvas(windowWidth,windowHeight);
    noSmooth()
    fireflyImage = await loadImage('assets/firefly.png')
    jar = await loadImage('assets/jar.png')

    firefly = {
        x: 400,
        y: 400,
        size: 50,
        vx: 2,
        vy: 2

    }
}


/**
 * the background 
*/
function draw() {
    background('black')
    drawJar()
    mousePressed()
}

function drawJar(){
    image(jar,500,10,800,800);
}

function drawFirefly(x,y){
    image(fireflyImage,x,y,50,50)
}

function mousePressed(){
    drawFirefly(mouseX,mouseY)
}

function moveFirefly(){
    firefly.x = constrain(firefly.x, 736,1060-50);
    firefly.y = constrain(firefly.y, 250,710-50);
}