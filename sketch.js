let num;
let screen;
let posX;
let posY;
let tam;
let dir;
let value;

let rectsArray;
let circleArray;
let paintCircles;
let circles;

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;





function setup (){

    createCanvas(500, 500);
    num=0;
    screen=1; 
    
    paintCircles=false;

    img1 = loadImage ('assets/suma.png');
    img2 = loadImage ('assets/resta.png');
    img3 = loadImage ('assets/next.png');
    img4 = loadImage ('assets/menos cuadros.png');
    img5 = loadImage ('assets/mas cuadros.png');
    img6 = loadImage ('assets/duplicar tamaño.png');
    img7 = loadImage ('assets/contador.png');
    img8 = loadImage ('assets/circulo.png');
  

}


function draw(){

    background(0);
    
     
    

    if(screen==1){
    //textBox
     noStroke();
     fill(255);

 
   // rect(200, 200, 100, 50);
    img7.resize(130,60);
    image ( img7 ,180 ,200 );

    //buttons
 //resta
 img2.resize(40,40);
 image ( img2 ,125 , 210);
 //rect(125, 210, 40, 40);

 //suma
 img1.resize(40,40);
 image ( img1 , 325 , 210);
 //rect(325, 210, 40, 40);

 textSize(25);
 fill(255);
 text(num, 238, 239);



 if(num!=0){

    noStroke();
    fill(255);
    image ( img3 , 300, 400 );
   // rect(300, 400, 140, 55);
 }
    }

    if(screen==2){

        noStroke();
        fill(255);

        //sumar al arreglo
        image ( img5 , 10 , 420 );
       // rect(10, 420, 110, 55);

        //restar al arreglo
        image ( img4 , 130 , 420 );
        //rect(130, 420, 110, 55);

        //duplicar tamaño
        image ( img6 , 250 ,420 );
      //  rect(250, 420, 110, 55);

        //agregar circulos
        image ( img8 , 370 , 420);
      //  rect(370, 420, 110, 55);
       
       for (let index = 0; index < rectsArray.length; index++) {
          rectsArray[index].draw();
          rectsArray[index].move();
          rectsArray[index].cicle();
           
       }

    /*  for (let index = 0; index < circleArray.length; index++) {
           circleArray[index].draw();
           circleArray[index].move();
           circleArray[index].cicle();
           
       }*/
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
     //console.log(rectsArray);
    if(key=='n' ) 
    {
        rectsArray.sort(function (a,b){
           
           
                console.log(rectsArray);
                return a.getValue()-b.getValue();
            
           
        
        }); 

    }
 }
function mousePressed() {

    //PANTALLA PRINCIPAL------------------------------------------
    if(screen==1){
        //restar
       // rect(125, 210, 40, 40);
        if(mouseX>125 && mouseX<165 && mouseY>210 && mouseY<250 ){

            num--;
                if(num<=0 ){
                    num=0;
                }
              
            }
        //sumar 
        //rect(325, 210, 40, 40);
        if(mouseX>325 && mouseX<365 && mouseY>210 && mouseY<250 ){

            num++;
                 if(num>10){
                    num=10;
                }
               
            }

        // cambio de pantalla a la segunda
        //rect(300, 400, 140, 55);
        if(mouseX>300 && mouseX<440 && mouseY>400 && mouseY<455 ){
     
            screen=2;
            rectsArray = [num];
            init(); 
               
                   
            }

    }
//FIN PANTALLA PRINCIPAL------------------------------------------

// SEGUNDA PANTALLLA ------------------------------------------
if(screen==2){
    //sumar cuadros al arreglo
 //   rect(10, 420, 110, 55);
    if(mouseX>10 && mouseX<120 && mouseY>420 && mouseY<475 ){

        num+=1;
        /*for (let index = 0; index < num; index++) {
            
            posY= random(0,250);
            posX= random(0,500);
            value= random(1,10);
            let figure = new RectFigure ( posX, posY, tam, dir, value);                      
            let nuevaLongitud = rectsArray.push(figure); 
       
        }*/
        rectsArray.push (new RectFigure ( random(0,500),  random(0,250), 50, 2, random(1,10)));  

        if(num > 10){
            rectsArray.pop();
            num=10;
        }
        console.log(num);
        console.log("Sumar al arreglo");
        
       }
   
    //eliminar
     //rect(130, 420, 110, 55);
    if(mouseX>130 && mouseX<240 && mouseY>420 && mouseY<475 ){

        //num=-1;
       // for (let index = 0; index < num; index++) {

           // let ultimo = rectsArray[rectsArray.length - 1]
           /*ultimo = */rectsArray.pop()
           if(num < 1){
            rectsArray.push (new RectFigure ( random(0,500),  random(0,250), 50, 2, random(1,10)));  
            num=1;
        }
            
       
        //}
        console.log("restar al arreglo");
           
        }

    //duplicar tamaño
    //  rect(250, 420, 110, 55);
    if(mouseX>250 && mouseX<360 && mouseY>420 && mouseY<475 ){

        console.log("duplicar tamaño");

        rectsArray.forEach ( sizeChange   
        );
                  
        }

    //crear circulos
     //  rect(370, 420, 110, 55);
    if(mouseX>370 && mouseX<480 && mouseY>420 && mouseY<475 ){

        /*circleArray=rectsArray.map(function(element, index){
            return (new CircleFigure((index*10)+10,375,40,10))
            });*/
            circleArray=[num];
            
            for(let index=0; index<num; index++){

                circles = new CircleFigure(rectsArray[index].getPosX(),rectsArray[index].getPosY()+200,
                rectsArray[index].getTam(), rectsArray[index].getDir(), rectsArray[index].getValue());


                circleArray[index]=circles;
                

                //console.log(rectsArray[index].getPosX());

           /* this.circleArray[index].setPosX(rectsArray[index].getPosX());
            this.circleArray[index].setValue(rectsArray[index].getValue());

*/
            }
        

     
        }

}
function sizeChange() {
    for (let index = 0; index < rectsArray.length; index++) {
        rectsArray[index].changeSize();
        
     }  
    
}




}