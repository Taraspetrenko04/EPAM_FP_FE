'use strict';
// console.log("hi");
   //hide modal  window when u push cross
   document.getElementsByClassName("content__cross")[0].addEventListener("click", function (event) {
    //  event.preventDefault(); //stop the form submiting
     document.getElementsByClassName("modal__content")[0].classList.add("hide");
 }); 

// create varieble wich include all card
let cardStore = document.querySelectorAll('.content__store')[0];
// console.log(cardStore);
function createCard(imgClass){
    this.imgClass = imgClass;
    return console.log(imgClass);
}
// create the array of imges: get src adress
let imgArr = [...document.getElementsByClassName('img-features')]; 
// console.log(imgArr[1]);

// set eventListener onclick
cardStore.addEventListener('click', function(event){
    // create target define which item was clicked
    // event.preventDefault(); //stop the form submiting
    let target = event.target;
    // moveing up to class content__store
    while( target.className != this.className){//if  we click on cardStore div
    // console.log(this.className);
        if(target.tagName == 'A'){ //if we get tag a mean card class content__item
            // console.log("catch!");
            // get link's data-info value and set it to card Array  
            let d = +target.dataset.link;
            // console.log(imgArr[d]);
            // get img src atribute
            let src1 = imgArr[d].getAttribute('src');
            // console.log(src1);
            // remove class hide
            document.getElementsByClassName('modal__content')[0].classList.remove('hide');
            //  document.getElementsByClassName('modal__content')[0].style.backgroundImage = "url(" + src1 + ")";
            // document.getElementsByClassName('modal__content')[0].style.backgroundImage = `url(${src1})`;//template string

            // add style atribut with current src path
            document.getElementsByClassName('modal__car')[0].style.backgroundImage = "url(" + src1 + ")";
            return;
        }
   target = target.parentNode;
    }
})