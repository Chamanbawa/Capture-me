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

const randomUser = select('.randomUser');
const picture = select('body');
const url = 'https://randomuser.me/api/?nat=CA&results=10'

const options = {
    method: 'GET',
    mode: 'cors'
}

async function getRandomUsers() {
    try {

        const result = await fetch(url, options);
        if (result.status >= 200 && result.status < 400) {
            const data = await result.json();
            const users = data.results;
            printUsers(users);

        }

    } catch (error) {
        console.log(error)
    }
}


function printUsers(users) {

    for (let i = 0; i < users.length; i++) {
        let Imgurl = users[i].picture.medium;

        let newDiv = document.createElement("div");

        randomUser.appendChild(newDiv);
        newDiv.classList.add('frame');
        
        let photo = document.createElement('img');
        newDiv.appendChild(photo);
        photo.classList.add('photo');
        photo.style.background = `#000 url(${Imgurl}) center center / cover no-repeat `;
        
        let nameCity = document.createElement("div");
        nameCity.classList.add('nameCity')
        newDiv.appendChild(nameCity);

        let userName = document.createElement("p");
        nameCity.appendChild(userName);
        userName.classList.add('userName');
        userName.innerText = `${users[i].name.first + ' ' + users[i].name.last}`;

        let userCity = document.createElement("p");
        nameCity.appendChild(userCity);
        userCity.innerText = `${users[i].location.city}`;


    }
}

getRandomUsers();
