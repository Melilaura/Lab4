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

        //sumar al arreglo
        rect(10, 420, 100, 50);

        //restar al arreglo
        rect(120, 420, 100, 50);

        //duplicar tamaño
        rect(230, 420, 100, 50);

        //agregar circulos
        rect(340, 420, 100, 50);
       
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

    //PANTALLA PRINCIPAL------------------------------------------
    if(screen==1){
        //restar

        if(mouseX>150 && mouseX<180 && mouseY>210 && mouseY<240 ){

            num--;
                if(num<=0 ){
                    num=0;
                }
              
            }
        //sumar 
        if(mouseX>320 && mouseX<350 && mouseY>210 && mouseY<240 ){

            num++;
                 if(num>10){
                    num=10;
                }
               
            }

        // cambio de pantalla a la segunda
        if(mouseX>300 && mouseX<400 && mouseY>400 && mouseY<450 ){
     
            screen=2;
            rectsArray = [num];
            init(); 
               
                   
            }

    }
//FIN PANTALLA PRINCIPAL------------------------------------------

// SEGUNDA PANTALLLA ------------------------------------------
if(screen==2){
    //sumar cuadros al arreglo

    if(mouseX>10 && mouseX<110 && mouseY>420 && mouseY<470 ){

        num=+1;
        for (let index = 0; index < num; index++) {
            
            posY= random(0,250);
            posX= random(0,500);
            value= random(1,10);
            let figure = new RectFigure ( posX, posY, tam, dir, value);                      
            let nuevaLongitud = rectsArray.push(figure); 
       
        }

        
        console.log("Sumar al arreglo");
        
       }
   
    //eliminar
    if(mouseX>120 && mouseX<220 && mouseY>420 && mouseY<470 ){

        //num=-1;
       // for (let index = 0; index < num; index++) {

           // let ultimo = rectsArray[rectsArray.length - 1]
           /*ultimo = */rectsArray.pop()
            
       
        //}
        console.log("restar al arreglo");
           
        }

    //duplicar tamaño
    if(mouseX>230 && mouseX<330 && mouseY>420 && mouseY<470 ){

        console.log("duplicar tamaño");

        rectsArray.forEach ( sizeChange   
        );
                  
        }

    //crear circulos
    if(mouseX>340 && mouseX<440 && mouseY>420 && mouseY<470 ){

        console.log("crear circulos");
      
        }

}
function sizeChange() {
    for (let index = 0; index < rectsArray.length; index++) {
        rectsArray[index].changeSize();
         
     }  
    
}

}