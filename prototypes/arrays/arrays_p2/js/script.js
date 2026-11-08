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


/**
 * small canvas to navigate 
*/
async function setup() {
    createCanvas(200,200)

    front = await loadImage('assets/front.png') 
    back = await loadImage('assets/back.png')
    left = await loadImage('assets/size_left.png')
    right = await loadImage('assets/size_right.png')

    stars.push(front)
    stars.push(back)
    stars.push(left)
    stars.push(right)
}


/**
 * 
*/
function draw() {

}