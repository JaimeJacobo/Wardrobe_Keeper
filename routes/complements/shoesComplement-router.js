

const express = require('express')
const router  = express.Router()
const multer  = require('multer')

const ShoesComplement = require('../../models/shoesComplement')

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
router.get('/shoes-complements', (req, res)=>{
  ShoesComplement.find()
  .then((info)=>{
    res.render('my-shoes-complements', {element: info})
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para borrar un complemento superior específico
router.post('/one-shoes-complement/:id', (req, res)=>{
  ShoesComplement.findByIdAndRemove(req.params.id)
  .then((answer)=>{
    console.log(answer)
    res.redirect('/shoes-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para conseguir un complemento superior en específico
router.get('/one-shoes-complement/:id', (req, res)=>{
  ShoesComplement.findById(req.params.id)
  .then((answer)=>{
    let ShoesComplementArray = []
    ShoesComplementArray.push(answer)
    res.render('one-shoes-complement', {element: ShoesComplementArray})
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para añadir un nuevo complemento superior
router.post('/new-ShoesComplement', (req, res)=>{
  const newShoesComplement = new ShoesComplement({
    shoes_complement_name: req.body.shoesComplementInt,
    image: req.body.image
  })
  newShoesComplement.save()
  .then((answer)=>{
    res.send(answer)
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para subir a la DB un look de shoes
router.post('/new-ShoesComplement/upload', upload.single('upload'), (req, res)=>{

  const newShoesComplement = new ShoesComplement({
    shoes_complement_name: req.body.shoesComplementInt,
    image: '/images/' + req.file.filename
  })

  newShoesComplement.save()
  .then(()=>{
    res.redirect('/shoes-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})



module.exports = router