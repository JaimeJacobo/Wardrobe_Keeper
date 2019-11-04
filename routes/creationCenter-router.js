

const express = require('express')
const router  = express.Router()
// const multer  = require('multer')

// const TopComplement = require('../models/topComplement')



//Ruta GET para ver la zona de cración de complemento top
router.get('/creation-center/new-top-complement', (req, res)=>{
  res.render('creationCenter-top-complement')
})

//Ruta GET para ver la zona de cración de complemento shirt
router.get('/creation-center/new-shirt-complement', (req, res)=>{
  res.render('creationCenter-shirt-complement')
})

//Ruta GET para ver la zona de cración de complemento hoodie
router.get('/creation-center/new-hoodie-complement', (req, res)=>{
  res.render('creationCenter-hoodie-complement')
})

//Ruta GET para ver la zona de cración de complemento pants
router.get('/creation-center/new-pants-complement', (req, res)=>{
  res.render('creationCenter-pants-complement')
})

//Ruta GET para ver la zona de cración de complemento socks
router.get('/creation-center/new-socks-complement', (req, res)=>{
  res.render('creationCenter-socks-complement')
})








module.exports = router