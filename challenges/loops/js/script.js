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
    
    for (let i = 0;i<=height;i=i+10){
        drawHorizontalLine(i);
    }

    let wd = 0;
    while (wd<=250) {
        drawVerticalLine(wd)
        wd+=5;
    }
    
    for (let i = 0;i<=height;i=i+10){
        drawHorizontalLine(i);
    }
   
   
}

//a function to draw a line 
//now adds weight 
function drawVerticalLine(x){
    stroke(x)
    strokeWeight(10);
    line((x*2),0,(x*2),height);
}

//this is for horizontal line 
function drawHorizontalLine(x){
    stroke(x,100,100);
    strokeWeight(10);
    line(0,(x*2),width,(x*2));
}

