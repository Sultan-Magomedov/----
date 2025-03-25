new Swiper('.swiper', {
  cssMode: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loop: true,
  reverseDirection: true,
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 1.15,
      width: 326
    },
    768: {
      enabled: false,
      slidesPerView: 'auto',
      spaceBetween: 'auto'
    }
  }
})
