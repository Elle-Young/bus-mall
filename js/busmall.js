'use strict';

function addElement (element, text, parent){
    var newElement = document.createElement(element);
    var newText = document.createTextNode(text);
    newElement.appendChild(newText);
    parent.appendChild(newElement);
    return newElement;
}

function buildTable(){
    addElement
}