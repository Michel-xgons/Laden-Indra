document.addEventListener("DOMContentLoaded", () => {

    const indicator = document.querySelector(".scroll-indicator");

    if (!indicator) return;

    indicator.addEventListener("click", () => {

        document.querySelector(".profile").scrollIntoView({

            behavior: "smooth"

        });

    });

});