let openButton = document.getElementById('burger-left')
let burgerMenu = document.getElementById('burger-menu')
let closeButton = document.getElementById('close-burger')
// let headRight = document.getElementById('head-right')
let wrap = document.getElementById('wrapper')

openButton.addEventListener('click', function () {
  burgerMenu.classList.add('burger__visibility')
  burgerMenu.classList.remove('burger__hidden')
  wrap.classList.add('opasity-fon')
  // headRight.classList.add('opasity-fon-none')
})
closeButton.addEventListener('click', function () {
  burgerMenu.classList.add('burger__hidden')
  burgerMenu.classList.remove('burger__visibility')
  wrap.classList.remove('opasity-fon')
})
