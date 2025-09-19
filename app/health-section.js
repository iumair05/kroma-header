const myHealthSwiper = new Swiper(".myHealthSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 18,
    scrollbar: {
        el: ".health-swiper-container .swiper-scrollbar",
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
        600: {
            slidesPerView: 1.4,
            spaceBetween: 18,
            centeredSlides: true
        },

    }
});
