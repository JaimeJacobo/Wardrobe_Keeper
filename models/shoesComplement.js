

const mongoose = require('mongoose')

const shoesComplementSchema = {
  shoes_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}

const shoesComplement = mongoose.model('Shoes Complement', shoesComplementSchema)
module.exports = shoesComplement