

let change_image = (image, placeholderImage)=>{
  
  let file = document.getElementById(image).files[0]
  document.getElementById(placeholderImage).src = window.URL.createObjectURL(file)
}
