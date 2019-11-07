
let change_image = (image, placeholderImage, label)=>{
  
  let file = document.getElementById(image).files[0];
  if(file.name.endsWith('.jpg') || file.name.endsWith('.jpeg') || file.name.endsWith('.png')){
    $('#shoesComplementPlaceholderImage').css('width', '500px')
    document.getElementById(placeholderImage).src = window.URL.createObjectURL(file);
    $('label').html('Image uploaded :)');
    $('label').addClass('imageUploadedSuccess');    
    $('#failedImageMsg').css('display', 'none');
  } else {
    $('#failedImageMsg').css('display', 'block')   
  }
}


$('#topComplementPlaceholderImage').click(()=>{
  $('#topComplementImage').trigger('click');
})

$('#shirtComplementPlaceholderImage').click(()=>{
  $('#shirtComplementImage').trigger('click');
})

$('#hoodieComplementPlaceholderImage').click(()=>{
  $('#hoodieComplementImage').trigger('click');
})

$('#pantsComplementPlaceholderImage').click(()=>{
  $('#pantsComplementImage').trigger('click');
})

$('#socksComplementPlaceholderImage').click(()=>{
  $('#socksComplementImage').trigger('click');
})

$('#shoesComplementPlaceholderImage').click(()=>{
  $('#shoesComplementImage').trigger('click');
})


$('.not-selected').click(()=>{
  $(event.target).toggleClass('not-selected')
  $(event.target).toggleClass('selected')
})



$('ul li a').click( function(){
  if ( $(this).hasClass('current') ) {
    $(this).removeClass('current');
  } else {
    $('li a.current').removeClass('current');
    $(this).addClass('current');    
  }
});

$('#submitNewLook').click(()=>{
  document.getElementById('lookName').value = document.getElementById('lookNameInt').value

  let selectedTopComplement = document.getElementById('topComplementChecker').getElementsByClassName('selected')[0];
  let selectedTopComplementID = selectedTopComplement.id
  let topComplement_image = selectedTopComplementID.split(':3000').pop();

  document.getElementById('topComplement').value = topComplement_image

  //Consigue el ID del articulo hoodie seleccionado y añadelo al campo del form
  let selectedHoodieComplement = document.getElementById('hoodieComplementChecker').getElementsByClassName('selected')[0];
  let selectedHoodieComplementID = selectedHoodieComplement.id
  let hoodieComplement_image = selectedHoodieComplementID.split(':3000').pop();

  document.getElementById('hoodieComplement').value = hoodieComplement_image

  //Consigue el ID del articulo shirt seleccionado y añadelo al campo del form
  let selectedShirtComplement = document.getElementById('shirtComplementChecker').getElementsByClassName('selected')[0];
  let selectedShirtComplementID = selectedShirtComplement.id
  let shirtComplement_image = selectedShirtComplementID.split(':3000').pop();
  
  document.getElementById('shirtComplement').value = shirtComplement_image

  //Consigue el ID del articulo pants seleccionado y añadelo al campo del form
  let selectedPantsComplement = document.getElementById('pantsComplementChecker').getElementsByClassName('selected')[0];
  let selectedPantsComplementID = selectedPantsComplement.id
  let pantsComplement_image = selectedPantsComplementID.split(':3000').pop();
  
  document.getElementById('pantsComplement').value = pantsComplement_image

  //Consigue el ID del articulo socks seleccionado y añadelo al campo del form
  let selectedSocksComplement = document.getElementById('socksComplementChecker').getElementsByClassName('selected')[0];
  let selectedSocksComplementID = selectedSocksComplement.id
  let socksComplement_image = selectedSocksComplementID.split(':3000').pop();
  
  document.getElementById('socksComplement').value = socksComplement_image

  //Consigue el ID del articulo shoes seleccionado y añadelo al campo del form
  let selectedShoesComplement = document.getElementById('shoesComplementChecker').getElementsByClassName('selected')[0];
  let selectedShoesComplementID = selectedShoesComplement.id
  let shoesComplement_image = selectedShoesComplementID.split(':3000').pop();
    
  document.getElementById('shoesComplement').value = shoesComplement_image

  if(typeof(shoesComplement_image) != 'string'){
    $('#submitNewLook').trigger('click');
  } else {
    $('#submitLookButton').trigger('click');
  }
})

