/**
 * Yannick Hantaniaina 
 * 
 * Avoid Meteor and the rocket moves with mouse. 
 * This time i try to import assets. 
 */

"use strict";

// Our rocket 
let rocket;



/**
 * Screen size depending on device. Sets Rocket to a set position to begin with and its image source. 
*/
async function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);

    rocket = {
        x: width/2,
        y: 4*(height/4),
        image: await loadImage('assets/images/rocket.png')
    };

}



/**
 * Draws things 
*/
function draw() {
    background(0);
    drawRocket();

}

// drawRocket function

function drawRocket(){
    image(rocket.image, mouseX-50, mouseY-50, 100,100);

}