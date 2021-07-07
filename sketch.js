var canvas;
var music;

var surface1,surface2,surface3,surface4;

var box;

var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,580,200,20);
    surface1.shapeColor="blue";

    surface2=createSprite(310,580,200,20);
    surface2.shapeColor="red";

    surface3=createSprite(520,580,200,20);
    surface3.shapeColor="purple";
    
    surface4=createSprite(730,580,200,20);
    surface4.shapeColor="green";

    //create box sprite and give velocity

    box=createSprite(random(20,750))
    box.scale=0.5;
    box.shapeColor="white";
    box.velocityX=-4;
    box.velocityY=4;



}

function draw() {
    
    background(rgb(169,169,169));

   

    //create edgeSprite
    
    edges=createEdgeSprites();
    
    box.bounceOff(edges);

    //music.play();

    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="blue";
   }



    if(surface2.isTouching(box)){
        box.shapeColor="red";
        box.velocityX=0;
        box.velocityY=0;

    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="purple";
    }

    if(surface4.isTouching(box)){
        box.shapeColor="green";
        box.velocityX=0;
        box.velocityY=0;
    }

    


    drawSprites();
}
