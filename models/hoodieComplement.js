

const mongoose = require('mongoose')

const hoodieComplementSchema = {
  hoodie_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}

const hoodieComplement = mongoose.model('Hoodie Complement', hoodieComplementSchema)
module.exports = hoodieComplement