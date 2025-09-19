const myResetSwiper = new Swiper(".myResetSwiper", {
  spaceBetween: 20,
  navigation: {
    prevEl: ".reset-swiper-prev",
    nextEl: ".reset-swiper-next",
  },
  scrollbar: {
    el: ".reset-swiper-container .swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      centeredSlides: true,
      spaceBetween: 16,
    },
    400: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    600: {
      slidesPerView: 1.4,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
  },
});