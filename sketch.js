var gameState="serve"
var score=0;
function setup(){
 A= createSprite(60,140,15,15);
A.shapeColor="red"

 B= createSprite(60,165,15,15);
B.shapeColor="red"

 C= createSprite(60,190,15,15);
C.shapeColor="red"

 D= createSprite(60,210,15,15);
D.shapeColor="red"
box= createSprite(110,295,15,15);
box.shapeColor="red"
m= createSprite(100,100,20,20)
q= createSprite(300,300,20,20)
}
function draw() {
  textSize(25)
  text("score "+score,250,50)
  if(gameState==="serve"){
 A.visible=false
  B.visible=false
   C.visible=false
    D.visible=false
    box.visible=false
  
    gameState="play"
  }
 
  if(mousePressedOver(m)){
    background(0)
   A.visible=true
   B.visible=true
   C.visible=true
   m.visible=false
   q.visible=false
   
     gameState="wait"
    
  }
  
  
  
  
  if(mousePressedOver(A)){
    A.visible=false
    B.visible=false
    C.visible=false
    D.visible=false
    m.visible=false
    q.visible=false
   background("pink")
   text("solve x+y where x=2,y=5",50,100)
  }
  
  
  
  
  if(mousePressedOver(B)){
    A.visible=false
    B.visible=false
    C.visible=false
    D.visible=false
   background("pink")
   textSize(25)
   fill("black")
   textSize(30)
  
  text("solve x+y where x=3,y=5",50,100)
  }
  
  
  
  if(mousePressedOver(C)){
    A.visible=false
    B.visible=false
    C.visible=false
    D.visible=false
   background("pink")
   textSize(25)
   fill("black")
   textSize(30)
  text("solve x+y where x=2,y=5",50,100)
  }
  
  
  

  
  
  
   if(gameState==="play"){}
  drawSprites()
}
