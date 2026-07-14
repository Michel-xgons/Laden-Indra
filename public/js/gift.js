/* ==================================================
   WEDDING GIFT
================================================== */

document.addEventListener("DOMContentLoaded", () => {
    /* ==========================================
       ELEMENT
    ========================================== */

    const modal = document.getElementById("giftModal");

    const openBtn = document.getElementById("giftOpen");

    const closeBtn = document.getElementById("giftClose");

    const overlay = document.getElementById("giftOverlay");

    const finishBtn = document.getElementById("giftFinish");

    const body = document.body;

    /* ==========================================
       SLIDER
    ========================================== */

    const slider = document.getElementById("giftSliderTrack");

    const dots = document.querySelectorAll(".gift-dot");

    const copyButtons = document.querySelectorAll(".gift-copy-btn");

    const toast = document.getElementById("giftToast");

    let current = 0;

    let lock = false;

    /* ==========================================
       OPEN
    ========================================== */

    let scrollPosition = 0;

    function openGift() {
        if (lock) return;

        lock = true;

        scrollPosition = window.pageYOffset;

        modal.classList.remove("closing");

        modal.classList.remove("opened");

        modal.classList.add("active");

        setTimeout(() => {
            modal.classList.add("opened");
        }, 700);

        setTimeout(() => {
            lock = false;
        }, 900);
    }

    /* ==========================================
       CLOSE
    ========================================== */

    function closeGift() {
        if (lock) return;

        lock = true;
        modal.classList.remove("opened");
        modal.classList.add("closing");

        setTimeout(() => {
            modal.classList.remove("active");
        }, 650);

        setTimeout(() => {
            modal.classList.remove("closing");

            current = 0;

            moveSlider();

            lock = false;
        }, 800);
    }

    /* ==========================================
       BUTTON
    ========================================== */

    openBtn.addEventListener("click", openGift);

    closeBtn.addEventListener("click", closeGift);

    overlay.addEventListener("click", closeGift);

    finishBtn.addEventListener("click", closeGift);

    /* ==========================================
       ESC
    ========================================== */

    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;

        if (e.key === "Escape") {
            closeGift();
        }
    });

    /* ==========================================
       DOT
    ========================================== */

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            current = Number(dot.dataset.slide);

            moveSlider();
        });
    });

    function moveSlider() {
        slider.style.transform = `translateX(-${current * 50}%)`;

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        dots[current].classList.add("active");
    }

    /* ==========================================
       SWIPE
    ========================================== */

    let startX = 0;

    let endX = 0;

    if (slider) {
        slider.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener("touchend", (e) => {
            endX = e.changedTouches[0].clientX;

            const distance = startX - endX;

            if (Math.abs(distance) < 60) return;

            if (distance > 0 && current < 1) {
                current++;
            }

            if (distance < 0 && current > 0) {
                current--;
            }

            moveSlider();
        });
    }

    /* ==========================================
       COPY
    ========================================== */

    copyButtons.forEach((button) => {
        button.addEventListener("click", async () => {
            const number = button.dataset.copy;

            try {
                await navigator.clipboard.writeText(number);
            } catch {
                const input = document.createElement("input");

                input.value = number;

                document.body.appendChild(input);

                input.select();

                document.execCommand("copy");

                document.body.removeChild(input);
            }

            successButton(button);

            showToast();
        });
    });

    /* ==========================================
       COPY SUCCESS
    ========================================== */

    function successButton(button) {
        const icon = button.querySelector("i");

        const text = button.querySelector("span");

        const oldIcon = icon.className;

        const oldText = text.innerHTML;

        button.disabled = true;

        icon.className = "bi bi-check-lg";

        text.innerHTML = "Berhasil Disalin";

        setTimeout(() => {
            button.disabled = false;

            icon.className = oldIcon;

            text.innerHTML = oldText;
        }, 2200);
    }

    /* ==========================================
       TOAST
    ========================================== */

    let timer;

    function showToast() {
        clearTimeout(timer);

        if (!toast) return;

        toast.classList.add("show");

        timer = setTimeout(() => {
            toast.classList.remove("show");
        }, 2200);
    }
});
