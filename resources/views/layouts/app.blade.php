<!DOCTYPE html>
<html lang="id">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', 'Wedding Invitation')</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Main CSS -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <!-- AOS -->
    <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

</head>

<body>

    @yield('content')

    <!-- ======================================
        BOOTSTRAP
    ======================================= -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

    <!-- ======================================
        COUNTDOWN
    ======================================= -->

    <script src="{{ asset('js/countdown.js') }}"></script>

    <script src="{{ asset('js/countdown/background.js') }}"></script>

    <script src="{{ asset('js/countdown/save-date.js') }}"></script>

    <script src="{{ asset('js/countdown/scroll.js') }}"></script>

    <!-- ======================================
        MUSIC
    ======================================= -->

    <script src="{{ asset('js/music.js') }}"></script>

    <script src="{{ asset('js/gift.js') }}"></script>
    
    <script src="{{ asset('js/footer.js') }}"></script>

    <!-- ======================================
        GSAP
    ======================================= -->

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

    <!-- ======================================
         GALLERY
    ======================================= -->

    <script src="{{ asset('js/gallery/gallery.js') }}"></script>
    <script src="{{ asset('js/wish/load-more.js') }}"></script>
    <script src="{{ asset('js/wish/summary-counter.js') }}"></script>
    <script src="{{ asset('js/wish/submit.js') }}"></script>
    

    <!-- ======================================
         AOS
    ======================================= -->

    <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

    <script>
        document.addEventListener("DOMContentLoaded", () => {

            AOS.init({

                duration: 900,

                easing: "ease-out-cubic",

                once: true,

                offset: 60,

                mirror: false

            });

        });
    </script>

</body>

</html>
