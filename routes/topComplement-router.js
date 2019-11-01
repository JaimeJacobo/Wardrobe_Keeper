

const express = require('express')
const router  = express.Router()
const multer  = require('multer')

const TopComplement = require('../models/topComplement')

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

router.get('/topComplement/:id', (req, res)=>{
  TopComplement.findById(req.params.id)
  .then((answer)=>{
    let topComplementArray = []
    topComplementArray.push(answer)
    res.render('top-complement', {element: topComplementArray})
  })
  .catch((e)=>{
    console.log(e)
  })
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

//Ruta POST para subir a la DB un look de cabeza
router.post('/new-topComplement/upload', upload.single('upload'), (req, res)=>{

  const newTopComplement = new TopComplement({
    top_complement_name: req.body.topComplementInt,
    image: '/images/' + req.file.filename
  })

  newTopComplement.save()
  .then(()=>{
    res.redirect('/creation-center')
  })
  .catch((e)=>{
    console.log(e)
  })
})



module.exports = router