/**
 * Black Hole 
 * Yannick Hantaniaina
 * 
 * In this assignment, I will be drawing a landscape in order to learn JS p5j
 * I currently have no other description suitable for this program except its self explanatory. We are going to draw a landscape using javascript :)
 * 
 * 
 * 
 */

"use strict";

/**
 * In this setup I will be building a dark background. I intend to draw a planet surface that overlooks a black hole. For that, I will set up a dark blue background
 * 
*/
function setup() {
    // I set up a small canvas for pixel so I don't get overwhelmed with the large space to draw on
  createCanvas(640, 480);

}

function draw() {

    /**
     * This is basically the space background
    */
    function drawbg() {
        // background for space
         background(0,0,60);

        // small stars
        fill(255,255,255);
        circle(120,30,6);
        circle(70,130,4);
        circle(489,290,3);
        circle(520,330,2);
        circle(600,23,5);
        circle(240,45,3);
        circle(50,200,4);
        circle(450,30,6);
        circle(120,230,6);
        circle(450,30,6);

    }
    /**
     * this is the function to do stuff on the planet
     */
    function drawplanet() {

        // planet so an arc over the canvas 
        arc(320,480,700,200,PI,TWO_PI);

        push();
        stroke(120);
        strokeWeight(9);
        ellipse(230,420,120,40);
        ellipse(400,450,100,30)
        ellipse(100,470,70,30)
        ellipse(560,480,80,30)
        pop();
    }
    /**
     * This is the function to draw a black hole and its light rings
     */
    function drawblackhole() {
        // black hole ring
        push();
        noFill();
        stroke(255,90,0);
        strokeWeight(7);
        ellipse(320,170,220,40);
        pop();

         // black hole circle
        push();
        stroke(255,90,0)
        strokeWeight(4)
        fill(0);
        circle(320,170,120);
        pop();
        
    }

    /**
     * This is to draw the small probe hehe
     */
    function drawprobe(){
        // head for the probe's disk
     ellipse(220,300,50);

     // the triangle tail for the probe
     push();
     fill(65);
     triangle(220,300,250,340,170,300);
     pop();

    }

    drawbg();
    drawplanet();
    drawblackhole();
    drawprobe();
}