

const express = require('express')
const router  = express.Router()
const multer  = require('multer')

const TopComplement = require('../../models/topComplement')

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
router.get('/top-complements', (req, res)=>{
  TopComplement.find()
  .then((info)=>{
    res.render('my-top-complements', {element: info})
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para borrar un complemento superior específico
router.post('/one-top-complement/:id', (req, res)=>{
  TopComplement.findByIdAndRemove(req.params.id)
  .then((answer)=>{
    console.log(answer)
    res.redirect('/top-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para conseguir un complemento superior en específico
router.get('/one-top-complement/:id', (req, res)=>{
  TopComplement.findById(req.params.id)
  .then((answer)=>{
    let topComplementArray = []
    topComplementArray.push(answer)
    res.render('one-top-complement', {element: topComplementArray})
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para añadir un nuevo complemento superior
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

//Ruta para subir a la DB un look de superior
router.post('/new-topComplement/upload', upload.single('upload'), (req, res)=>{

  const newTopComplement = new TopComplement({
    top_complement_name: req.body.topComplementInt,
    image: '/images/' + req.file.filename
  })

  newTopComplement.save()
  .then(()=>{
    res.redirect('/top-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})



module.exports = router