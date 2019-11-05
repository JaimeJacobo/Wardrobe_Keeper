
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