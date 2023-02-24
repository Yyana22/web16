import Swiper from './swiper-bundle.min.js'

export const showButton = document.querySelector('.show-more__button')
export const hiddenParts = document.querySelector('.list__hidden')
export const showLess = document.querySelector('.show-more__icon')

export let div1 = document.createElement('div')
export let div2 = document.createElement('div')

div1.setAttribute('class', 'swiper-slide card')
div2.setAttribute('class', 'swiper-slide card')
showButton.addEventListener('click', function () {
  hiddenParts.classList.toggle('list__hidden')
  showLess.classList.toggle('show-more__icon')
  div1.innerHTML = `
        <img class="card__logo" src="./img/samsung.svg" alt="Samsung">
        <img src="./img/go.svg" alt="logo" class="card__go">
        `
  div2.innerHTML = `
        <img class="card__logo" src="./img/ViewSonic.svg" alt="ViewSonic">
        <img src="./img/go.svg" alt="logo" class="card__go">
        `
  document.getElementById('slide').appendChild(div1)
  document.getElementById('slide').appendChild(div2)
  if (hiddenParts.classList.contains('list__hidden')) {
    showButton.textContent = 'Показать всё'
  } else {
    showButton.textContent = 'Скрыть'
  }
})

export const showButton2 = document.querySelector('.show-more__button2')
export const hiddenParts2 = document.querySelector('.list__hidden2')
export const showLess2 = document.querySelector('.show-more__icon2')

export let div12 = document.createElement('div')
export let div22 = document.createElement('div')

div12.setAttribute('class', 'swiper-slide card2')
div22.setAttribute('class', 'swiper-slide card2')
showButton2.addEventListener('click', function () {
  hiddenParts2.classList.toggle('list__hidden2')
  showLess2.classList.toggle('show-more__icon2')
  div12.innerHTML = `
        <img class="card__logo" src="./img/samsung.svg" alt="Samsung">
        <img src="./img/go.svg" alt="logo" class="card__go">
        `
  div22.innerHTML = `
        <img class="card__logo" src="./img/ViewSonic.svg" alt="ViewSonic">
        <img src="./img/go.svg" alt="logo" class="card__go">
        `
  document.getElementById('slide').appendChild(div12)
  document.getElementById('slide').appendChild(div22)
  if (hiddenParts2.classList.contains('list__hidden2')) {
    showButton2.textContent = 'Показать всё'
  } else {
    showButton2.textContent = 'Скрыть'
  }
})

export const slider = document.querySelector('.swiper')
export let mySwiper

export const slider2 = document.querySelector('.swiper2')
export let mySwiper2

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 16,
      width: 240,
      height: 72,
      slideClass: 'card',
      pagination: {
        spaceBetween: 16,
        loop: true,
        el: '.swiper-pagination',
        clickable: true
      }
    })
    slider.dataset.mobile = 'true'

    mySwiper2 = new Swiper(slider2, {
      slidesPerView: 1,
      spaceBetween: 16,
      width: 240,
      height: 72,
      slideClass: 'card2',
      pagination: {
        spaceBetween: 16,
        loop: true,
        el: '.swiper-pagination',
        clickable: true
      }
    })
    slider2.dataset.mobile = 'true'
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false'
    mySwiper.destroy()
    slider2.dataset.mobile = 'false'
    mySwiper2.destroy()
  }
}

mobileSlider()
window.addEventListener('resize', () => {
  mobileSlider()
})
