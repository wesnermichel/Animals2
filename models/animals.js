//import our database connection
const mongoose = require("../db/connection");

//import Schema///You basically created a model that the databsae have to respect
const Schema = mongoose.Schema;

//create a animal schema
const animalSchema = new mongoose.Schema({
  species: String,
  extinct: Boolean,
  location: String,
  lifeExpectancy: Number,
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
