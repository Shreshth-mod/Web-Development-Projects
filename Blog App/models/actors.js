const mongoose = require('mongoose');

//1. first of all create Schema
const { Schema } = mongoose;

const actorSchema = new Schema({
  name: String, // {type: String}
  image: String,
  age: String
  
});



//2. Associate it with a model
module.exports=mongoose.model('Actor',actorSchema);