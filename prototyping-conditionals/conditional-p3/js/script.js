/**
 * Weather Reader
 * Yannick Hantaniaina
 *
 * This one is a Temperature reader - thermometer style that goes up and down depending on the weather outside
 * the background goes from snowy to sunny depending on the temperature
 */

"use strict";

/**
 * ehhhhh just a canvas and color more again
*/
function setup() {
    createCanvas(600, 600)
    colorMode(HSL)
}

/**
 * The thermometer remperature
 */
let thermo = {
    //position
    x: 285,
    y: 120,
    //size
    w: 30,
    h: 360,
    //temperature
    temp: 0,
    //liquid colour
    fill: {
        h: 200,
        s: 100,
        l: 50
    }
}

/**
 * changes the temperature and background, draws the thermometer
*/
function draw() {
    //temperature goes from -10 to 40
    thermo.temp = map(sin(frameCount * 0.01), -1, 1, -10, 40)

    //background colour
    let h, s, l

    if (thermo.temp < 0) {
        //snowy white to icy blue
        h = 210
        s = map(thermo.temp, -10, 0, 20, 40)
        l = map(thermo.temp, -10, 0, 97, 85)

    } else if (thermo.temp < 15) {
        //icy blue to sky blue
        h = map(thermo.temp, 0, 15, 210, 200)
        s = map(thermo.temp, 0, 15, 40, 80)
        l = map(thermo.temp, 0, 15, 85, 65)
    } else if (thermo.temp < 30) {
        //sky blue to almost white
        h = 200
        s = map(thermo.temp, 15, 30, 80, 30)
        l = map(thermo.temp, 15, 30, 65, 95)
    } else {
        //almost white to orange (hue switches while it's white so no green)
        h = map(thermo.temp, 30, 40, 50, 30)
        s = map(thermo.temp, 30, 40, 30, 100)
        l = map(thermo.temp, 30, 40, 95, 60)
    }

    background(h, s, l)


    //liquid goes from blue to red
    thermo.fill.h = map(thermo.temp, -10, 40, 200, 0)

    drawThermometer()
}

/**
 * draws the thermometer and the temperature
 */
function drawThermometer() {
    //liquid height
    const liquidHeight = map(thermo.temp, -10, 40, 0, thermo.h * 0.8)

    push()
    //tube and bulb
    stroke(0, 0, 20)
    strokeWeight(2)
    fill(0, 0, 100)
    rect(thermo.x, thermo.y, thermo.w, thermo.h, 15)
    circle(thermo.x + thermo.w / 2, thermo.y + thermo.h, 60)

    //liquid
    noStroke()
    fill(thermo.fill.h, thermo.fill.s, thermo.fill.l)
    rect(thermo.x + 8, thermo.y + thermo.h - liquidHeight, thermo.w - 16, liquidHeight)
    circle(thermo.x + thermo.w / 2, thermo.y + thermo.h, 44)

    //temperature number
    fill(0, 0, 10)
    textSize(32)
    text(round(thermo.temp) + "°", thermo.x + thermo.w + 20, thermo.y + thermo.h - liquidHeight + 10)
    pop()
}
