document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden-section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible-section");
            }
        });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));

    const divs = document.querySelectorAll(".hidden-div");
    const divObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible-div");
            }
        });
    }, { threshold: 0.2 });
    divs.forEach(div => divObserver.observe(div));
});

const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.shoe-card');
const infoPanel = document.querySelector('.info-panel');
const bodyContainer = document.querySelector('.body_container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let currentIndex = 0;

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + (window.innerWidth >= 768 ? 20 : 10);
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    nextBtn.disabled = currentIndex === cards.length - 1;
    prevBtn.disabled = currentIndex === 0;
    infoPanel.classList.remove('active');
    setTimeout(() => infoPanel.classList.add('active'), 50);

    bodyContainer.style.background = cards[currentIndex].dataset.bg;

    const infos = [
        {name: "Produit Molige 1", price: "10,99€", desc: "Une confiture de qualité supérieure", rating: "★★★★☆ (124 avis)", emailSubject: "Commande Produit Molige 1"},
        {name: "Produit Molige 2", price: "2,50€", desc: "Une levure de qualité supérieure", rating: "★★★★★ (89 avis)", emailSubject: "Commande Produit Molige 2"},
        {name: "Produit Molige 3", price: "7,40€", desc: "Un sucre glace de qualité supérieure", rating: "★★★★☆ (156 avis)", emailSubject: "Commande Produit Molige 3"},
        {name: "Produit Molige 4", price: "0,19€", desc: "Un sirop à la menthe de qualité supérieure", rating: "★★★★☆ (124 avis)", emailSubject: "Commande Produit Molige 4"},
        {name: "Produit Molige 5", price: "3,99€", desc: "Un sirop grenadine de qualité supérieure", rating: "★★★★★ (89 avis)", emailSubject: "Commande Produit Molige 5"},
        {name: "Produit Molige 6", price: "7,80€", desc: "Un sirop citron de qualité supérieure", rating: "★★★★☆ (156 avis)", emailSubject: "Commande Produit Molige 6"},
        {name: "Produit Molige 7", price: "14,99€", desc: "Une levure chimique de qualité supérieure", rating: "★★★★★ (89 avis)", emailSubject: "Commande Produit Molige 7"},
        {name: "Produit Molige 8", price: "12,99€", desc: "Un sucre vanillé de qualité supérieure", rating: "★★★★☆ (156 avis)", emailSubject: "Commande Produit Molige 8"}
    ];

    infoPanel.innerHTML = `
        <h2>${infos[currentIndex].name}</h2>
        <div class="price">${infos[currentIndex].price}</div>
        <div class="description">${infos[currentIndex].desc}</div>
        <div class="reviews">${infos[currentIndex].rating}</div>
        <button class="order-btn"><a href="mailto:djeukwajunior@icloud.com?subject=${encodeURIComponent(infos[currentIndex].emailSubject)}&body=Bonjour,%20je%20souhaite%20commander%20${encodeURIComponent(infos[currentIndex].name)}.">Commander</a></button>
    `;
}

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
currentIndex--;
        updateSlider();
    }
});

let startX;
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 50 && currentIndex < cards.length - 1) {
        currentIndex++;
    } else if (startX < endX - 50 && currentIndex > 0) {
        currentIndex--;
    }
    updateSlider();
});

updateSlider();