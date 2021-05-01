let num;
let screen;
let posX;
let posY;
let tam;
let rectsArray;

let numArray;

function setup (){

    createCanvas(500, 500);
    num=0;
    screen=1;
    rectsArray = [];

   

    posX= 10;
    posY= 10;
    tam=50;
    
    
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

        rectsArray=[num];

        for (let i = 0; i < num; i++) {

            console.log(rectsArray);
            let figure = new RectFigure ( random(10,400),random(10,250), tam);
            rectsArray[i] = figure;   
            //figure.draw();
            figure.draw();   
        }

        

       

       

      }
    
}

function mousePressed() {

    if(screen==1){
        //restar boton
        if(mouseX>150 && mouseX<180 && mouseY>210 && mouseY<240 ){

            num--;
                if(num<=0 ){
                    num=0;
                }
              
            }

        if(mouseX>320 && mouseX<350 && mouseY>210 && mouseY<240 ){

            num++;
                 if(num>10){
                    num=10;
                }
               
            }

            if(mouseX>300 && mouseX<400 && mouseY>400 && mouseY<450 ){

               screen=2;
               
                   
                }

    }

}