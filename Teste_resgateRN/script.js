let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function moveCarousel(direction) {
    showSlide(currentSlide + direction);
}

// Configura o carrossel para avançar automaticamente
setInterval(() => {
    moveCarousel(1);
}, 5000); // Troca a cada 5 segundos
