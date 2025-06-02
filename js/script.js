document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const scrollStep = track.querySelector("img").clientWidth + 24; // largeur + gap

    // Défilement automatique toutes les 4 secondes
    setInterval(() => {
        // Si on est presque à la fin, retourne au début
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
            track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            track.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
    }, 4000);
    let autoScroll;

    function startAutoScroll(track, scrollStep) {
        autoScroll = setInterval(() => {
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
                track.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                track.scrollBy({ left: scrollStep, behavior: "smooth" });
            }
        }, 4000);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const track = document.querySelector(".carousel-track");
        const scrollStep = track.querySelector("img").clientWidth + 24;


        startAutoScroll(track, scrollStep);

        track.addEventListener("mouseenter", () => clearInterval(autoScroll));
        track.addEventListener("mouseleave", () => startAutoScroll(track, scrollStep));
    });

    const scrollToCarouselBtn = document.getElementById("scroll-to-carousel");
    const festivalCarousel = document.getElementById("fest-list");

    scrollToCarouselBtn.addEventListener("click", () => {
        festivalCarousel.scrollIntoView({ behavior: "smooth" });
    });

});
