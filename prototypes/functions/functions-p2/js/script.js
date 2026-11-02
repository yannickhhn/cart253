/**
 * Yannick Hantaniaina
 * 
 * Bubble click 
 */

"use strict";

//assets and elements to pre load 
let bubbleImage;
let bubbles=[];


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
 async function setup() {
    createCanvas(windowWidth, windowHeight);
    
    bubbleImage = await loadImage('assets/images/bubble.png')
   
}


/**
 * Draws the bubbles you can pop off the screen.
*/
function draw() {
    background('pink');
    for (let bubble of bubbles){
        moveBubble(bubble)
        drawBubble(bubble)
        
    }
}

//bubble on mouseclick for testing
function mouseClicked(){

     let bubble = {
        x: random(50,windowWidth-50),
        y: windowHeight,
        size: random(50,400),
        v: -2,
        a: -0.05
    }

    bubbles.push(bubble)
}

//drawbubble function: 
function drawBubble(bubble){
    image(bubbleImage,bubble.x,bubble.y, bubble.size, bubble.size)
}

//movebubble function 
function moveBubble(bubble){
    bubble.y += bubble.v
    bubble.v += bubble.a
}