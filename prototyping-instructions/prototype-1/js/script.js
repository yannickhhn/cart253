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
    rect(0, 1330, 3508, 1200)

    push()
    stroke(0)
    strokeWeight(2)
    line(900,1330,3508,1330)
    pop()
    
    fill(30,20,0)
    quad(1250,1455,1570,1455,1451,1665,963,1665)
}

function hatShape(){
    fill(23,189,184);
    triangle(1410,915,1250,1455,1570,1455);
   

    fill(199,199,199);
    triangle(1410,1300,1250,1455,1570,1455);
    ellipse(1410,1455,320,55);

    push()
    fill(199,199,199)
    stroke(0)
    strokeWeight(1)
    circle(1410,1380,30);
    pop()

    // This is the shadow over the hat 

    fill(0,0,0,100);
    triangle(1395,966,1250,1455,1545,1455);
    arc(1410,1455,320,55,TWO_PI,PI);

}

function drawWindows(){

    push()
    fill(90,150,200)
    square(1650,990,150)
    square(1650,810,150)
    square(1830,990,150)
    square(1830,810,150)
    pop()


    push()
    stroke(0)
    strokeWeight(2)
    fill(255,255,255,20)
    square(1600,760,430)
    pop()

}

 
drawbackground();
hatShape();
drawWindows();
// displays mouse coordinates on canvas

fill(255,255,255);
noStroke();
textSize(14);
text(`(${mouseX}, ${mouseY})`, mouseX + 10, mouseY - 10);
  
}
