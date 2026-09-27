/**
 * Dragon Kite
 * Yannick 
 * 
 * It would be fun in this one if we had the coordinate of an element as the mouse XD, and like little elements just follows it like a dragon
 * use map for color change and lerp to follow other objects 
 */

"use strict";

/**
 * small rectangular canvas again. I justlove hsl its so much more manipulable than rgb (cries in color theory) 
*/
function setup() {
    createCanvas(800,400)
    colorMode(HSL)
    frameRate(60)
}

/**
 * The head and tails objects 
 */
let head = {x:200,y:200,size:50}
let tail1 ={x:200,y:240,size:48}
let tail2 ={x:200,y:260,size:46}
let tail3 ={x:200,y:280,size:44}
let tail4 ={x:200,y:300,size:42}
let tail5 ={x:200,y:320,size:35}
let tail6 ={x:200,y:340,size:30}


/**
 * draws the circle trails 
*/
function draw() {
    background(190,61,42) //draws a sky background

    //constrains
    head.x = constrain(head.x,10,width-10)
    head.y = constrain(head.y,10,height-10)

    tail1.x = constrain(tail1.x,10,width-10)
    tail1.y = constrain(tail1.y,10,height-10)

    tail2.x = constrain(tail2.x,10,width-10)
    tail2.y = constrain(tail2.y,10,height-10)

    tail3.x = constrain(tail3.x,10,width-10)
    tail3.y = constrain(tail3.y,10,height-10)

    tail4.x = constrain(tail4.x,10,width-10)
    tail4.y = constrain(tail4.y,10,height-10)

    tail5.x = constrain(tail5.x,10,width-10)
    tail5.y = constrain(tail5.y,10,height-10)

    tail6.x = constrain(tail6.x,10,width-10)
    tail6.y = constrain(tail6.y,10,height-10)
    
    

    //head properties and behaviour
    head.x = lerp(head.x,mouseX,0.15)
    head.y = lerp(head.y,mouseY,0.15)

    //tail properties and behaviors 
    tail1.x = lerp(tail1.x,head.x+10,0.3)
    tail1.y = lerp(tail1.y,head.y+10,0.3)

    tail2.x = lerp(tail2.x,tail1.x+10,0.3)
    tail2.y = lerp(tail2.y,tail1.y+10,0.3)
    
    tail3.x = lerp(tail3.x,tail2.x+10,0.3)
    tail3.y = lerp(tail3.y,tail2.y+10,0.3)

    tail4.x = lerp(tail4.x,tail3.x+10,0.3)
    tail4.y = lerp(tail4.y,tail3.y+10,0.3)

    tail5.x = lerp(tail5.x,tail4.x+10,0.3)
    tail5.y = lerp(tail5.y,tail4.y+10,0.3)

    tail6.x = lerp(tail6.x,tail5.x+10,0.3)
    tail6.y = lerp(tail6.y,tail5.y+10,0.3)



    //tail objects
    fill(350,100,50)
    circle(tail1.x,tail1.y,tail1.size) //tail 1
    circle(tail2.x,tail2.y,tail2.size) //tail 2
    circle(tail3.x,tail3.y,tail3.size) //tail 3
    circle(tail4.x,tail4.y,tail4.size) //tail 4
    circle(tail5.x,tail5.y,tail5.size) //tail 5
    circle(tail6.x,tail6.y,tail6.size) //tail 6

    //Since the bodies are so separated, I made a line that connects all of them below
    push()
    stroke(41,100,50)
    strokeWeight(20)
    line(head.x,head.y,tail1.x,tail1.y)
    line(tail1.x,tail1.y,tail2.x,tail2.y)
    line(tail2.x,tail2.y,tail3.x,tail3.y)
    line(tail3.x,tail3.y,tail4.x,tail4.y)
    line(tail4.x,tail4.y,tail5.x,tail5.y)
    line(tail5.x,tail5.y,tail6.x,tail6.y)
    pop()




    //kite thread
    push()
    stroke(360,0,100)
    strokeWeight(3)
    line(head.x,head.y,700,400)
    pop()
    


    //head object 
    fill(350,100,50)
    circle(head.x,head.y,head.size)
    


}