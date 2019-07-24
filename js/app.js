'use strict';

var imagesArray = [
  './images/bag.jpg',
  './images/banana.jpg',
  './images/bathroom.jpg',
  './images/boots.jpg',
  './images/breakfast.jpg',
  './images/bubblegum.jpg',
  './images/chair.jpg',
  './images/cthulhu.jpg',
  './images/dog-duck.jpg',
  './images/dragon.jpg',
  './images/pen.jpg',
  './images/pet-sweep.jpg',
  './images/scissors.jpg',
  './images/shark.jpg',
  './images/sweep.png',
  './images/tauntaun.jpg',
  './images/unicorn.jpg',
  './images/usb.gif',
  './images/water-can.jpg',
  './images/wine-glass.jpg',
];


function ImageAnalytics(name, filepath, displayed, clicked) {
  this.name = name;
  this.filepath = filepath;
  this.displayed = 0;
  this.clicked = 0;
  ImageAnalytics.imagesArray.push(this); 
}





// function addElement (element, text, parent){
//   var newElement = document.createElement(element);
//   var newText = document.createTextNode(text);
//   newElement.appendChild(newText);
//   parent.appendChild(newElement);
//   return newElement;
// }

// addElement('img', imagesArray, 'section');

var left = document.getElementById('img1');
img1.addEventListener('click', getRandomImage);

var center = document.getElementById('img2');
img2.addEventListener('click', getRandomImage);

var right = document.getElementById('img3');
img3.addEventListener('click', getRandomImage);


function getRandomImage(){
  var randomArray = [];
  
  for (var i = 0; i < 3; i++) {
  randomArray.push(ImageAnalytics.imagesArray[getRandomNumber()].filepath);
  }
}
  console.log(getRandomNumber());
  left.src = randomArray[0];
  center.src = randomArray[1];
  right.src = randomArray[2];  


function getRandomNumber(){
  Math.floor(Math.random()*ImageAnalytics.imagesArray);

}

  

function renderImage1(){
  document.getElementById('img').append = imagesArray[0];
}


//Stop the randomImage generator from duplicating two of the sames images in one set
function nonDuplication(){
  img1 = X;
  img2 = Y;
  img3 = Z;
  if (X=Y){
  getRandomImage();
  }
  if (Y=Z){
  getRandomImage();
  }
  if (Z=X){
  getRandomImage();
  }
}

//keep track of, and then end the click game at 25 selections

