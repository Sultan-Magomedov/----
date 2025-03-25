const brands = document.querySelector('.brands')
const tech = document.querySelector('.tech')
const blockVisionBrands = brands.querySelector(
  '.services__list--visibilite--hidden'
)
const buttonMoreBrands = brands.querySelector('.services__button-more')
const blockVisionTech = tech.querySelector(
  '.services__list--visibilite--hidden'
)
const buttonMoreTech = tech.querySelector('.services__button-more')

buttonMoreBrands.addEventListener('click', function () {
  blockVisionBrands.classList.toggle('services__list--visibilite--hidden')
  buttonMoreBrands.textContent = 'Скрыть'
  buttonMoreBrands.classList.toggle('services__button-more--transform--rotate')

  if (
    blockVisionBrands.classList.contains('services__list--visibilite--hidden')
  ) {
    buttonMoreBrands.textContent = 'Показать все'
  }
})

buttonMoreTech.addEventListener('click', function () {
  blockVisionTech.classList.toggle('services__list--visibilite--hidden')
  buttonMoreTech.textContent = 'Скрыть'
  buttonMoreTech.classList.toggle('services__button-more--transform--rotate')

  if (
    blockVisionTech.classList.contains('services__list--visibilite--hidden')
  ) {
    buttonMoreTech.textContent = 'Показать все'
  }
})