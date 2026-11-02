/**
 * Yannick Hantaniaina 
 * 
 * Avoid Meteor and the rocket moves with mouse. 
 * This time i try to import assets. 
 */

"use strict";

// Our rocket 
let rocket;
// Our meteors, which all share one image
let meteorImage;
let meteors = [];
let nextMeteorTime = 0;
let startTime = 0;
const gameLength = 30;
// How many meteors fall during the whole game
const totalMeteors = 120;
// Our hearts, which all share one image
let heartImage;
let hearts = [];

// Starts the countdown from the current time
function startTimer(){
    startTime = millis();
    nextMeteorTime = startTime;
}

// Returns the seconds left in the game, and stops at 0
function getTimeLeft(){
    let timePassed = (millis() - startTime) / 1000;
    return max(gameLength - timePassed, 0);
}

/**
 * Screen size depending on device. Sets Rocket to a set position to begin with and its image source. 
*/
async function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);

    rocket = {
        x: width/2,
        y: height - 200,
        image: await loadImage('assets/images/rocket.png')
    };

    meteorImage = await loadImage('assets/images/meteor.png');
    heartImage = await loadImage('assets/images/heart.png');

    // Lines up 5 hearts in the top right corner
    for (let i = 0; i < 5; i++) {
        let heart = {
            x: width - 140 - i*50,
            y: -55,
            size: 200
        };
        hearts.push(heart);
    }

    startTimer();
}



/**
 * Draws things 
*/
function draw() {
    background(0);
    drawRocket();

    if (getTimeLeft() > 0){
        addMeteors();

        for (let meteor of meteors) {
            moveMeteor(meteor);
            drawMeteor(meteor);
        }
    }
    drawTimer();
    drawHearts();
}

// Draws each heart left in the array
function drawHearts(){
    for (let heart of hearts) {
        image(heartImage, heart.x, heart.y, heart.size, heart.size);
    }
}


// time in top left corner
function drawTimer(){
    fill(0,0,100);
    textSize(32);
    text(ceil(getTimeLeft()), 20, 40);
}

// drawRocket function
function drawRocket(){
    image(rocket.image, mouseX-100, rocket.y, 200,200);

}

// adds meteor to the array
function addMeteors(){
    if (millis() > nextMeteorTime && meteors.length < totalMeteors) {
        let size = floor(random(50,200));
        let meteor = {
            x: random(0,width-size),
            y: -size,
            v: random(1,2.5),
            a: random(0.01,0.05),
            size: size
        };
        meteors.push(meteor);
        // Spaces the meteors evenly across the game
        nextMeteorTime += gameLength * 1000 / totalMeteors;
    }
}

//draw meteor function
function drawMeteor(meteor){
    image(meteorImage, meteor.x, meteor.y, meteor.size,meteor.size);
}

//move meteor function
function moveMeteor(meteor){
    meteor.y += meteor.v;
    meteor.v += meteor.a;
}

// function touch meteor 
function touchMeteor(){
    
}
