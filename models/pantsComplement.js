

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pantsComplementSchema = new Schema({
  pants_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}, {timestamp: true})

module.exports = mongoose.model('Pants Complement', pantsComplementSchema)