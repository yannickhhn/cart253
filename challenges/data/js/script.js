/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";
let randomCar;
let randomDino;



// Starts with the instruction
let carName = "Click to generate a car name.";

/**
 * Load the car and dinosaur data
 */
async function preload() {
    carData = await loadJSON("assets/data/cars.json");
    dinosaurData = await loadJSON("assets/data/dinosaurs.json");

}
/**
 * Create the canvas
*/
async function setup() {
    createCanvas(600, 400);
    
    await preload();
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2);
    pop();
    
}

/**
 * Generate a new car name
 */
function mouseClicked() {
    randomCar = random(carData.cars);
    randomDino = random(dinosaurData.dinosaurs);
    carName = randomCar + randomDino;
    
}