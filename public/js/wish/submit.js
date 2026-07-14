document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("wishForm");

    if (!form) return;

    const submitButton = document.getElementById("submitWish");

    const wishList = document.getElementById("wishList");

    const totalWish = document.getElementById("totalWish");

    const totalHadir = document.getElementById("totalHadir");

    const totalTidakHadir = document.getElementById("totalTidakHadir");

    const token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        submitButton.disabled = true;

        submitButton.innerHTML = `
            <span class="spinner-border spinner-border-sm me-2"></span>
            Mengirim...
        `;

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",

            headers: {
                "X-CSRF-TOKEN": token,
                "X-Requested-With": "XMLHttpRequest",
                Accept: "application/json",
            },

            body: formData,
        })
            .then((res) => {
                if (!res.ok) {
                    throw res;
                }

                return res.json();
            })

            .then((response) => {
                const wish = response.wish;

                const words = wish.name.trim().split(/\s+/).filter(Boolean);

                let initials = "";

                if (words.length > 0) {
                    initials += words[0][0].toUpperCase();
                }

                if (words.length > 1) {
                    initials += words[1][0].toUpperCase();
                }

                const colors = [
                    "avatar-gold",
                    "avatar-blue",
                    "avatar-green",
                    "avatar-purple",
                    "avatar-pink",
                    "avatar-orange",
                    "avatar-cyan",
                    "avatar-gray",
                ];

                let hash = 0;

                for (const char of wish.name) {
                    hash = char.charCodeAt(0) + ((hash << 5) - hash);
                }

                const avatarClass = colors[Math.abs(hash) % colors.length];
                const badge =
                    wish.attendance === "hadir"
                        ? `
                    <span class="attendance-badge hadir">
                        <i class="bi bi-check-circle-fill me-1"></i>
                        Hadir
                    </span>
                    `
                        : `
                    <span class="attendance-badge tidak-hadir">
                        <i class="bi bi-x-circle-fill me-1"></i>
                        Tidak Hadir
                    </span>
                    `;

                const card = document.createElement("div");

                card.className = "wish-card";

                card.style.opacity = "0";

                card.style.transform = "translateY(-20px)";

                card.innerHTML = `

                <div class="wish-header">

                    <div class="wish-user">

                        <div class="wish-avatar ${avatarClass}">

                            ${initials}

                        </div>

                        <div class="wish-user-info">

                            <h6 class="wish-name">

                                ${wish.name}

                            </h6>

                            ${badge}

                        </div>

                    </div>

                    <small class="wish-time">

                        ${wish.time}

                    </small>

                </div>

                <p class="wish-message">

                    ${wish.message}

                </p>

            `;

                wishList.prepend(card);

                card.scrollIntoView({
                    behavior: "smooth",

                    block: "center",
                });

                requestAnimationFrame(() => {
                    card.style.transition =
                        "opacity .45s ease, transform .45s ease, background .8s ease";

                    card.style.opacity = "1";

                    card.style.transform = "translateY(0)";

                    card.style.background = "#fff8e8";

                    setTimeout(() => {
                        card.style.background = "#fff";
                    }, 1200);
                });

                totalWish.textContent = Number(totalWish.textContent) + 1;

                if (wish.attendance === "hadir") {
                    totalHadir.textContent = Number(totalHadir.textContent) + 1;
                } else {
                    totalTidakHadir.textContent =
                        Number(totalTidakHadir.textContent) + 1;
                }

                form.reset();

                submitButton.disabled = false;

                submitButton.innerHTML = `

                <span class="submit-text">

                    Kirim RSVP & Ucapan

                </span>

            `;

                showToast("Terima kasih atas RSVP & ucapannya ");
            })

            .catch(async (error) => {
                submitButton.disabled = false;

                submitButton.innerHTML = `

                <span class="submit-text">

                    Kirim RSVP & Ucapan

                </span>

            `;

                if (error.json) {
                    const data = await error.json();

                    showToast(Object.values(data.errors)[0][0]);
                }
            });
    });

    function showToast(message, type = "success") {
        const oldToast = document.querySelector(".wish-toast");

        if (oldToast) {
            oldToast.remove();
        }

        const icons = {
            success: "bi-check-circle-fill",
            error: "bi-exclamation-circle-fill",
            info: "bi-info-circle-fill",
        };

        const titles = {
            success: "Berhasil!",
            error: "Oops!",
            info: "Informasi",
        };

        const toast = document.createElement("div");

        toast.className = `wish-toast ${type}`;

        toast.innerHTML = `

        <div class="toast-icon">

            <i class="bi ${icons[type]}"></i>

        </div>

        <div class="toast-content">

            <h6>${titles[type]}</h6>

            <p>${message}</p>

        </div>

        <div class="toast-progress"></div>

    `;

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add("show");
        });

        setTimeout(() => {
            toast.classList.remove("show");

            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 3500);
    }
});
