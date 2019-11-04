

const express = require('express')
const router  = express.Router()
const multer  = require('multer')

const HoodieComplement = require('../../models/hoodieComplement')

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
router.get('/hoodie-complements', (req, res)=>{
  HoodieComplement.find()
  .then((info)=>{
    res.render('my-hoodie-complements', {element: info})
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para borrar un complemento superior específico
router.post('/one-hoodie-complement/:id', (req, res)=>{
  HoodieComplement.findByIdAndRemove(req.params.id)
  .then((answer)=>{
    console.log(answer)
    res.redirect('/hoodie-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para conseguir un complemento superior en específico
router.get('/one-hoodie-complement/:id', (req, res)=>{
  HoodieComplement.findById(req.params.id)
  .then((answer)=>{
    let HoodieComplementArray = []
    HoodieComplementArray.push(answer)
    res.render('one-hoodie-complement', {element: HoodieComplementArray})
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para añadir un nuevo complemento superior
router.post('/new-HoodieComplement', (req, res)=>{
  const newHoodieComplement = new HoodieComplement({
    hoodie_complement_name: req.body.hoodieComplementInt,
    image: req.body.image
  })
  newHoodieComplement.save()
  .then((answer)=>{
    res.send(answer)
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para subir a la DB un look de hoodie
router.post('/new-HoodieComplement/upload', upload.single('upload'), (req, res)=>{

  const newHoodieComplement = new HoodieComplement({
    hoodie_complement_name: req.body.hoodieComplementInt,
    image: '/images/' + req.file.filename
  })

  newHoodieComplement.save()
  .then(()=>{
    res.redirect('/hoodie-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})



module.exports = router