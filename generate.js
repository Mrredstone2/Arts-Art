import {artList} from '/artIndex.js?n=1';

console.log("test");
var artlist = artList();
var card = document.getElementById("photoCard");

for (var i = 0; i <artlist.length; i++){
    var image = artlist[i].File;
    var name = artlist[i].Name;
    var description = artlist[i].Discription;
    var newCard = document.createElement("img");
    newCard.classList.add("art");
    newCard.src = image;
    newCard.alt = name;
    card.appendChild(newCard);
    var newTitle = document.createElement("h3");
    newTitle.classList.add("artTitle");
    newTitle.appendChild(document.createTextNode(name));
    card.appendChild(newTitle);
    var newDesc = document.createElement("p");
    newDesc.classList.add("artDesc");
    newDesc.appendChild(document.createTextNode(description));
    card.appendChild(newDesc);
}