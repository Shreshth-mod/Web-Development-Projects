const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, 
  actor: { type: Schema.Types.ObjectId, ref: 'Actor' },
  content: String
  
});

module.exports=mongoose.model('Blog',blogSchema);