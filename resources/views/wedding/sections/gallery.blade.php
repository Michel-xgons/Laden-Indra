<!-- =========================================
    GALLERY
========================================= -->

<section class="gallery-section" id="gallery">

    <div class="container">

        <div class="gallery-header"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic">

            <span class="gallery-subtitle">
                OUR GALLERY
            </span>

            <h2 class="gallery-title">
                Captured Moments
            </h2>

            <p class="gallery-description">
                Setiap momen memiliki cerita.
                Terima kasih telah menjadi bagian dari perjalanan cinta kami.
            </p>

        </div>

    </div>

    <div class="gallery-container">

        <div class="gallery-grid">

            <!-- Row 1 -->
            <div class="gallery-item"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="0"
                data-aos-easing="ease-out-cubic">

                <img src="{{ asset('images/1.jpg') }}" alt="Gallery 1">

            </div>

            <div class="gallery-item"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="0"
                data-aos-easing="ease-out-cubic">

                <img src="{{ asset('images/2.jpg') }}" alt="Gallery 2">

            </div>

            <!-- Row 2 -->
            <div class="gallery-item"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="150"
                data-aos-easing="ease-out-cubic">

                <img src="{{ asset('images/3.jpg') }}" alt="Gallery 3">

            </div>

            <div class="gallery-item"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="150"
                data-aos-easing="ease-out-cubic">

                <img src="{{ asset('images/4.jpg') }}" alt="Gallery 4">

            </div>

            <!-- Row 3 -->
            <div class="gallery-item"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="300"
                data-aos-easing="ease-out-cubic">

                <img src="{{ asset('images/5.jpg') }}" alt="Gallery 5">

            </div>

            <div class="gallery-item"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="300"
                data-aos-easing="ease-out-cubic">

                <img src="{{ asset('images/6.jpg') }}" alt="Gallery 6">

            </div>

            <!-- Row 4 -->
            <div class="gallery-item"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="450"
                data-aos-easing="ease-out-cubic">

                <img src="{{ asset('images/8.jpg') }}" alt="Gallery 7">

            </div>

            <div class="gallery-item"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="450"
                data-aos-easing="ease-out-cubic">

                <img src="{{ asset('images/11.jpg') }}" alt="Gallery 8">

            </div>

        </div>

    </div>

</section>

<!-- =========================================
    LIGHTBOX
========================================= -->

<div class="gallery-lightbox" id="galleryLightbox">

    <button class="gallery-close" id="galleryClose">
        <i class="bi bi-x-lg"></i>
    </button>

    <button class="gallery-prev" id="galleryPrev">
        <i class="bi bi-chevron-left"></i>
    </button>

    <div class="gallery-lightbox-image">

        <img id="galleryPreview" src="" alt="Gallery Preview">

    </div>

    <button class="gallery-next" id="galleryNext">
        <i class="bi bi-chevron-right"></i>
    </button>

    <div class="gallery-counter">

        <span id="galleryCurrent">1</span>

        /

        <span id="galleryTotal">8</span>

    </div>

</div>