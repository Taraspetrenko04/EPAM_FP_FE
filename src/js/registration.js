'use strict';

// Start when all content is loaded
document.addEventListener('DOMContentLoaded', function () {

    // let formSub = document.getElementsByClassName('registration__form')[0];
    // take the button   
    let btnReg = document.getElementsByClassName('registration__button')[0];
    let regMail = document.getElementsByClassName('registration__mail')[0];
    let regPas = document.getElementsByClassName('registration__password')[0];
    let users = [];

    // function CreateObj ( mail, pass){
    //     this.mail = mail;
    //     this.pass = pass; 
    // }
    // This functtin matching emails
    function isMatch(x) {
        let objCurrent = {
            mail: regMail.value,
            pass: regPas.value,
        }
        return JSON.stringify(objCurrent) === JSON.stringify(x);
    }


    btnReg.addEventListener('click', function (event) {
        // check input is empty
        if (regMail.value == "" || regPas.value == ""){
            return alert ( 'Fill email or password, please');
        }
        
        // hide message - mail already exist
        document.getElementsByClassName('text-red')[0].classList.add('registration__text--hide');
        // event.preventDefault(); //stop the form submiting
        // check  local storage has object with key 'persons' 
        if (localStorage.getItem('persons') !== null) {
            // take all values from key "person" and push them into array users;
            // users.push(JSON.parse(localStorage.getItem('persons')));
            let array = JSON.parse(localStorage.getItem('persons'));
            if (array.some(isMatch) == true) {
                // show message - mail already exist
                document.getElementsByClassName('text-red')[0].classList.remove('registration__text--hide');
                // clean the forms
               return  regMail.value = regPas.value = '';
            }


            array.forEach(element => {
                // add every object into array users
                users.push(element);
                // console.log(regMail.value)
                // console.log(array.some(isMatch)); //return true if mail alredy exist

            });
            // clean array
            array = [];
            // remove 'persons' from LocalStore, cause all data stored into users[]
            localStorage.removeItem('persons');
        }

        let obj = { // create an object with the current value
            mail: regMail.value,
            pass: regPas.value,
        }

        users.push(obj); // Push the object in to array
        // console.log(users);
        localStorage.setItem('persons', JSON.stringify(users)); // Put the array into storage
        users = [];


    })


})