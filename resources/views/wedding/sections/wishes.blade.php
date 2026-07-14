<!-- =========================================
    RSVP & WISHES
========================================= -->

<section class="wish-section py-5" id="wish">

    <div class="container">

        <!-- Header -->

        <div class="text-center mb-5" data-aos="fade-up">

            <h2 class="section-title">
                RSVP & Wishes
            </h2>

            <p class="text-muted">
                Kehadiran dan doa Anda merupakan kebahagiaan bagi kami.
            </p>

        </div>

        <!-- =========================================
            FORM
        ========================================== -->

        <div class="wish-form-card"
             data-aos="fade-up"
             data-aos-delay="100">

            <form
                id="wishForm"
                action="{{ route('wish.store') }}"
                method="POST">

                @csrf

                <!-- Nama -->

                <div class="mb-4">

                    <label class="form-label">

                        Nama

                    </label>

                    <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Masukkan nama Anda"
                        required>

                </div>

                <!-- Kehadiran -->

                <div class="mb-4">

                    <label class="form-label d-block mb-3">

                        Apakah Anda akan hadir?

                    </label>

                    <div class="attendance-group">

                        <div class="form-check">

                            <input
                                class="form-check-input"
                                type="radio"
                                name="attendance"
                                id="hadir"
                                value="hadir"
                                required>

                            <label
                                class="form-check-label"
                                for="hadir">

                                Hadir

                            </label>

                        </div>

                        <div class="form-check">

                            <input
                                class="form-check-input"
                                type="radio"
                                name="attendance"
                                id="tidak_hadir"
                                value="tidak_hadir">

                            <label
                                class="form-check-label"
                                for="tidak_hadir">

                                Tidak Hadir

                            </label>

                        </div>

                    </div>

                </div>

                <!-- Ucapan -->

                <div class="mb-4">

                    <label class="form-label">

                        Ucapan & Doa

                    </label>

                    <textarea
                        name="message"
                        rows="5"
                        class="form-control"
                        placeholder="Tuliskan ucapan dan doa terbaik..."
                        required></textarea>

                </div>

                <button
                    type="submit"
                    id="submitWish"
                    class="btn btn-gold w-100">

                    <span class="submit-text">

                        Kirim RSVP & Ucapan

                    </span>

                </button>

            </form>

        </div>

        <!-- =========================================
            RSVP SUMMARY
        ========================================== -->

        <div
            class="rsvp-summary"
            data-aos="fade-up"
            data-aos-delay="200">

            <div class="summary-card">

                <i class="bi bi-chat-heart-fill"></i>

                <h3 id="totalWish">

                    {{ $totalWish }}

                </h3>

                <p>

                    Total Ucapan

                </p>

            </div>

            <div class="summary-card">

                <i class="bi bi-check-circle-fill"></i>

                <h3 id="totalHadir">

                    {{ $totalHadir }}

                </h3>

                <p>

                    Hadir

                </p>

            </div>

            <div class="summary-card">

                <i class="bi bi-x-circle-fill"></i>

                <h3 id="totalTidakHadir">

                    {{ $totalTidakHadir }}

                </h3>

                <p>

                    Tidak Hadir

                </p>

            </div>

        </div>

        <!-- =========================================
            LIST
        ========================================== -->

        <div
            class="wish-list mt-5"
            id="wishList">

            @forelse($wishes as $wish)

                @php

    $words = preg_split('/\s+/', trim($wish->name));

    $initials = strtoupper(substr($words[0], 0, 1));

    if (count($words) > 1) {
        $initials .= strtoupper(substr($words[1], 0, 1));
    }

    $colors = [
        'avatar-gold',
        'avatar-blue',
        'avatar-green',
        'avatar-purple',
        'avatar-pink',
        'avatar-orange',
        'avatar-cyan',
        'avatar-gray'
    ];

    $hash = 0;

    foreach (str_split($wish->name) as $char) {
        $hash = ord($char) + (($hash << 5) - $hash);
    }

    $avatarClass = $colors[abs($hash) % count($colors)];

@endphp

                <div
                    class="wish-card"
                    data-aos="fade-up">

                    <div class="wish-header">

                        <div class="wish-user">

                            <div class="wish-avatar {{ $avatarClass }}">

                                {{ $initials }}

                            </div>

                            <div class="wish-user-info">

                                <h6 class="wish-name">

                                    {{ $wish->name }}

                                </h6>

                                @if($wish->attendance == 'hadir')

                                    <span class="attendance-badge hadir">

                                        <i class="bi bi-check-circle-fill me-1"></i>

                                        Hadir

                                    </span>

                                @else

                                    <span class="attendance-badge tidak-hadir">

                                        <i class="bi bi-x-circle-fill me-1"></i>

                                        Tidak Hadir

                                    </span>

                                @endif

                            </div>

                        </div>

                        <small class="wish-time">

                            {{ $wish->created_at->diffForHumans() }}

                        </small>

                    </div>

                    <p class="wish-message">

                        {{ $wish->message }}

                    </p>

                </div>

            @empty

                <div class="text-center py-5">

                    <p class="text-muted mb-0">

                        Belum ada ucapan.

                    </p>

                </div>

            @endforelse

        </div>

        <!-- =========================================
            LOAD MORE
        ========================================== -->

        @if($totalWish > 5)

            <div class="load-more-wrapper">

                <button
                    id="loadMoreBtn"
                    class="load-more-btn"
                    data-offset="5">

                    <span class="load-more-text">

                        <i class="bi bi-chat-heart"></i>

                        Lihat Ucapan Lainnya

                    </span>

                    <span class="load-more-arrow">

                        <i class="bi bi-chevron-double-down"></i>

                    </span>

                </button>

            </div>

        @endif

    </div>

</section>