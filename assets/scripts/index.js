'use strict';

function onEvent(event, selector, callback) {

    return selector.addEventListener(event, callback);

}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);

}


function print(arg) {
    console.log(arg);
}

const email = select('.email');
const pass = select('.password');
const login = select('.login');
const show = select('.show');
const create = select('.create');
const error = select('.error');



localStorage.setItem('preEmail', 'preet@gmail.com');
localStorage.setItem('prePass', '123');

onEvent('click', login, function (e) {
    e.preventDefault();
    let checkEmail = email.value.trim();
    let checkPass = pass.value.trim();
    if (checkEmail === '' || checkPass === '') {
        error.innerText = 'Please enter Details';

    } else if (checkEmail === localStorage.preEmail && checkPass === localStorage.prePass) {
        console.log('hello');
        let url = './home.html';
        window.location.assign(url);

    } else {
        error.innerText = 'Incorrect password or userName';

    }
});

function showPass() {
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
onEvent('click', show, function(){
    showPass();
console.log('h3llo')
});

