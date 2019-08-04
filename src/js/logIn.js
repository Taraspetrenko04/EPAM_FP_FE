"use strict";
// Start when all content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // show modal window  click  logIn button
    document
        .getElementsByClassName("log-in")[0].addEventListener("click", function (event) {
            event.preventDefault(); //stop the form submiting
            document.getElementsByClassName("modal")[0].classList.remove("hide");
        });
    //hide modal log In window push cross
    document
        .getElementsByClassName("modal__cross")[0]
        .addEventListener("click", function (event) {
            event.preventDefault(); //stop the form submiting
            document.getElementsByClassName("modal")[0].classList.add("hide");
        });

    // get persons data in Array type
    let arr = JSON.parse(localStorage.getItem("persons"));
    // console.log(Array.isArray(arr)); //true

    // function which looking if registration exsist
    if (localStorage.getItem("persons") == null) {
        // ling to registration form
    }

    let logBtn = document.getElementsByClassName("modal__button")[0];
    let logMail = document.getElementsByClassName("log__mail")[0];
    let logPas = document.getElementsByClassName("log__password")[0];

    let user1 = {
        mail: logMail.value,
        pass: logPas.value
    };

    logBtn.addEventListener("click", function () {
        event.preventDefault(); //stop the form submiting
    });

    // compare every arr(persons data) objects with input object, return true if even 1 match up
        if (arr.some(isEqual) == true){
            // alert("welcome.");
            // create user1 and put it in LocalStorage
            let store = [];
            store.push(user1);
            localStorage.setItem('user', JSON.stringify(store));
            // remove class hide button
            document.getElementsByClassName('menu__item')[0].classList.remove('hide');
        }else{
            alert("you are not registrated or did not enter email or password coretly");
        }

        function isEqual(x){
            return JSON.stringify(x) === JSON.stringify(user1);
        }
}); // end
