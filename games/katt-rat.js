let catX=100;
let catY=100;
let catSize=50;
let catSpeed=4;


let mouseSize=30;
let catched=false;


let gameState="START";




function setup() {
  createCanvas(400, 400);
}


function draw() {
    background(`purple`);


  if (gameState=="START"){
    //Rita upp strat sida
    fill('red')
    textSize(30)
    textAlign(CENTER)
    text("KATTEN OCH MUSEN",width/2,height/2);
    textSize(15)
    text("Tryck SPACE för att starta",width/2,height*2/3)
    
  } else if(gameState=="PLAY"){
    //Spela spelet
    catX= constrain(catX,catSize/2,width-catSize/2);
    catY=constrain(catY,catSize/2,height-catSize/2);
    mouseX=constrain(mouseX,mouseSize/2,width-mouseSize/2);
    mouseY=constrain(mouseY,mouseSize/2,height-mouseSize/2);
    
    if(keyIsDown(RIGHT_ARROW)){
      catX=catX+catSpeed;
    }
    if(keyIsDown(LEFT_ARROW)){
      catX=catX-catSpeed;
    }
    if(keyIsDown(UP_ARROW)){
      catY=catY-catSpeed;
    }
    if(keyIsDown(DOWN_ARROW)){
      catY=catY+catSpeed;
    }
      
      let d=dist(catX,catY,mouseX,mouseY);
      if (d<(catSize/2+mouseSize/2)){
      gameState="GAMEOVER"
    } else {
        catched=false;
      }
    
      
       fill('black')
    circle(catX,catY,catSize);
    triangle(catX-catSize/3,catY-catSize/3,catX,catY-catSize/3,catX-catSize/4,catY-catSize/1.2);
    triangle(catX+catSize/3,catY-catSize/3,catX,catY-catSize/3,catX+catSize/4,catY-catSize/1.2);
   fill('white');
    triangle(catX-catSize/3, catY, catX-catSize/6, catY, catX-catSize/4, catY+catSize/5);
    triangle(catX+catSize/6, catY, catX+catSize/3, catY, catX+catSize/4, catY+catSize/5);
      if (catched){
      fill(220,0,0,210);
      circle(mouseX,mouseY,mouseSize*3);
    }
      fill('brown');
    circle(mouseX,mouseY,mouseSize);


    
  } else if (gameState=="GAMEOVER"){
    //Rita upp "GAMEOVER"
    textSize(40)
    text("Game Over!",width/2,height/2)
    
  }


}


function keyPressed(){
  //Starta spelet när man trycker Space
  if (keyCode==32){
    gameState="PLAY";
  }
}