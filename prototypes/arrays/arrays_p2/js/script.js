/**
 * Yannick Hantaniaina
 * 
 * Exploring the kinds of data you can store in an array (strings could lead to dialog, images could be things to draw, sequences of images could be an animation, sounds could be randomized sound effects, objects could be elements that move around…)
 * 
 * This one would be like a 4 sized array where sprite images would be stored, and each wasd button would turn it around. it would move around the setup for things, take or leave things ? i have yet to explore that. 
 * I will also do the assets myself. 
 */


"use strict";
let front,back,left,right;
let stars = [];
let star;

/**
 * small canvas to navigate 
*/
async function setup() {
    createCanvas(200,200)

    front = await loadImage('assets/front.png') 
    back = await loadImage('assets/back.png')
    left = await loadImage('assets/side_left.png')
    right = await loadImage('assets/side_right.png')

    star = {
        x: 100,
        y: 100,
        size: 20
    }
    
}
stars.push(front) //0
stars.push(back) //1
stars.push(left)//2
stars.push(right)//3


/**
 *  
*/
function draw() {
    background('pink')

    drawSprite(0)
    keyPressed()
}

function drawSprite(index){
    image(stars[index],star.x,star.y,star.size,star.size)
}

function keyPressed(){
   switch(key.toLowerCase()){
    case 'a': 
    case 'arrowleft':
        drawSprite(2);
        star.x -=10;
        moveSprite(-10,0)
        break;

    case 's':
    case 'arrowdown':
        drawSprite(0);
        moveSprite(0,+10)
        break;

    case 'd':
    case 'arrowright':
        drawSprite(3);
        star.x+=10;
        moveSprite(+10,0)
        break;

    case 'w':
    case 'arrowup':
        drawSprite(1);
        moveSprite(0,-10)
        break;
    
   }

}

function moveSprite(x,y){
    star.x+=x;
    star.y+=y;
}