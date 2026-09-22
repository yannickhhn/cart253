/**
 * Kaleidoscope
 */

"use strict";

/**
 * This is a small canvas I am setting that i will duplicate later.
*/
function setup() {
    createCanvas(100,100);
}


/**
 * Hopefully a kaleidoscope
*/
function draw() {

    // This nested function draws the background. I want it to be a gradient.
    function drawBackground(){
        background(100,150,200);
    }

    //draws the basic elements on a 90* angle. Separated by color
    function layers(){

        //bottom layer
        fill(0);
        triangle(67,100,100,67,10,10);
        circle(75,95,30)
        circle(95,75,30)

        // blue 2nd bottom
        fill(33,33,108);
        quad(70,70,90,90,60,90,10,50);
        quad(70,70,90,90,90,60,50,10);
        triangle(0,100,100,95,100,100)
        triangle(100,0,95,100,100,100)

        //3rd bottom
        fill(40,33,90);
        triangle(60,90,15,95,15,85)
        triangle(90,60,95,15,85,15)
        triangle(60,60,23,30,30,23)
        arc(15,90,10,10,HALF_PI,PI+HALF_PI);
        arc(90,15,10,10,PI,TWO_PI);
        circle(100,100,50)
        circle(27,27,10)

        //4th bottom
        fill(127,85,190)
        arc(70,70,30,30,TWO_PI+QUARTER_PI-HALF_PI,QUARTER_PI+HALF_PI)
        circle(65,75,16)
        circle(75,65,16)
        triangle(85,85,68,85,85,68)
        triangle(100,100,88,100,100,88)

        //2nd top
        fill(183,95,226)
        triangle(70,70,90,100,100,90)
        circle(27,27,8)
        circle(90,15,8)
        circle(15,90,8)

        //top
        fill(253,159,255);
        quad(40,40,60,45,60,60,45,60)
        quad(80,80,90,95,100,100,95,90)
        quad(0,20,5,15,5,0,0,0)
        quad(20,0,15,5,0,5,0,0)
    }
    
    //function calls 
    drawBackground();
    layers();

    //mouse on canvas
    fill(0);
    noStroke();
    textSize(4);
    text(`(${mouseX.toFixed(1)}, ${mouseY.toFixed(1)})`, mouseX, mouseY);

}



