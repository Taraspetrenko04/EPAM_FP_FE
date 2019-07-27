'use sctrict';
// take thr drop menu
let menuDrop = document.getElementsByClassName('menu__cars')[0];

// take the category 
let menuCat = document.getElementsByClassName('menu__categories')[0];
// add mouseover/out in categoty and dropMenu
menuCat.addEventListener('mouseover', showSub, false);
menuCat.addEventListener('mouseout', hideSub, false);
menuDrop.addEventListener('mouseover', showSub, false);
menuDrop.addEventListener('mouseout', hideSub, false);
function showSub(event){
    menuDrop.classList.remove('menu__cars--hide');
}
function hideSub(event){
        menuDrop.classList.add('menu__cars--hide');
    
}


    // let target = event.target;
    // menuDrop.classList.remove('menu__cars--hide');
// function addHide (){
//     if (target.className != 'menu__cars'){
//         menuDrop.classList.add('hide');
//     }
// }
// // menuArrow.style.transform = 'rotate(' + 90 + 'deg)';
// document.onmouseover = function(event){
//     let target = event.target;
//     event.preventDefault();
//     if (target.className == 'drop__items' || menuDrop.className == 'menu__cars'){
//         menuDrop.classList.add('menu__cars--active');
//         menuArrow.classList.add('drop__img--active');
//         // menuArrow.style.transform = 'rotate(' + -180 + 'deg)';
//         // menuDrop.style.top = 500 + 'px';
//     }else{
//         menuDrop.classList.remove('menu__cars--active');
//         menuArrow.classList.remove('drop__img--active');
//     }
// }