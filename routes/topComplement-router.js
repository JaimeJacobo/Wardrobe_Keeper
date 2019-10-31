

const express = require('express')
const router = express.Router()

const TopComplement = require('../models/topComplement')


router.post('/new-topComplement', (req, res)=>{
  const newTopComplement = new TopComplement({
    top_complement_name: req.body.top_complement_name,
    image: req.body.image
  })
  newTopComplement.save()
  .then((answer)=>{
    res.send(answer)
  })
  .catch((e)=>{
    res.send(e)
  })
})






module.exports = router