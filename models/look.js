

const mongoose = require('mongoose')

const lookSchema = {
  look_name: {
    type: String,
    trim: true,
    required: false,
    default: "My look :)"
  },
  hat_complement: {
    type: String,
    required: false,
    default: "Some image"
  },
  shirt_complement: {
    type: String,
    required: false,
    default: "Some image"
  },
  hoodie_complement: {
    type: String,
    required: false,
    default: "Some image"
  },
  pant_complement: {
    type: String,
    required: false,
    default: "Some image"
  },
  socks_complement: {
    type: String,
    required: false,
    default: "Some image"
  },
  shoes_complement: {
    type: String,
    required: false,
    default: "Some image"
  },
}

const Look = mongoose.model('Look', lookSchema)
module.exports = Look