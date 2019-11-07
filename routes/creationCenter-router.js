

const express = require('express')
const router  = express.Router()

const TopComplement = require('../models/topComplement')
const ShirtComplement = require('../models/shirtComplement')
const HoodieComplement = require('../models/hoodieComplement')
const PantsComplement = require('../models/pantsComplement')
const SocksComplement = require('../models/socksComplement')
const ShoesComplement = require('../models/shoesComplement')



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

//Ruta GET para ver la zona de cración de complemento shoes
router.get('/creation-center/new-shoes-complement', (req, res)=>{
  res.render('creationCenter-shoes-complement')
})

router.get('/creation-center/new-look', (req, res)=>{

  const topComplementArray = new Array;
  const shirtComplementArray = new Array;
  const hoodieComplementArray = new Array;
  const pantsComplementArray = new Array;
  const socksComplementArray = new Array;
  const shoesComplementArray = new Array;


  TopComplement.find()
  .then((answer)=>{
    answer.forEach((element)=>{
      topComplementArray.push(element)
    })
  })
  .catch((e)=>{
    console.log(e)
  })

  ShirtComplement.find()
  .then((answer)=>{
    answer.forEach((element)=>{
      shirtComplementArray.push(element)
    })
  })
  .catch((e)=>{
    console.log(e)
  })

  HoodieComplement.find()
  .then((answer)=>{
    answer.forEach((element)=>{
      hoodieComplementArray.push(element)
    })  
  })
  .catch((e)=>{
    console.log(e)
  })

  PantsComplement.find()
  .then((answer)=>{
    answer.forEach((element)=>{
      pantsComplementArray.push(element)
    })  
  })
  .catch((e)=>{
    console.log(e)
  })

  SocksComplement.find()
  .then((answer)=>{
    answer.forEach((element)=>{
      socksComplementArray.push(element)
    })  
  })
  .catch((e)=>{
    console.log(e)
  })

  ShoesComplement.find()
  .then((answer)=>{
    answer.forEach((element)=>{
      shoesComplementArray.push(element)
    })  
  })
  .catch((e)=>{
    console.log(e)
  })
  res.render('creationCenter-my-looks', {
    topComplement: topComplementArray,
    shirtComplement: shirtComplementArray,
    hoodieComplement: hoodieComplementArray,
    pantsComplement: pantsComplementArray,
    socksComplement: socksComplementArray,
    shoesComplement: shoesComplementArray
  })
});


module.exports = router