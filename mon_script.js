// Initialisation du slider Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true, // Faire défiler en boucle
    autoplay: {
        delay: 3000, // Change l'image toutes les 3 secondes
        disableOnInteraction: false, // Continue l'auto-slide même après interaction
    },
    slidesPerView: 1, // Affiche une image à la fois
    spaceBetween: 20, // Espacement entre les images
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

//fonctionnement de la recherche instantanne du header
window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
 
function toggleMenu(){
    const tmenutoggle = document.queryselector('.menutoggle');
    const navbar = document.querySelector('.navbar');
    menutoggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

let currentIndex = 0;
    const slides = document.querySelectorAll(".banniere img");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); 