const mySellersSwiper = new Swiper(".mySellersSwiper", {
    slidesPerView: 4,
    spaceBetween: 18,
    navigation: {
        nextEl: ".sellers-swiper-next",
        prevEl: ".sellers-swiper-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 18,
            centeredSlides: true
        },
        375: {
            slidesPerView: 1.4,
            spaceBetween: 18,
            centeredSlides: true
        },
        425: {
            slidesPerView: 1.5,
            spaceBetween: 18,
            centeredSlides: true
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 18,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2.4,
            spaceBetween: 18,
            centeredSlides: true,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 18,
            centeredSlides: false
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 18,
            centeredSlides: false
        },
    }
});
