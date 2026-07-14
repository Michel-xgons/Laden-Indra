document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slide");

    if (slides.length < 2) return;

    const images = [
        "/images/background/10.jpg",

        "/images/background/2.jpg",
    ];

    let currentImage = 0;

    slides[0].style.backgroundImage = `url(${images[0]})`;
    slides[1].style.backgroundImage = `url(${images[1]})`;

    slides[0].classList.add("active");

    setInterval(() => {
        const activeSlide = slides[currentImage % 2];

        const hiddenSlide = slides[(currentImage + 1) % 2];

        currentImage = (currentImage + 1) % images.length;

        hiddenSlide.style.backgroundImage = `url(${images[currentImage]})`;

        hiddenSlide.classList.add("active");

        activeSlide.classList.remove("active");
    }, 7000);
});
