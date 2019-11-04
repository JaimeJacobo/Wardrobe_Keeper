

const mongoose = require('mongoose')

const socksComplementSchema = {
  socks_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}

const socksComplement = mongoose.model('Socks Complement', socksComplementSchema)
module.exports = socksComplement