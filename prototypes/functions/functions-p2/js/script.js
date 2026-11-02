/**
 * Yannick Hantaniaina
 * 
 * Bubble pop 
 */

"use strict";

//assets and elements to pre load 
let bubble; 
let bubbles=[];


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
 async function setup() {
    createCanvas(windowWidth, windowHeight);
    

    bubble = {
        x: width/2,
        y: height,
        size: random(50,400),
        v: -2,
        a: -0.5
    }

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('pink');
    
}

//bubble on mouseclick 
function mouseclick(){
    bubbles.push(bubble)
    console.log(bubbles)
}

//drawbubble function: 
