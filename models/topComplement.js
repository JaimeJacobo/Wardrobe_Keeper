

const mongoose = require('mongoose')

const topComplementSchema = {
  top_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}

const topComplement = mongoose.model('Top Complement', topComplementSchema)
module.exports = topComplement