let num;
let screen;
let posX;
let posY;
let tam;
let dir;
let value;
let rectsArray;

function setup (){

    createCanvas(500, 500);
    num=0;
    screen=1;
   

   
}


function draw(){

    background(208,240,244);

    if(screen==1){
    //textBox
     noStroke();
     fill(255);

    rect(200, 200, 100, 50);

    //buttons
 //resta
 rect(150, 210, 30, 30);

 //suma
 rect(320, 210, 30, 30);

 textSize(25);
 fill(0, 102, 153);
 text(num, 240, 235);



 if(num!=0){

    noStroke();
    fill(255);
    rect(300, 400, 100, 50);
 }
    }

    if(screen==2){

        noStroke();
        fill(255);
        rect(200, 200, 100, 50);

       // console.log(num)
       
       for (let index = 0; index < rectsArray.length; index++) {
          rectsArray[index].draw();
          rectsArray[index].move();
          rectsArray[index].cicle();
           
       }
      }
    
}

function init (){
    for (let index = 0; index < num; index++) {

        posY= random(0,250);
        posX= random(0,500);
        tam=50;
        dir=2;   
        value= random(1,10);
        fill(255);
        let figure = new RectFigure ( posX, posY, tam, dir, value);
        rectsArray[index] = figure;   
              
    }

}

 function keyPressed (){
     console.log(rectsArray);
 }
function mousePressed() {

    if(screen==1){
        //restar
        
        if(mouseX>150 && mouseX<180 && mouseY>210 && mouseY<240 ){

            num--;
                if(num<=0 ){
                    num=0;
                }
              
            }
        //sumar boton
        if(mouseX>320 && mouseX<350 && mouseY>210 && mouseY<240 ){

            num++;
                 if(num>10){
                    num=10;
                }
               
            }

            // cambio de pantalla boton 
            if(mouseX>300 && mouseX<400 && mouseY>400 && mouseY<450 ){

               screen=2;
               rectsArray = [num];
               init(); 
               
                   
                }

    }

}