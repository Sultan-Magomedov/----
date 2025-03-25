const burgerButton = document.querySelector('.button__burger')
const sidebar = document.querySelector('.sidebar')
const outside = document.querySelector('.outside')
const sidebarClose = document.querySelector('.sidebar__button')
const containerOverflow = document.querySelector('.container')

burgerButton.addEventListener('click', function () {
  sidebar.classList.add('sidebar--position--vision')
  outside.classList.add('outside--position--vision')
  containerOverflow.classList.add('container--overflow--hidden')
})

sidebarClose.addEventListener('click', function () {
  sidebar.classList.remove('sidebar--position--vision')
  outside.classList.remove('outside--position--vision')
  containerOverflow.classList.remove('container--overflow--hidden')
})
outside.addEventListener('click', function () {
  sidebar.classList.remove('sidebar--position--vision')
  outside.classList.remove('outside--position--vision')
  containerOverflow.classList.remove('container--overflow--hidden')
})