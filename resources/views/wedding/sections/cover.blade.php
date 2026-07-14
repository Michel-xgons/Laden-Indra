<section class="cover" id="cover">

    <img src="{{ asset('images/cover.jpg') }}" class="cover-image" id="coverImage" alt="Cover Wedding">

    <div class="cover-overlay"></div>

    <div class="cover-content">

        <p class="cover-subtitle">
            THE WEDDING OF
        </p>

        <h1 class="cover-title">
            Laden & Indra
        </h1>

        <p class="cover-to">
            Kepada Yth.
        </p>

        <h2 class="cover-guest">
            {{ ucwords(str_replace('-', ' ', $guest ?? 'Tamu Undangan')) }}
        </h2>

        <button id="openInvitation" class="cover-button">
            Buka Undangan
        </button>

    </div>

</section>
