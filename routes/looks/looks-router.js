

const express = require('express')
const router  = express.Router()

const TopComplement = require('../../models/topComplement')
const ShirtComplement = require('../../models/shirtComplement')
const HoodieComplement = require('../../models/hoodieComplement')
const PantsComplement = require('../../models/pantsComplement')
const SocksComplement = require('../../models/socksComplement')
const ShoesComplement = require('../../models/shoesComplement')

const Look = require('../../models/look')

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
      console.log(topComplementArray)

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