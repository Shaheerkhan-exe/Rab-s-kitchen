
window.addEventListener("scroll", function () {
    document.querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
});
$(document).ready(function () {
    // Isotope Initialize
    var $grid = $('.grid').isotope({
        itemSelector: '.all',
        layoutMode: 'fitRows'
    });

    // Filter Buttons logic
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        });
    });
});
// Loader ko hide karne ke liye
window.addEventListener('load', function() {
    var loader = document.getElementById('preloader');
    loader.style.display = 'none';
});

// Swiper ko responsive banane ke liye (Init code mein ye add karein)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Mobile pe 1 slide
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2, // Desktop/Tablet pe 2 slides
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});