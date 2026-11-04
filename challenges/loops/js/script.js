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
    colorMode(HSB);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
    
    let wd = 0;
    while (wd<=250) {
        drawVerticalLine(wd)
        drawHorizontalLine(wd)
        wd+=5;
    }
}

//a function to draw a line 
//now adds weight 
function drawVerticalLine(x){
    stroke(x,100,100);
    strokeWeight(x/5);
    line((x*2),0,(x*2),height);
}

//this is for horizontal line 
function drawHorizontalLine(x){
    stroke(x,100,100);
    strokeWeight(x/5);
    line(0,(x*2),width,(x*2));
}