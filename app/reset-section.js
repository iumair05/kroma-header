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
      slidesPerView: 1.4,
      centeredSlides: true,
      spaceBetween: 16,
      initialSlide: 1,

    },
    400: {
      slidesPerView: 1.8,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,

    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
  },
});