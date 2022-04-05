import {artList} from './artIndex.js';


var artlist = artList();
var card = document.getElementById("photoCard");

for (var i = 0; i <artlist.length; i++){
    var image = artlist[i].File;
    var name = artlist[i].Name;
    var newCard = document.createElement("img");
    newCard.classList.add("art");
    newCard.src = image;
    newCard.alt = name;
    card.appendChild(newCard);
    var newTitle = document.createElement("p");
    newTitle.classList.add("artTitle");
    newTitle.appendChild(document.createTextNode(name));
    card.appendChild(newTitle);
}