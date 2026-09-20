/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * I set up a basic A4 canvas with the accurate pixel size
*/
function setup() {
    createCanvas(3508, 2480)
}


/**
 * This is going to be a basig drawing of a table surface and a wall behind it
*/
function draw(){
function drawbackground() {
    background(40,40,70)
    fill(50,25,0)
    rect(0, 1400, 3508, 1200)
}

function hatShape(){
    fill(23,189,184);
    triangle(1410,915,1250,1455,1570,1455);
   

    fill(199,199,199);
    triangle(1410,1300,1250,1455,1570,1455);
    ellipse(1410,1455,320,55);

    fill(199,199,199)
    stroke(0)
    strokeWeight(1)
    circle(1410,1380,30);

}

 
drawbackground();
hatShape();

// displays mouse coordinates on canvas

fill(255,255,255);
noStroke();
textSize(14);
text(`(${mouseX}, ${mouseY})`, mouseX + 10, mouseY - 10);
  
}
