'use strict';
// https://goo.gl/maps/RgqXcyXgoZKqryZ29

// Start when all content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // function click 
    let btnLocation = document.getElementsByClassName('menu__location')[0];
    let mapLocation = document.getElementsByClassName('location__model')[0];
    let crossLocation = document.getElementsByClassName('location__cross')[0];

    crossLocation.addEventListener('click', function(){
        mapLocation.classList.add('hide');
    })
    // console.log(mapLocation);
    btnLocation.addEventListener('click', function(event){
        event.preventDefault();
        mapLocation.classList.remove('hide');
        // console.log("Hi");
         
    })




})//end