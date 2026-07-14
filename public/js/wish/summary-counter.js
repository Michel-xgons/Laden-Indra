document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".summary-card h3");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        });

    },{
        threshold:0.5
    });

    cards.forEach(card=>observer.observe(card));

    function animateCounter(element){

        const target = parseInt(element.textContent);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 40));

        const timer = setInterval(()=>{

            current += increment;

            if(current >= target){

                current = target;

                clearInterval(timer);

            }

            element.textContent = current;

        },20);

    }

});