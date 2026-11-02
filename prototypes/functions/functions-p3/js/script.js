/**
 * Yannick Hantaniaina
 * 
 * Rain Ripples
 */

"use strict";


let ripples =[5]

/**
 * Screen size setup 
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL)
}

let ripple = {
    x: width/2,
    y: height/2,
    size: 30,
    gr: 20
}

/**
 * Draws the sea at night
*/
function draw() {
    background(225, 80, 8);
    growRipple(ripple)
    drawRipple(ripple)
}


//draws the ripple
function drawRipple(ripple){
   push()
   fill('none')
   stroke('white')
   strokeWeight(4)
   circle(ripple.x,ripple.y,ripple.size)
   pop()
}

//grows the ripple at constanr griwth rate 
function growRipple(ripple){
    ripple.size += ripple.gr
}