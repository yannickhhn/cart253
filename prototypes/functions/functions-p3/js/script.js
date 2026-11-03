/**
 * Yannick Hantaniaina
 * 
 * Rain Ripples
 */

"use strict";


let ripples =[];

/**
 * Screen size setup 
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL)
}


/**
 * Draws the sea at night
*/
function draw() {
    background(225, 80, 8);
    addRain()
    for (let ripple of ripples){
        growRipple(ripple)
        drawRipple(ripple)
    }
    
}


//draws the ripple
function drawRipple(ripple){
   push()
   noFill()
   stroke(255,80,90,ripple.alpha)
   strokeWeight(4)
   circle(ripple.x,ripple.y,ripple.size)
   pop()
}

//grows the ripple at constanr griwth rate 
function growRipple(ripple){
    ripple.size += ripple.gr
    ripple.alpha -= 0.005
}

//add Ripples 
function addRipple(x,y){
    let ripple = {
        x: x,
        y: y,
        size: 30,
        gr: 2,
        alpha: 1
    }
    ripples.push(ripple)
}

//add ripples on mouseclick no w
function mouseClicked(){
    addRipple(mouseX,mouseY);
}

//function to add the rain 
function addRain(){
    if (random() <0.05){
        addRipple(random(width),random(height))
    }
}