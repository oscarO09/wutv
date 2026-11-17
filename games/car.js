let carX=100;
let carY=100;
let carSpeed=5;
let carH=100;
let carW=50;

function setup() {
    createCanvas(400, 600);
    // Help blind or low-vision users understand your sketch
    describe("A 400 by 400 pixel gray canvas.");
  }
  
  function draw() {
    background(`darkgreen`);
   
 // Linje i mitten av vägen
    stroke(`gray`);
    strokeWeight(5);
    line(width/2,0,width/2,height);
    
  

    // Bil
    stroke(`white`)
    strokeWeight(1);
    fill(`black`);
    rect(carX,500,carW,carH);

    if(keyIsDown(RIGHT_ARROW)){
        carX=carX+carSpeed;
    }
    if(keyIsDown(LEFT_ARROW)){
        carX=carX-carSpeed;
    }
    carX= constrain(carX,0,width-carW);


  


  
  }