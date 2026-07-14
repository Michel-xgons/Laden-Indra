/* ==================================================
   GALLERY
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const galleryItems = document.querySelectorAll(".gallery-item");

    const lightbox = document.getElementById("galleryLightbox");

    const preview = document.getElementById("galleryPreview");

    const btnClose = document.getElementById("galleryClose");

    const btnPrev = document.getElementById("galleryPrev");

    const btnNext = document.getElementById("galleryNext");

    const current = document.getElementById("galleryCurrent");

    const total = document.getElementById("galleryTotal");

    let currentIndex = 0;

    const images = [];

    galleryItems.forEach((item,index)=>{

        const img = item.querySelector("img");

        images.push(img.src);

        item.addEventListener("click",()=>{

            currentIndex=index;

            openLightbox();

        });

    });

    total.textContent=images.length;

    function openLightbox(){

        preview.src=images[currentIndex];

        current.textContent=currentIndex+1;

        lightbox.classList.add("active");

        document.body.style.overflow="hidden";

    }

    function closeLightbox(){

        lightbox.classList.remove("active");

        document.body.style.overflow="";

    }

    function nextImage(){

        currentIndex++;

        if(currentIndex>=images.length){

            currentIndex=0;

        }

        preview.src=images[currentIndex];

        current.textContent=currentIndex+1;

    }

    function prevImage(){

        currentIndex--;

        if(currentIndex<0){

            currentIndex=images.length-1;

        }

        preview.src=images[currentIndex];

        current.textContent=currentIndex+1;

    }

    btnClose.addEventListener("click",closeLightbox);

    btnNext.addEventListener("click",nextImage);

    btnPrev.addEventListener("click",prevImage);

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            closeLightbox();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("active")) return;

        if(e.key==="Escape") closeLightbox();

        if(e.key==="ArrowRight") nextImage();

        if(e.key==="ArrowLeft") prevImage();

    });

    /* ==========================
       Swipe Mobile
    ========================== */

    let startX=0;

    preview.addEventListener("touchstart",(e)=>{

        startX=e.touches[0].clientX;

    });

    preview.addEventListener("touchend",(e)=>{

        const endX=e.changedTouches[0].clientX;

        const diff=startX-endX;

        if(diff>50){

            nextImage();

        }

        if(diff<-50){

            prevImage();

        }

    });

});