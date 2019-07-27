'use sctrict';
// .filter__item--active
// возьмем наш список категорий
let ul = document.getElementsByClassName('filter__store')[0];
// массиив вкладок
let tabs = [...document.getElementsByClassName('filter__item')];
// создадим массив обектов из колекциии с помощю spread оператор [...]
let elems = [...document.getElementsByClassName('content__item')];
// навешаем на него слушатель что бы при клике получать клас той вкладки на которую мы кликнем
ul.addEventListener('click', function (event) {
    let target = event.target;
    // при нажатии на вкладку категории выз функция которвя убивает выделение с вкладок и 'content__item--hide' с обьектов
    if (target.classList[1] == 'all') {
        contCategory();
    } else {
        // уберем выделение с вкладок
        for (let a = 0; a < tabs.length; a++) {
            tabs[a].classList.remove('filter__item--active');
        }
        target.classList.add('filter__item--active');
        // скроем все обекты, lj,добавим им клас 'content__item--hide'
        for (let j = 0; j < elems.length; j++) {
            elems[j].classList.add('content__item--hide');
        }
        // пройтись по массиву обектов и вторые классы, если совпадение, то убираем клас 'content__item--hide'
        for (let i = 0; i < elems.length; i++) {
            if (elems[i].classList[1] == target.classList[1]) {
                elems[i].classList.remove('content__item--hide');
            }
        }
    }
})

function contCategory() {
    for (let i = 0; i < elems.length; i++) {
        elems[i].classList.remove('content__item--hide');
    }
    for (let a = 0; a < tabs.length; a++) {
        tabs[a].classList.remove('filter__item--active');
    }

}
