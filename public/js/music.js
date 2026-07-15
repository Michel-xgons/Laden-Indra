document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const cover = document.getElementById("cover");
    const coverContent = document.querySelector(".cover-content");
    const coverImage = document.getElementById("coverImage");
    const coverOverlay = document.querySelector(".cover-overlay");

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");
    const openBtn = document.getElementById("openInvitation");

    // ==========================================
    // HIDE MUSIC BUTTON SAAT COVER TAMPIL
    // ==========================================

    if (musicBtn) {
        musicBtn.classList.add("hidden");
    }

    // ==========================================
    // LOCK SCROLL
    // ==========================================

    if (cover) {
        body.classList.add("lock-scroll");
    }

    // ==========================================
    // OPEN INVITATION
    // ==========================================

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            openBtn.disabled = true;

            // 1. Button mengecil
            openBtn.classList.add("clicked");

            // 2. Semua text menghilang
            setTimeout(() => {
                coverContent?.classList.add("hide");
            }, 120);

            // 3. Background zoom
            setTimeout(() => {
                coverImage?.classList.add("zoom");
            }, 250);

            // 4. Overlay lebih gelap
            setTimeout(() => {
                coverOverlay?.classList.add("dark");
            }, 350);

            // 5. Musik mulai
            setTimeout(() => {
                if (music) {
                    music
                        .play()
                        .then(() => {
                            musicBtn?.classList.add("playing");

                            if (musicBtn) {
                                musicBtn.innerHTML =
                                    '<i class="bi bi-disc-fill"></i>';
                            }
                        })
                        .catch(() => {});
                }
            }, 500);

            // 6. Cover menghilang + tombol musik muncul
            setTimeout(() => {
                cover?.classList.add("hide");

                musicBtn?.classList.remove("hidden");
            }, 700);

            // 7. Scroll aktif
            setTimeout(() => {
                body.classList.remove("lock-scroll");

                document.querySelector(".countdown-section")?.scrollIntoView({
                    behavior: "smooth",
                });
            }, 1100);
        });
    }

    // ==========================================
    // MUSIC BUTTON
    // ==========================================

    if (musicBtn && music) {
        musicBtn.addEventListener("click", () => {
            if (music.paused) {
                music
                    .play()
                    .then(() => {
                        musicBtn.classList.add("playing");
                        musicBtn.innerHTML = '<i class="bi bi-disc-fill"></i>';
                    })
                    .catch(() => {});
            } else {
                music.pause();

                musicBtn.classList.remove("playing");

                musicBtn.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
            }
        });
    }

    // ==========================================
    // RESUME MUSIC SAAT KEMBALI KE TAB
    // ==========================================

    document.addEventListener("visibilitychange", () => {
        if (!music || !musicBtn) return;

        if (document.visibilityState === "visible") {
            if (!music.paused) return;

            music
                .play()
                .then(() => {
                    musicBtn.classList.add("playing");

                    musicBtn.innerHTML = '<i class="bi bi-disc-fill"></i>';
                })
                .catch(() => {});
        }
    });
});
