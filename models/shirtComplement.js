

const mongoose = require('mongoose')

const shirtComplementSchema = {
  shirt_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}

const shirtComplement = mongoose.model('Shirt Complement', shirtComplementSchema)
module.exports = shirtComplement