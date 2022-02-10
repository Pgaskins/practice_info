const { destinations } = require("./db");
//server ask require express
const express = required(express);
//express lib
const res = require("express/lib/response");
const { send } = require("express/lib/response");

//PORT Variable
const PORT = 3000;
//Creates a express server sit
const server = express();
//use listen method()with port
server.listen(PORT, () => {
  console.log("Server listening on Port 3000");
});

//Endpoints (Routes) are made up of the method and the path
server.get("/", (res, req) => {
  res.send(destionations);
});
