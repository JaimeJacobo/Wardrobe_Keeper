

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const topComplementSchema = new Schema({
  top_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}, {timestamp: true})

module.exports = mongoose.model('Top Complement', topComplementSchema)