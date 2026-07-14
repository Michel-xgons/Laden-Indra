document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("saveDateBtn");

    if (!button) return;

    button.addEventListener("click", (e) => {
        e.preventDefault();

        const title = "Wedding Laden & Indra";

        const details =
            "Kami mengundang Anda untuk menghadiri acara pernikahan Laden & Indra.";

        const location =
            " Gereja katolik, Setasi Tri Tunggal Maha Kudus,long bawan";

        // Format Google Calendar
        const start = "20260728T090000";
        const end = "20260728T130000";

        const url =
            "https://calendar.google.com/calendar/render?action=TEMPLATE" +
            "&text=" +
            encodeURIComponent(title) +
            "&dates=" +
            start +
            "/" +
            end +
            "&details=" +
            encodeURIComponent(details) +
            "&location=" +
            encodeURIComponent(location);

        window.open(url, "_blank");
    });
});
