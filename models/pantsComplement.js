

const mongoose = require('mongoose')

const pantsComplementSchema = {
  pants_complement_name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  }
}

const pantsComplement = mongoose.model('Pants Complement', pantsComplementSchema)
module.exports = pantsComplement