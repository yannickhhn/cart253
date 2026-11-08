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
        size: 50
    }
}


/**
 * the background 
*/
function draw() {
    background('black')
}

