let openButton = document.getElementById('burger-left');
let burgerMenu = document.getElementById('burger-menu');
let closeButton = document.getElementById('close-burger');
let sec1 = document.getElementById('sec1');
let sec2 = document.getElementById('sec1');
let main = document.getElementById('main');
let headRight = document.getElementById('head-right');

openButton.addEventListener('click',function() {
  burgerMenu.classList.add('burger__visibility');
  burgerMenu.classList.remove('burger__hidden');
  headRight.classList.add('opasity-fon');
  sec1.classList.add('opasity-fon');
  sec2.classList.add('opasity-fon');
  main.classList.add('opasity-fon');
  }
)
closeButton.addEventListener('click',function() {
  burgerMenu.classList.add('burger__hidden');
  burgerMenu.classList.remove('burger__visibility');
  sec1.classList.remove('opasity-fon');
  sec2.classList.remove('opasity-fon');
  main.classList.remove('opasity-fon');
  headRight.classList.remove('opasity-fon');
  }
)

console.log(openButton);