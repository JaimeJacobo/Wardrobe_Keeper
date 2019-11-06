

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const lookSchema = new Schema({
  look_name: String,
  top_complement: [{type: Schema.Types.ObjectId, ref: "Top Complement"}],
  hoodie_complement: [{type: Schema.Types.ObjectId, ref: "Hoodie Complement"}],
  shirt_complement: [{type: Schema.Types.ObjectId, ref: "Shirt Complement"}],
  pants_complement: [{type: Schema.Types.ObjectId, ref: "Pants Complement"}],
  socks_complement: [{type: Schema.Types.ObjectId, ref: "Socks Complement"}],
  shoes_complement: [{type: Schema.Types.ObjectId, ref: "Shoes Complement"}],
}, {timestamps: true})

module.exports = mongoose.model('Look', lookSchema)