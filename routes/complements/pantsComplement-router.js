

const express = require('express')
const router  = express.Router()
const multer  = require('multer')

const PantsComplement = require('../../models/pantsComplement')

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
router.get('/pants-complements', (req, res)=>{
  PantsComplement.find()
  .then((info)=>{
    res.render('my-pants-complements', {element: info})
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para borrar un complemento superior específico
router.post('/one-pants-complement/:id', (req, res)=>{
  PantsComplement.findByIdAndRemove(req.params.id)
  .then((answer)=>{
    console.log(answer)
    res.redirect('/pants-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para conseguir un complemento superior en específico
router.get('/one-pants-complement/:id', (req, res)=>{
  PantsComplement.findById(req.params.id)
  .then((answer)=>{
    let PantsComplementArray = []
    PantsComplementArray.push(answer)
    res.render('one-pants-complement', {element: PantsComplementArray})
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para añadir un nuevo complemento superior
router.post('/new-PantsComplement', (req, res)=>{
  const newPantsComplement = new PantsComplement({
    pants_complement_name: req.body.pantsComplementInt,
    image: req.body.image
  })
  newPantsComplement.save()
  .then((answer)=>{
    res.send(answer)
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para subir a la DB un look de pants
router.post('/new-PantsComplement/upload', upload.single('upload'), (req, res)=>{

  const newPantsComplement = new PantsComplement({
    pants_complement_name: req.body.pantsComplementInt,
    image: '/images/' + req.file.filename
  })

  newPantsComplement.save()
  .then(()=>{
    res.redirect('/pants-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})



module.exports = router