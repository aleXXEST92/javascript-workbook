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



  fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=bf976e75e8f7fd0b69109cb6b58a5a63&hash=bc0e684c5a64d998bf4a06cfd8420511")
  .then(response => {
    return response.json()
  .then(data => {
    console.log(data)
    })
  })
