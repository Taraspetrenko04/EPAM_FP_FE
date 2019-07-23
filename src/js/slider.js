'use strict';

// создаем массив слайдеров, без [... ] будет псевдомасив(колекция эл) и счетчи для позиции слайдера; 
let slides = [...document.getElementsByClassName('slider__item')];
// console.log(slides.length);
let counter = 0;
// Обявим переменные переключателей слайдера 
let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];

// Пишем ф-ю слайдер которая срабатыввает после клика и будет сначала все скрывать ,
// потом показывать елемент индекс которого совпадает с каунтером
function slider() {
    // скрываем все
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.add('slider__hide');
    }
    // показываем слайд индекс которого соответствует каунтеру
    slides[counter].classList.remove('slider__hide');
}


// // при клике вправо счетчик увеличивается на один, если больше длинны массива - обуляется 
right.addEventListener('click', function() {
    if(counter == slides.length - 1){
        counter = 0;
    }else{
        counter++;
    }
    slider();
});

// при клике влево  счетчик уменшается на один, если меншенуля - становится макс индексом массива; 
left.addEventListener('click', function() {
    if(counter == 0 ){
        counter = slides.length-1;
    }else{
        counter--;
    }
    slider();
});