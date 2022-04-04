import {artList} from 'artIndex.js';
function responsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function photoCard(image){
    var newCard = document.createElement('img');
    newCard.classList.add("art");
    newCard.src = image;
    var card = document.getElementById("photoCard");
    card.appendChild(newCard);
}
function generateGallary(){
    const artlist = artList();
    for (var i = 0; i <artlist.length; i++){
        var location = SON.parse(artlist[i])["File"];
        console.log(location);
        photoCard(location);
    }
}