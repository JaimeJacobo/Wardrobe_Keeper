

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








module.exports = router