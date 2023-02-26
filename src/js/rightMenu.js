let openButton1 = document.getElementById('burger-right1')
let openButton2 = document.getElementById('burger-right2')
let burgerMenu1 = document.getElementById('burger-menu-right1')
let burgerMenu2 = document.getElementById('burger-menu-right2')
let closeButton2 = document.getElementById('close-burger2')
let closeButton3 = document.getElementById('close-burger3')
let wrap = document.getElementById('wrapper')
let leftBurger = document.getElementById('burger-menu')

console.log(openButton1, openButton2)

openButton1.addEventListener('click', function () {
  burgerMenu1.classList.add('burger-menu-right1-visi')
  wrap.classList.add('opasity-fon')
  leftBurger.classList.add('opasity-fon')
})

openButton2.addEventListener('click', function () {
  burgerMenu2.classList.add('burger-menu-right2-visi')
  wrap.classList.add('opasity-fon')
  leftBurger.classList.add('opasity-fon')
})

closeButton2.addEventListener('click', function () {
  burgerMenu1.classList.remove('burger-menu-right1-visi')
  wrap.classList.remove('opasity-fon')
  leftBurger.classList.remove('opasity-fon')
})

closeButton3.addEventListener('click', function () {
  burgerMenu2.classList.remove('burger-menu-right2-visi')
  wrap.classList.remove('opasity-fon')
  leftBurger.classList.remove('opasity-fon')
})
