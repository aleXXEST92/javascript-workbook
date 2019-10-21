// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// require('dotenv').config();
// app.get('/', (req, res) => {
//     res.send(process.env.SECRET_KEY);
// })
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}.`)
// })

window.onload = function() {
  getCharacters();
};

function getCharacters () {
  fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=bf976e75e8f7fd0b69109cb6b58a5a63&hash=bc0e684c5a64d998bf4a06cfd8420511")
  .then(response => {
    return response.json()
  .then(data => {
    console.log(data.data)
    displayCharacters(data.data);
    })
  })
};

const collection = [];

function displayCharacters(heroes) {
const list = document.getElementById('marvel')

heroes.results.map(results => { console.log(results)
const li = document.createElement("li")
const button = document.createElement("button")
button.innerHTML = "Collect Me"
button.addEventListener('click', function() {
  collection.push(results)
  collect();
}) 
li.appendChild(button)
li.appendChild(document.createTextNode(results.name))
list.appendChild(li)
})
};


function collect() {
const myCollection = document.getElementById('collection')
myCollection.innerHTML = null;

collection.map(heroes => {
  const li = document.createElement('li')
  li.append(document.createTextNode(heroes.name))
  li.append()
  myCollection.append(li)
})
}
