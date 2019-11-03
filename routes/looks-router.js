

const express = require('express')
const router = express.Router()

const Look = require('../models/look')


//Ruta GET para la página de 'crear conjunto'
router.get('/create-look', (req, res)=>{
  res.render('create-look')
})

//Ruta GET para ver todos mis looks
router.get('/my-looks', (req, res)=>{

  Look.find()
  .then((info)=>{
    res.render('my-looks', {looks: info})
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta GET para ver un look específico
router.get('/my-looks/:id', (req, res)=>{
  Look.findById(req.params.id)
  .then((info)=>{
    let lookArray = []
    lookArray.push(info)
    res.render('one-look', {look: lookArray})
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta DELETE para borrar un look
router.post('/my-looks/:id', (req, res)=>{
  Look.findByIdAndDelete(req.params.id)
  .then((info)=>{
    res.redirect('/my-looks')
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta POST para crear un nuevo look
router.post('/create-look', (req, res)=>{
  const newLook = new Look({
    look_name: req.body.topComplementInt,
    hat_complement: req.body.topComplementInt,
    shirt_complement: req.body.shirtComplementInt,
    hoodie_complement: req.body.hoodieComplementInt,
    pant_complement: req.body.pantsComplementInt,
    socks_complement: req.body.socksComplementInt,
    shoes_complement: req.body.shoesComplementInt
  })
 
  newLook.save()
  .then((info)=>{
    res.status(201).redirect('/my-looks')
  })
  .catch((e)=>{
    res.status(400).send(e)
    console.log(chalk.red(e))
  })
})




module.exports = router