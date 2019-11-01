

const express = require('express')
const router  = express.Router()
const multer  = require('multer')

const TopComplement = require('../models/topComplement')

//Configuración de multer para subir fotos
const upload = multer({
  dest: 'images',
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

//Ruta POST para añadir un nuevo complemento de cabeza
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

//Ruta POST para 
router.post('/new-topComplement/upload-image', upload.single('upload'), (req, res)=>{
  console.log(req.file)
  res.redirect('/creation-center')
  
})






module.exports = router