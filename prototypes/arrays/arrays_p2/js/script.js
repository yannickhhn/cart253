/**
 * Yannick Hantaniaina
 * 
 * Exploring the kinds of data you can store in an array (strings could lead to dialog, images could be things to draw, sequences of images could be an animation, sounds could be randomized sound effects, objects could be elements that move around…)
 * 
 * This one would be like a 4 sized array where sprite images would be stored, and each wasd button would turn it around. 
 * I will also do the assets myself. 
 */


"use strict";
let front,back,left,right;
let stars = [];
let star;
let direction = 0;
let floor;
/**
 * small canvas to navigate 
*/
async function setup() {
    createCanvas(200,200);
    noSmooth();

    front = await loadImage('assets/front.png') 
    back = await loadImage('assets/back.png')
    left = await loadImage('assets/side_left.png')
    right = await loadImage('assets/side_right.png')
    floor = await loadImage('assets/floor.png')

    star = {
        x: 100,
        y: 100,
        size: 50
    }
    
    stars.push(front) //0
    stars.push(back) //1
    stars.push(left)//2
    stars.push(right)//3
}



/**
 *  
*/
function draw() {
    background('white')
    image(floor,0,0,200,200)
    drawSprite(direction)
    
   
}

//draws the sprite according to its position in the array, given by the index stored in direction
function drawSprite(index){
    image(stars[index],star.x,star.y,star.size,star.size)
}

//changes the sprite's direction and also adds movements to it
function keyPressed(){
   switch(key.toLowerCase()){
    case 'a': 
    case 'arrowleft':
        direction = 2
        moveSprite(-10,0)
        break;

    case 's':
    case 'arrowdown':
        direction = 0
        moveSprite(0,+10)
        break;

    case 'd':
    case 'arrowright':
        direction = 3
        moveSprite(+10,0)
        break;

    case 'w':
    case 'arrowup':
        direction = 1
        moveSprite(0,-10)
        break;
    
   }
   return false;
}

//moves the sprite in the taken direction
function moveSprite(x,y){
    star.x+=x;
    star.y+=y;
    star.x = constrain(star.x,-5,160);
    star.y = constrain(star.y,-5,160);
}