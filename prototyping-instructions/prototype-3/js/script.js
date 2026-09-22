/**
 * Exquisite Body
 */

"use strict";

/**
 * a normal canvas where I can draw
*/
function setup() {
    createCanvas(400,800)
    colorMode(HSB,360,40,100,1) //playing with HSB, pastel colors would be cool
    

}


/**
 * I will use a big function draw for the entire foreground and small nested functions for each body parts.
*/
function draw() {

    //function for background. Right now it's a simple color.

     function drawBackground(){
        background(198,10,100,1)
    }

    //function for head
    function head(){
        fill(0)
        arc(200,175,70,160,PI,TWO_PI)

        fill(100)
        ellipse(200,135,50,70)
        circle(227,150,5)
        circle(173,150,5)
        rect(193,160,15,40)

        fill(0)
        ellipse(188,127,15,10)
        ellipse(210,127,15,10)
        arc(200,145,20,30,TWO_PI,PI)
        
        fill(5,56,100)
        ellipse(188,138,10,10)
        ellipse(210,138,10,10)

        fill(0)
        quad(199,98,199,116,163,122,163,112)
        quad(200,98,200,116,235,122,235,112)

        fill(0,0,70)
        arc(200.5,169,15,30,TWO_PI,PI)

        
    }

    //function for bust and waist
    function body(){

    }
    
    //This function for lower body
    function lowerBody(){

    }

    //function for any additional concepts on top 
    function miscellaneous(){

    }



    // function calls 
    drawBackground()
    head()
    body()
    lowerBody()
    miscellaneous()

    //mouse on canvas
     //mouse on canvas
    fill(0);
    noStroke();
    textSize(4);
    text(`(${mouseX.toFixed(1)}, ${mouseY.toFixed(1)})`, mouseX, mouseY);


}