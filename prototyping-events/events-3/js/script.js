/**
 * Alibaba Door
 * Yannick Hantaniaina
 *
 * A door that only opens if you enter the right password !
 *
 * hint : try "opensesame"
 *
 */

"use strict";

/**
*basic 400x400 canvas
*/
function setup() {
    createCanvas(400,400)
    colorMode(HSL)
}

/**
 * the door
 */
let door = {
    x:140,
    y:150,
    w:120,
    h:250,
}

//password and what the user typed
let password = "opensesame"
let typed = ""
let doorOpen = false

/**
 * draws the red wall, the door and the password box
*/
function draw() {
    background(0,60,40)

    //draws the green door when closed, a dark doorway when open
    push()
    stroke(0,0,10)
    strokeWeight(4)
    if (doorOpen){
        fill(0,0,5)
    } else {
        fill(25,45,30)
    }
    rect(door.x,door.y,door.w,door.h)
    pop()

    //floor of the dark room when the door is open
    if (doorOpen){
        push()
        noStroke()
        fill(0,0,15)
        quad(160,350,240,350,258,398,142,398)
        pop()
    }

    //handle and sign only on the closed door
    if (!doorOpen){
        push()
        stroke(0,0,10)
        strokeWeight(2)
        fill(45,80,50)
        ellipse(240,280,14)
        pop()

        //sign hanging on a nail
        push()
        stroke(45,80,50)
        strokeWeight(2)
        line(170,208,200,190)
        line(230,208,200,190)
        fill(25,40,15)
        rect(160,208,80,44)
        fill(45,80,50)
        ellipse(200,190,6)
        pop()

        push()
        noStroke()
        fill(55,100,60)
        textSize(13)
        textStyle(BOLD)
        textAlign(CENTER,CENTER)
        text("Secret",200,222)
        text("Door",200,238)
        pop()
    }

    //label above the password box
    push()
    noStroke()
    fill(0,0,100)
    textSize(16)
    textAlign(CENTER)
    text("Say the magic words...",200,30)
    pop()

    //password box with what the user typed
    push()
    stroke(0,0,20)
    strokeWeight(2)
    fill(0,0,100)
    rect(100,40,200,40)
    noStroke()
    fill(0,0,20)
    textSize(20)
    textAlign(CENTER,CENTER)
    text(typed,200,60)
    pop()
}

//adds each letter typed and opens the door if it's the password
function keyTyped(){
    if (!doorOpen){
        typed = typed + key
        if (typed == password){
            doorOpen = true
            console.log("Door opened !")
        }
    }
}

