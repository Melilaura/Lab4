let num;
let plus;
let screen;

function setup (){

    createCanvas(500, 500);
    num=0;
    plus=true;
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

 fill(0, 102, 153);
 textSize(25);

 text(num, 240, 235);

 if(num!=0){

    noStroke();
    fill(255);

    rect(300, 400, 100, 50);

 }

    }

    if(screen==1){
        //textBox
        noStroke();
        fill(255);
        
        rect(200, 200, 100, 50);
        
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