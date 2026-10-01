/**
 * Circle Master
 * Pippin Barr
 * Yannick Hantaniaina
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

const target = {
    x:330,
    y:330,
    size: 120,
    strokeColor: "#ff0000",


}
/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#000000");
  push()
  fill("#ffffff")
  rect(5,5,width-10,height-10)
  pop()
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck and the target
  drawUser();
  drawPuck();
  drawTarget();


  //calls movepuck 
  movePuck();

  //checks if puck is inside circle
  isInside();


}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {

 puck.x = constrain(puck.x,50,width-50)
 puck.y = constrain(puck.y,50,height-50)

  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

function drawTarget(){
    push();
    stroke(target.strokeColor)
    strokeWeight(5)
    noFill();
    drawingContext.setLineDash([6,8]);
    circle(target.x,target.y,target.size);
    pop();

}
/**
//  * Function movepuck 
Four cases : 
 * two x: 
 *      if user.x>puck.x, x--
 *      if user.x<puck.x,x++
 * two y: 
 *      if user.y>puck.y,y--
 *      if user.y<puck.y,y++
 * 
 * 4 combinations 
 * 
 * I AM GOING TO PUT CONSTRAINS ON THAT PUCK 
//  */
function movePuck(){

    //constant touch distance 
    const touch = dist(puck.x,puck.y,user.x,user.y);
    
     //x accomodations
    const  toTop = (user.x>=puck.x)
    const toBottom = (user.x<=puck.x)
    neutral_x = ((user.x-puck.x)<9)&((user.x-puck.x)>-9) //checks if im pushing from the middle, i gave 9px margin to allow more forgiving movement and still keep it working.

    //y accomodations
    const toLeft = (user.y>=puck.y)
    const toRight = (user.y<=puck.y)
    const neutral_y = ((user.y-puck.y)<9)&((user.y-puck.y)>-9)//checks if im pushing from the middle, i gave 9px margin to allow more forgiving movement and still keep it working.

    //if both disks touch and checks the user's position. Moves the puck agains the opposite position.

    if (touch<80){
         if (neutral_x){
            //empty code because it needs to check first but doesn't move anything
            if (neutral_y){
               //empty code because it needs to check first but doesn't move anything
            } else if (toRight){
                puck.y+=3
            } else if (toLeft) {
                puck.y-=3;
            }
       } else if (toTop){
            puck.x-=3;
            if (neutral_y){
               //empty code because it needs to check first but doesn't move anything
            } else if (toRight){
                puck.y+=3;
            } else if (toLeft) {
                puck.y-=3;
            }
       } else if (toBottom) {
            puck.x+=3;
             if  (neutral_y){
               //empty code because it needs to check first but doesn't move anything
            } else if (toRight){
                puck.y+=3;
            } else if (toLeft) {
                puck.y-=3;
            } 
       } 
    }
}

/**
 * Function to check if puck is inside target 
 * 
 * 
 * 
 */
function isInside(){
    const dist_difference = dist(target.x,target.y,puck.x,puck.y)
   

    if (dist_difference<=10){
        target.strokeColor = '#00ff00';
        puck.fill = '#ffd900'
        
        //displays a congrats banner 
        push()
        fill(0)
        rect(0,165,width,60)
        fill("#ffd900")
        textSize(25)
        textAlign(CENTER)
        text("Good Job Hockey Champion!",width/2,height/2)
        pop()

    } else if (dist_difference>10){
        target.strokeColor = '#ff0000';
        puck.fill = "#ff0000";
    }
}