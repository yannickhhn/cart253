/**
 * Yannick Hantaniaina
 * 
 * Bubble pop 
 */

"use strict";

//assets and elements to pre load 
let bubble; 
let bubbleImage;
let bubbles=[];


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
 async function setup() {
    createCanvas(windowWidth, windowHeight);
    
    bubbleImage = await loadImage('assets/images/bubble.png')
    bubble = {
        x: width/2,
        y: height,
        size: random(50,400),
        v: -2,
        a: -0.5
    }

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
function mouseclick(){
    bubbles.push(bubble)
    console.log(bubbles)
}

//drawbubble function: 
function drawBubble(bubble){
    image(bubbleImage,random(0,width),bubble.y, bubble.size, bubble.size)
}

//movebubble function 
function moveBubble(bubble){
    bubble.y += bubble.v
    bubble.v += bubble.a
}