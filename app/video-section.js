document.querySelectorAll('.video-card').forEach(card => {
    const video = card.querySelector('.social-video');
    const playToggle = card.querySelector('.play-toggle');
    const playIcon = playToggle.querySelector('.icon-play');
    const pauseIcon = playToggle.querySelector('.icon-pause');

    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playIcon.style.display = "none";
            pauseIcon.style.display = "block";
        } else {
            video.pause();
            playIcon.style.display = "block";
            pauseIcon.style.display = "none";
        }
    }

    playToggle.addEventListener('click', togglePlayPause);

    video.addEventListener('click', togglePlayPause);

    // Reset icons when video ends
    video.addEventListener('ended', () => {
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
    });
});



// social made section swiper
const myVideoSwiper = new Swiper(".myVideoSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 0,
    scrollbar: {
        el: ".video-container .swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        769: {
            slidesPerView: "auto",
            spaceBetween: 0,
            allowTouchMove: false,
            scrollbar: false,
        }
    }
});