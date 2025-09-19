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
    320: {
      slidesPerView: 1.2,
      spaceBetween: 18,
      centeredSlides: true,
      initialSlide: 1,
    },
    375: {
      slidesPerView: 1.4,
      spaceBetween: 18,
      centeredSlides: true,
      initialSlide: 1,
    },
    425: {
      slidesPerView: 1.5,
      spaceBetween: 18,
      centeredSlides: true,
      initialSlide: 1,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 18,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
      centeredSlides: false,
    },
  },
});


