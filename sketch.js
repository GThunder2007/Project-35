var dog, happyDog, database, foodS, foodStock;

var dogImage, happyDogImage;

function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happyDogImage = loadImage("images/dogImg1.png")
}

function readStock(data){
  foodS = data.val()
}

function writeStock(food){
  if (food < 0) {
    food = 0
  }
  else {
    food -= 1
  } 
  database.ref("/").set({
    Food: food
  })
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(200,200,30,30);
  dog.addImage(dogImage);
  dog.scale = 0.3;

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)) {
  writeStock(foodS)
  dog.addImage(happyDogImage)
}
  drawSprites();
  //add styles here

  textSize(10)
  fill("white")
  stroke(2)
  text("Press UP_ARROW to feed the dog!", 200, 50)

}



