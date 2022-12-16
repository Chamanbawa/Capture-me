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
const create = select('.create');
const error = select('.error');


localStorage.setItem('preEmail', 'pr');
localStorage.setItem('prePass', '12');

let enterEmail = email.value.trim();
let enterPass = pass.value.trim();

onEvent('click', login, function(e) {
    e.preventDefault();
    if (email.value === '' || pass.value === '') {
        error.innerText = 'Please enter Details';

    } else if (enterEmail === localStorage.preEmail && enterPass === localStorage.prePass) {
        console.log('hello');
        let url = './home.html';
        window.location.assign(url);

    } else {
        error.innerText = 'Incorrect password or uerName';

    }
});

