const mongoose = require('mongoose');

const { Schema } = mongoose;

const cat = new Schema({
  name: String,
  age: Number,
  url: String,
});

// Schema ---> Collection ---> Model (create, read, update, delete) (CRUD)

// Tervrajz ---> Epulet

module.exports = mongoose.model("Cat", cat);
