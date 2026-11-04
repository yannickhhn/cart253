/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
    
    let wd = 0;
    while (wd<=250) {

        drawline(wd)
        wd+=25;
    }
}

//a function to draw a line 
//now adds weight 
function drawline(x){
    stroke(x);
    strokeWeight(x/5);
    line((x*2),0,(x*2),height);
}