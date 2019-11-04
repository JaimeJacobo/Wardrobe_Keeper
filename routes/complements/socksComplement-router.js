

const express = require('express')
const router  = express.Router()
const multer  = require('multer')

const SocksComplement = require('../../models/socksComplement')

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
router.get('/socks-complements', (req, res)=>{
  SocksComplement.find()
  .then((info)=>{
    res.render('my-socks-complements', {element: info})
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para borrar un complemento superior específico
router.post('/one-socks-complement/:id', (req, res)=>{
  SocksComplement.findByIdAndRemove(req.params.id)
  .then((answer)=>{
    console.log(answer)
    res.redirect('/socks-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para conseguir un complemento superior en específico
router.get('/one-socks-complement/:id', (req, res)=>{
  SocksComplement.findById(req.params.id)
  .then((answer)=>{
    let SocksComplementArray = []
    SocksComplementArray.push(answer)
    res.render('one-socks-complement', {element: SocksComplementArray})
  })
  .catch((e)=>{
    console.log(e)
  })
})

//Ruta para añadir un nuevo complemento superior
router.post('/new-SocksComplement', (req, res)=>{
  const newSocksComplement = new SocksComplement({
    socks_complement_name: req.body.socksComplementInt,
    image: req.body.image
  })
  newSocksComplement.save()
  .then((answer)=>{
    res.send(answer)
  })
  .catch((e)=>{
    res.send(e)
  })
})

//Ruta para subir a la DB un look de socks
router.post('/new-SocksComplement/upload', upload.single('upload'), (req, res)=>{

  const newSocksComplement = new SocksComplement({
    socks_complement_name: req.body.socksComplementInt,
    image: '/images/' + req.file.filename
  })

  newSocksComplement.save()
  .then(()=>{
    res.redirect('/socks-complements')
  })
  .catch((e)=>{
    console.log(e)
  })
})



module.exports = router