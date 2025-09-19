const myTestimonialSwiper = new Swiper(".myTestimonialSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 60,
    centeredSlides: true,
    initialSlide: 1, // 👈 start from the second slide
    scrollbar: {
        el: ".testimonials-section .swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            initialSlide: 1, // keep consistent on mobile too
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 40,
            initialSlide: 1,
        },
        1024: {
            slidesPerView: 2.1,
            spaceBetween: 60,
            initialSlide: 1,
        }
    }
});
