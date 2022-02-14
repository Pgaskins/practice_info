//
require("dotenv").config();
const db = require("./db");
//server ask require express
const express = require("express");
const cors = require("cors");
const uniqid = require("uniqid");

const { getUnsplashPhoto, checkRequiredFields } = require("./Utils");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

//PORT Variable
const PORT = process.env.PORT || 3000;
//Creates a express server sit
const server = express();
//use cors method
server.use(cors());
//json() to parse incoming data
server.use(express.json());

server.listen(PORT, (err) => {
  if (err) console.log("Error is server setup");
  console.log("Server listening on Port 3000.....");
});

//Endpoints (Routes) are made up of the method and the path
//Read Data
server.get("/destinations", (req, res) => {
  const { id } = req.query; //changing query params
  if (id !== undefined) {
    return res.send(
      db.destinations[id] === undefined ? {} : db.destinations[id]
    );
  }
  res.send(db.destinations);
});

server.get("/destinations/loc/:loc/dest/:dest", (req, res) => {
  const { loc, dest } = req.params;
});
//Post/destinations

server.post("/destinations", checkRequiredFields, async (req, res) => {
  //logic to help you get one request
  //ID's are nessasary to tell records apart

  const { destination, location, description } = req.body;

  //generate new id
  const id = uniqid();

  const newDest = {
    id,
    destination,
    location,
    photo: await getUnsplashPhoto(`${destination} ${location}`),
  };
  if (description !== undefined) {
    newDest.description = description;
  }
  db.destinations[id] = newDest;

  res.status(200).send({ message: "sucsess" });
});
//update data with .put
//destination/:id
//res.body
//retriving what client past
server.put("destination/id:", (req, res) => {
  const { id } = req.params;
  const { description, destination, location } = req.body;

  if (db.destinations[id] === undefined) {
    return res.status(404).send({ msg: "Record not found" });
  }
});
//
