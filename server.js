const express = require('express');
const server = express();
const port = 3000;


server.all('/', (req, res) =>{
  res.send(`axis status : \nonline`)
})

function keepALive(){
  server.listen(port, ()=>{console.log("Server is Ready!")} )
}

module.exports = keepALive;