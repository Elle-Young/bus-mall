'use strict';
//create a function to render randomized images within three table cells from an image array inside of a constructor function. 
function addElement (element, image, parent){
    var newElement = document.createElement(element);
    var newIcon = document.createElement(image);
    newElement.appendChild(newIcon);
    parent.appendChild(newElement);
    return newElement;
}


var clicksAllowed = 10;
var timesClicked = [];
var timesDisplayed = [];

function Icon(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.displayed = 0;
  this.clicked = 0;
  Icon.imageDatabase.push(this);
}

Icon.imageDatabase = [];

new Icon('cuthulu', 'imgs/cuthulu.jpg', 0, 0);
new Icon('R2D2 Bag', 'images/bag.jpg', 0, 0);

// console.log(Icon[0]);

// function rendergame(){
//     for (var i = 0; i < imageDatabase.length; i++){

//     }
// }

Icon.prototype.createCard = function(){
    for (var i = 0; i < iconDatabase.length; i++){
        
       var x = document.createElement('img'); 
       x.setAttribute('src', Icon.filepath);
       document.body.appendChild(x); 
    }
}
createCard();

console.log(Icon.imageDatabase);
