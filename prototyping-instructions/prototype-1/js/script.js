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
    //table 
    background(40,40,70)
    fill(50,25,0)
    rect(0, 1330, 3508, 1200)

    //dark wall
    fill(0,0,30)
    rect(100,100,1250,1230)
    rect(2278,700,1250,630)


    //table outline
    push()
    stroke(0)
    strokeWeight(2)
    line(900,1330,3508,1330)
    pop()

    //shadow of the hat on the table
    fill(30,20,0)
    quad(1250,1455,1570,1455,1451,1665,963,1665)
}
/*
* This functions draws the green hat and every details surrounding it
*/
function hatShape(){
    //basic cyan triangle as base
    fill(23,189,184);
    triangle(1410,915,1250,1455,1570,1455);
   
    //white triangle and ellipse for the hat pocket
    fill(199,199,199);
    triangle(1410,1300,1250,1455,1570,1455);
    ellipse(1410,1455,320,55);

    // this is the hat button on top 
    push()
    fill(199,199,199)
    stroke(0)
    strokeWeight(1)
    circle(1410,1380,30);
    pop()

    // This is the shadow over the hat 
    fill(0,0,0,100);
    triangle(1405,976,1260,1455,1555,1455);
    arc(1410,1455,320,55,TWO_PI,PI);

}
/*
* This functions draws the windows and any details around it
*/
function drawWindows(){
    // this draws the 4 square holes on the wall
    push()
    fill(90,150,200)
    square(1650,990,150)
    square(1650,810,150)
    square(1830,990,150)
    square(1830,810,150)
    pop()

    // This draws the overall square layout around the 4 holes above.
    push()
    stroke(0)
    strokeWeight(2)
    fill(255,255,255,20)
    square(1600,760,430)
    pop()

}

 //function calls 
drawbackground();
hatShape();
drawWindows();


// displays mouse coordinates on canvas
fill(255,255,255);
noStroke();
textSize(14);
text(`(${mouseX}, ${mouseY})`, mouseX + 10, mouseY - 10);
  
}
