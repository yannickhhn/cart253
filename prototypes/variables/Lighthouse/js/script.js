/**
 * LightHouse 
 * Yannick Hantaniaina 
 * 
 * This prototype shows a lighthouse with wiggling light.
 */

"use strict";

/**
 * Simple square canvas 
*/
function setup() {
    createCanvas(400,400)
    colorMode(HSL)
    
}

/**
 * light object
 */
let light = {
    //position and size
    x: 200,
    y: 170,
    size: 100,

    //color
    fill: {
        h: 50,
        s: 100,
        v: 86
    }
    
}


/**
 * lighthouse and its elements 
*/
function draw() {
    background(231,89,30)

    function sea(){
        fill(231,89,20)
        rect(0,(2*height/3),height)
    }

    function hill(){

        //green hill
        fill(118,89,15)
        arc(width/2,500,300, height,PI,TWO_PI)
        //brown alleyway
        fill(35,65,20)
        quad(190,320,210,320,215,400,185,400)
    }

    function lighthouse(){
        fill(0,0,50)
        rect(177,190,46,130)
        //quad(175,320,225,320,217,190,183,190)

       
        //tip of lighthouse
        push()
        fill(0)
        rect(179,150,42,10)//top
        rect(177,180,46,12)//bottom
        triangle(185,150,215,150,200,120)
        rect(185,160,30,30) //middle
        pop()

        //middle hole
        fill(231,89,20)
        rect(190,160,20,20)

        //strips color
        push()
        fill(360,100,20)
        rect(170,300,60,20)//base
        rect(177,290,46,20)
        rect(177,250,46,20)
        rect(177,210,46,20)
        pop()

    }

    //function calls
    sea()
    hill()
    lighthouse()

    //light movements 
    fill(light.fill.h,light.fill.s,light.fill.v,0.44)
    circle(light.x,light.y,light.size/14)
    circle(light.x,light.y,light.size/5)
    circle(light.x,light.y,light.size/2)
    circle(light.x,light.y,light.size)

    
    light.size = light.size+100*sin(frameCount)
    light.size = constrain(light.size,195,200)


    //mouse on canvas
    fill(0);
    noStroke();
    textSize(10);
    text(`(${mouseX.toFixed(1)}, ${mouseY.toFixed(1)})`, mouseX, mouseY);


}