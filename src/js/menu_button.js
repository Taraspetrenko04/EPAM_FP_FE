
let btn = document.getElementsByClassName('navbar__button')[0];
// console.log(btn);
let burger =  document.getElementsByClassName('navbar__burger')[0];
let cross =  document.getElementsByClassName('navbar__cross')[0];
let menu = document.getElementsByClassName('menu')[0];
btn.addEventListener('click',() =>{
    burger.classList.toggle('hide');
    cross.classList.toggle('hide');
    menu.classList.toggle('menu__active');
    

    // menu.style.left = "0";

});
