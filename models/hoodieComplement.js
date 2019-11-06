

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const hoodieComplementSchema = new Schema({
  hoodie_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}, {timestamp: true})

module.exports = mongoose.model('Hoodie Complement', hoodieComplementSchema)