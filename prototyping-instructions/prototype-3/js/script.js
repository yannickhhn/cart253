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

    //function for bust and waist, I am going to make a robotic body with crab hands

    function body(){
        //bust
        fill(208,30,90)
        rect(160,190,80,40)
        rect(170,230,60,30)
        rect(180,260,40,20)
        rect(190,185,20,10)
        rect(170,280,60,10)
        
        circle(170,190,20,20)
        circle(230,190,20,20)

        //arms
        push()
        translate(235,-30)
        rotate(45)
        rect(140,190,15,70)
        circle(147.5,190,15)
        circle(147.5,260,15)
        pop()

        push()
        translate(495,-75)
        rotate(190)
        rect(245,190,15,70)
        circle(252.5,190,15,70)
        circle(252.5,260,15,70)
        pop()

        //crab hands
            //left arm
            push()
            translate(235,-30)
            rotate(45)
            rect(140,190,15,70)
            circle(147.5,190,15)
            circle(147.5,260,15)

            // claw
            circle(147.5, 280, 18)
            triangle(147.5,280, 110,268, 110,278)
            triangle(147.5,280, 110,292, 110,282)
            pop()

            //right arm
            push()
            translate(495,-75)
            rotate(190)
            rect(245,190,15,70)
            circle(252.5,190,15,70)
            circle(252.5,260,15,70)

            circle(252.5, 280, 18)
            triangle(252.5,280, 215,268, 215,278)
            triangle(252.5,280, 215,292, 215,282)

            pop()

        //shadows
        fill(208,30,70)
        rect(170,230,60,10)
        rect(180,260,40,10)
        rect(170,200,60,20)
        rect(230,205,3,10)

        //battery bar
        fill(110,80,90)
        rect(171,201,40,18)

    }
    
    //This function for lower body. I want to make a mermaid. 
    function lowerBody(){
        
        //fish tail corpse
        fill(112,80,47)
        arc(200,290,60,400,TWO_PI,PI)
        quad(185,463,215,463,205,520,195,520)
        arc(200,520,200,200,QUARTER_PI,PI-QUARTER_PI)

        fill(208,30,90)
        rect(195,520,10,5)
    

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