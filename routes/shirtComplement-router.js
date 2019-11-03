

const express = require('express')
const router  = express.Router()
const multer  = require('multer')

const ShirtComplement = require('../models/shirtComplement')

//Configuración de multer para subir fotos
const upload = multer({
  dest: 'public/images',
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb){
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
      return cb(new Error('Please upload a jpg or png image'))
    }
    cb(undefined, true)
    // cb(undefined, false)
  }
})

//Ruta para ver todos los complementos superiores
router.get('/shirt-complements', (req, res)=>{
  ShirtComplement.find()
  .then((info)=>{
    res.render('my-shirt-complements', {element: info})
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para borrar un complemento superior específico
router.post('/one-shirt-complement/:id', (req, res)=>{
  ShirtComplement.findByIdAndRemove(req.params.id)
  .then((answer)=>{
    console.log(answer)
    res.redirect('/shirt-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para conseguir un complemento superior en específico
router.get('/one-shirt-complement/:id', (req, res)=>{
  ShirtComplement.findById(req.params.id)
  .then((answer)=>{
    let ShirtComplementArray = []
    ShirtComplementArray.push(answer)
    res.render('one-shirt-complement', {element: ShirtComplementArray})
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para añadir un nuevo complemento superior
router.post('/new-ShirtComplement', (req, res)=>{
  const newShirtComplement = new ShirtComplement({
    shirt_complement_name: req.body.shirtComplementInt,
    image: req.body.image
  })
  newShirtComplement.save()
  .then((answer)=>{
    res.send(answer)
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para subir a la DB un look de shirt
router.post('/new-ShirtComplement/upload', upload.single('upload'), (req, res)=>{

  const newShirtComplement = new ShirtComplement({
    shirt_complement_name: req.body.shirtComplementInt,
    image: '/images/' + req.file.filename
  })

  newShirtComplement.save()
  .then(()=>{
    res.redirect('/creation-center/new-shirt-complement')
  })
  .catch((e)=>{
    console.log(e)
  })
})



module.exports = router