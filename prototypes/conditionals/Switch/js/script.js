/**
 * Day-Night Switch on mouse click/mouse drag
 * Yannick Hantaniaina
 * 
 * //Description//
 * explore mouse drag and click if possible ?
 * I think i want to explore click on this one. two if statements in one function isClicked
 */

"use strict";

/**
 * a rectangular canvas 
*/
function setup() {
    createCanvas(600,400)
    colorMode(HSL)
   

}

//Button object that switches 

let roundSwitch = {
    //position
    x: 260,
    y: 355,
    size: 22,

    fill : {
        h:1,
        s:1,
        l:6
    }
}


/**
 * it draws everything
*/
function draw() {
    background(255,100,100)

    // dayTime()
    // nightTime()
    buttonSwitch()

    

    //constrain roundswitch
    roundSwitch.x = constrain(roundSwitch.x,270,330)
    
    
    //changes the day time such that if the switch is clicked, it draws daytime/nightime 
    if (roundSwitch.x<=width/2){
        dayTime()
        buttonSwitch()
        drawButton()
        
    } else if (roundSwitch.x>width/2){
        nightTime()
        buttonSwitch()
        drawButton()
        
    }
    
}

//switches the roundswitch to whichever postion everytime the mouse is clicked 
function mousePressed(){
    if (dist(mouseX,mouseY,roundSwitch.x,roundSwitch.y)<=22){
        if (roundSwitch.x==270){
            roundSwitch.x = 330;
        } else if (roundSwitch.x==330){
            roundSwitch.x = 270;
        }
    }
}

// draws the daytime elements and their illustrations
function dayTime(){
    //background
    push()
    noStroke()
    fill(190,100,38)
    rect(0,0,width,height)
    pop()

    //day elements 
    push()
    noStroke()
    fill(41,100,55)
    circle(width/2,height/2,100)
    pop()

    //clouds
    push()
    noStroke()
    fill(1,100,100,.97)
    circle(200,200,100)
    circle(135,220,50)
    circle(200,250,100)
    circle(250,250,90)
    circle(130,260,70)
    circle(260,200,30)
    //second cloud
    circle(450,300,90)
    circle(510,320,50)
    circle(450,350,100)
    circle(500,350,90)
    circle(380,350,70)
    circle(395,320,30)
    pop()

}

//draws the nightime elements and their illustrations
function nightTime(){
    //background
    push()
    noStroke()
    fill(200,100,8)
    rect(0,0,width,height)
    pop()

    //night elements 
    push()
    noStroke()
    fill(1,0,100)
    circle(width/2,height/2,100)
    fill(200,100,8)
    circle(width/2+20,height/2,80)
    pop()

    //clouds
    push()
    noStroke()
    fill(1,0,80,.97)
    circle(150,200,100)
    circle(85,220,50)
    circle(150,250,100)
    circle(200,250,90)
    circle(80,260,70)
    circle(210,200,30)
    //second cloud
    circle(450,100,90)
    circle(510,120,50)
    circle(450,150,100)
    circle(500,150,90)
    circle(380,150,70)
    circle(395,120,30)
    pop()
}

function buttonSwitch(){
    
    //layout shawdow
    push()
    noStroke()
    fill(1,0,50)
    rect((width/2)-30,345,60,30)
    circle((width/2)-30,360,30)
    circle((width/2)+30,360,30)
    pop()

    //layout
    push()
    noStroke()
    fill(1,100,100)
    rect((width/2)-30,340,60,30)
    circle((width/2)-30,355,30)
    circle((width/2)+30,355,30)
    pop()
    
}

function drawButton(){
    //button element 
    fill(roundSwitch.fill.h,roundSwitch.fill.s,roundSwitch.fill.l)
    circle(roundSwitch.x,roundSwitch.y,roundSwitch.size)
}