

const express = require('express')
const router  = express.Router()

//Ruta GET para la página principal
router.get('/', (req, res)=>{
  res.render("index")
})


module.exports = router