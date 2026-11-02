/**
 * Yannick Hantaniaina 
 * 
 * Avoid Meteor and the rocket moves with mouse. 
 * This time i try to import assets. 
 */

"use strict";

// Our rocket 
let rocket;
let meteor;


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

    meteor = {
        x: random(0,width),
        y: random(0,height),
        image: await loadImage('assets/images/meteor.png'),
        v: 10,
        a: 2,
        size: floor(random(50,100))
    };

}



/**
 * Draws things 
*/
function draw() {
    background(0);
    drawRocket();
    drawMeteor();
    drawMeteor();
}

// drawRocket function

function drawRocket(){
    image(rocket.image, mouseX-50, mouseY-50, 100,100);

}

//draw meteor function
function drawMeteor(){
    image(meteor.image, meteor.x, meteor.y, meteor.size,meteor.size);
}

