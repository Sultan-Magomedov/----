const modalFeedback = document.querySelector('.modal__feedback')
const modalCall = document.querySelector('.modal__call')
const modalFeedbackExit = modalFeedback.querySelector('.modal__exit')
const modalCallExit = modalCall.querySelector('.modal__exit')
const modalFeedbackOpen = document.querySelector('.button__chat')
const modalCallOpen = document.querySelector('.button__call')
const sidebar = document.querySelector('.sidebar')
const modalFeedbackOpenSidebar = sidebar.querySelector('.button__chat')
const modalCallOpenSidebar = sidebar.querySelector('.button__call')
const modalWrapperCall = modalCall.querySelector('.modal__wrapper')
const modalWrapperFeedback = modalFeedback.querySelector('.modal__wrapper')

modalFeedbackOpen.addEventListener('click', function () {
  modalFeedback.showModal()
  modalFeedback.classList.add('modal--position--vision')
})
modalCallOpen.addEventListener('click', function () {
  modalCall.showModal()
  modalCall.classList.add('modal--position--vision')
})
modalFeedbackOpenSidebar.addEventListener('click', function () {
  modalFeedback.showModal()
  modalFeedback.classList.add('modal--position--vision')
})
modalCallOpenSidebar.addEventListener('click', function () {
  modalCall.showModal()
  modalCall.classList.add('modal--position--vision')
})

modalFeedbackExit.addEventListener('click', function () {
  modalFeedback.close()
  modalFeedback.classList.remove('modal--position--vision')
})
modalCallExit.addEventListener('click', function () {
  modalCall.close()
  modalCall.classList.remove('modal--position--vision')
})
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    modalCall.classList.remove('modal--position--vision')
    modalFeedback.classList.remove('modal--position--vision')
  }
})

modalCall.addEventListener('click', function (evt) {
  if (modalCall.classList.contains('modal--position--vision')) {
    if (!modalWrapperCall.contains(evt.target)) {
      modalCall.close()
    }
  }
})
modalFeedback.addEventListener('click', function (evt) {
  if (modalFeedback.classList.contains('modal--position--vision')) {
    if (!modalWrapperFeedback.contains(evt.target)) {
      modalFeedback.close()
    }
  }
})