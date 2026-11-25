let carX=100; 
let carY=100;
let carSpeed=8;
let carH=100;
let carW=50;

//Mötande bil
let oppositeCarX=100;
let oppositeCarY=100;


let gameState="START";

function setup() {
    createCanvas(400, 600);
    // Help blind or low-vision users understand your sketch
    describe("A 400 by 400 pixel gray canvas.");

    oppositeCarX=random(40,width-40-carW);
  }
  
function draw() {
   background(220);

   if(gameState==="START"){
    fill(`darkgreen`);
    textAlign(CENTER);
    textSize(60);
    text("Traffic", width/2, height/3);
    textSize(20);
    text("Tryck SPACE för att starta", width/2, height/2+40);
   
   } else if (gameState=="PLAY") {
   
    background(`gray`);
    fill('darkblue');
    rect(0, 0, 40, height);        
    rect(width - 40, 0, 40, height); 
   
   
 // Linje i mitten av vägen
    stroke(`white`);
    strokeWeight(5);
    line(width/2,0,width/2,height);

   


    // Bil
    stroke(`white`)
    strokeWeight(1);
    fill(`black`);
    rect(carX,475,carW,carH);

    fill(`red`);
    rect(oppositeCarX,oppositeCarY,carW,carH);


    if(keyIsDown(RIGHT_ARROW)){
        carX=carX+carSpeed;
    }
    if(keyIsDown(LEFT_ARROW)){
        carX=carX-carSpeed;
    }
    carX= constrain(carX,40,width-40-carW);

    oppositeCarY= oppositeCarY+carSpeed;

    if(oppositeCarY>height){
        oppositeCarY=-500;
        oppositeCarX=floor(random(40,width-40-carW));
    }
    if(carX<oppositeCarX+carW && carX+carW>oppositeCarX && 475<oppositeCarY+carH && 475+carH>oppositeCarY){
        gameState="GAMEOVER";
        oppositeCarY=0
    }
  
  } else if (gameState=="GAMEOVER"){
    //Rita upp "GAMEOVER"
    textSize(40)
    text("Game Over!",width/2,height/2)
    textSize(20);
    text("Press Spacebar To Start",width/2,height-height/3);
}}

  function keyPressed(){
    if(keyCode==32){
        gameState="PLAY";
    }
  }