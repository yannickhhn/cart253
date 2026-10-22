/**
 * Let's Bake !
 * Yannick Hantaniaina 
 * 
 * Time event. You just watch your bread cooking until it raises and is ready.
 */

"use strict";

/**
 * square canvas for min UI
*/
function setup() {
    createCanvas(400,400)
    colorMode(HSL)
    setTimeout(increaseBread,1000)
}

/**
 * bread variable
 */
let bread = {
    x:200,
    y:200,
    w:100,
    h:0,
}

/**
 * huhh it draws the setup and each element. also draws a little message when it's ready ! 
*/
function draw() {
    background(20,50,15)
    //draws the oven
    push()
    stroke(20,50,10)
    strokeWeight(5)
    fill(20,50,20)
    rect(width/4,height/4,width/2,height/2)
    line(0,0,width/4,height/4)
    line(0,400,width/4,300)
    line(400,400,300,300)
    line(400,0,300,100)

    //oven fire 
    stroke(20,100,50)
    fill(20,50,15)
    ellipse(width/2,350,200,60)
    stroke(1,0,40)

    //middle compartment
    fill(20,50,10)
    stroke(20,50,10)
    strokeWeight(3)
    quad(0,220,width/4,200,300,200,400,220)
    pop()

    // draws the bread 
    push()
    fill(20,30,40)
    arc(bread.x,bread.y,bread.w,bread.h,PI,TWO_PI)
    pop()

    //draws the base plate 
    push()
    stroke(0)
    fill(1,0,20)
    rect(150,180,100,30)
    pop()

    //shadow idk 
    push()
    noStroke()
    fill(0,0.4)
    rect(0,0,width,220)
    pop()

    //light idk 
    push()
    noStroke()
    fill(20,60,20,0.4)
    rect(0,220,width,220)
    pop()


    //ready ! sign 
    if (bread.h==100){
        //draws the banner where the text is 
        push()
        fill(20,100,50,0.8)
        rect(0,220,width,40)
        pop()

        //draws the text in the middle 
        push()
        fill(0,0,100)
        textSize(20)
        textAlign(CENTER)
        text("Ready !",200,247)
        pop()
    }

}

//what happens when the timeout runs. in this case increases the bread height.
function increaseBread(){
  if (bread.h<100){
    bread.h+=5 
    console.log("Bread Height is:",bread.h)
  } else {
    console.log("Max height reached")
  }
  setTimeout(increaseBread,1000) //recursive call to repeat the settimeout 

}

