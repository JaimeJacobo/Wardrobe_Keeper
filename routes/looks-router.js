

const express = require('express')
const router = express.Router()

const Look = require('../models/look')


//Ruta GET para la página de 'crear conjunto'
router.get('/create-look', (req, res)=>{
  res.render('create-look')
})

router.get('/my-looks', (req, res)=>{

Look.find()
.then((info)=>{
  let arrayOfLooks = [];
  info.forEach((element)=>{
    arrayOfLooks.push(element)
  })
  res.render('my-looks', {looks: arrayOfLooks})
})
.catch((e)=>{
  console.log(e)
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
    res.status(201).redirect('/')
    console.log(info)
  })
  .catch((e)=>{
    res.status(400).send(e)
    console.log(chalk.red(e))
  })
})

module.exports = router