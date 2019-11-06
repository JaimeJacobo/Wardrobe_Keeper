

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const socksComplementSchema = new Schema({
  socks_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}, {timestamp: true})

module.exports = mongoose.model('Socks Complement', socksComplementSchema)