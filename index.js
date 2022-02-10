const { destinations } = require("./db");
//server ask require express
const express = require("express");
const cors = require("cors");
//express lib

//PORT Variable
const PORT = process.env.PORT || 3000;
//Creates a express server sit

const server = express();

server.use(cors());
//use listen method()with port
server.listen(PORT, () => {
  console.log("Server listening on Port 3000");
});

//Endpoints (Routes) are made up of the method and the path
server.get("/", (req, res) => {
  res.send(destinations);
});
