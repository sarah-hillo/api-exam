'use strict'
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
 
  name: {
    type: String,
    required: true
  },
  photo:string,
  instructions: {
    type: String,
    required: false
  },
  
});
const FavModel = mongoose.model("flower", flowerSchema);

// Export the Article model
module.exports = FavModel;