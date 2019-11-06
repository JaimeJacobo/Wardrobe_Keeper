

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const shoesComplementSchema = new Schema({
  shoes_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}, {timestamp: true})

module.exports = mongoose.model('Shoes Complement', shoesComplementSchema)