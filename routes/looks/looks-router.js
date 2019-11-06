

const express = require('express')
const router  = express.Router()

const Look = require('../../models/look')


router.post('/create-temporal-look', (req, res)=>{
  Look.create({
    look_name: req.body.look_name,
    top_complement: req.body.top_complement,
    hoodie_complement: req.body.hoodie_complement,
    shirt_complement: req.body.shirt_complement,
    pants_complement:  req.body.pants_complement,
    socks_complement: req.body.socks_complement,
    shoes_complement: req.body.shoes_complement
  })
  .then((answer)=>{
    res.send(answer)
  })
  .catch((e)=>{
    console.log(e)
  })
})

router.get('/temporal-look-prueba/:id/:something', (req, res)=>{

    Look.findById(req.params.id).populate('top_complement hoodie_complement shirt_complement pants_complement socks_complement shoes_complement')
    .then((answer)=>{
      res.send(answer)
    })
    .catch((e)=>{
      console.log(e)
    })
})


module.exports = router