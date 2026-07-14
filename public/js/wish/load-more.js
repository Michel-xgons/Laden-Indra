document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("loadMoreBtn");
    const wishList = document.getElementById("wishList");

    if (!button || !wishList) return;

    let isLoading = false;

    button.addEventListener("click", loadMore);

    function loadMore() {

        if (isLoading) return;

        isLoading = true;

        const offset = parseInt(button.dataset.offset, 10);

        button.disabled = true;
        button.classList.add("loading");

        button.innerHTML = `
            <span class="spinner-border spinner-border-sm me-2"></span>
            Memuat Ucapan...
        `;

        fetch(`/wishes/load-more?offset=${offset}`)

            .then(response => response.json())

            .then(response => {

                const wishes = response.wishes;

                if (wishes.length === 0) {

                    finishButton();
                    return;

                }

                wishes.forEach((wish, index) => {

                    setTimeout(() => {

                        appendWishCard(wish);

                    }, index * 120);

                });

                button.dataset.offset = offset + wishes.length;

                setTimeout(() => {

                    if (response.hasMore) {

                        resetButton();

                    } else {

                        finishButton();

                    }

                }, wishes.length * 120 + 350);

            })

            .catch(error => {

                console.error(error);

                resetButton(true);

            });

    }

    function appendWishCard(wish) {

        const badge = wish.attendance === "hadir"

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

        const initials = getInitials(wish.name);

        const avatarClass = getAvatarClass(wish.name);

        const card = document.createElement("div");

        card.className = "wish-card";

        card.style.opacity = "0";
        card.style.transform = "translateY(25px) scale(.98)";

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

        wishList.appendChild(card);

        requestAnimationFrame(() => {

            card.style.transition =
                "opacity .45s ease, transform .45s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0) scale(1)";

        });

    }

    function resetButton(isError = false) {

        isLoading = false;

        button.disabled = false;

        button.classList.remove("loading");

        if (isError) {

            button.innerHTML = `
                <span class="load-more-text">
                    <i class="bi bi-arrow-clockwise me-2"></i>
                    Coba Lagi
                </span>
            `;

            return;

        }

        button.innerHTML = `
            <span class="load-more-text">
                <i class="bi bi-chat-heart me-2"></i>
                Lihat Ucapan Lainnya
            </span>

            <span class="load-more-arrow">
                <i class="bi bi-chevron-double-down"></i>
            </span>
        `;

    }

    function finishButton() {

        isLoading = false;

        button.disabled = true;

        button.classList.remove("loading");

        button.classList.add("finished");

        button.innerHTML = `
            <span class="load-more-text">
                <i class="bi bi-check-circle-fill me-2"></i>
                Semua Ucapan Telah Ditampilkan
            </span>
        `;

    }

});


/* ==================================================
   AVATAR HELPERS
================================================== */

function getInitials(name) {

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {

        return words[0].charAt(0).toUpperCase();

    }

    return (
        words[0].charAt(0).toUpperCase() +
        words[1].charAt(0).toUpperCase()
    );

}

function getAvatarClass(name) {

    const colors = [
        "avatar-gold",
        "avatar-blue",
        "avatar-green",
        "avatar-purple",
        "avatar-pink",
        "avatar-orange",
        "avatar-cyan",
        "avatar-gray"
    ];

    let hash = 0;

    for (let i = 0; i < name.length; i++) {

        hash = name.charCodeAt(i) + ((hash << 5) - hash);

    }

    return colors[Math.abs(hash) % colors.length];

}