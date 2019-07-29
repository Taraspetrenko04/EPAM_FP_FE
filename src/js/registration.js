'use strict';

// Stert when all content is loaded
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
   
    
    btnReg.addEventListener('click', function(event) {
        event.preventDefault(); //stop the form submiting
        // if(localStorage.getItem('persons') !== null){
        //     // take all values from key "person" and push them into array users;
        //     // users.push(JSON.parse(localStorage.getItem('persons')));
        //     // console.log(users)
        //     let array = JSON.parse(localStorage.getItem('persons'));
        //     array.forEach(element => {
        //         // console.log(element);
        //         users.push(element); 
        //     });
        //     console.log(users);
        // }
        
        let obj = { // create an object with the current value
            mail : regMail.value,
            pass : regPas.value,
        }
        
        users.push(obj);// Push the object in to array
        console.log(users);
        localStorage.setItem('persons', JSON.stringify(users));// Put the array into storage
        // // console.log(JSON.parse(localStorage.getItem('persons')));
    })
    
})








