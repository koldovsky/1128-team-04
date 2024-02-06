const slides = [
    '<div><img src="img/brands-carousel-newbalance.svg" alt="New Balance"></div>',
    '<div><img src="img/brands-carousel-reebok.svg" alt="Reebok"></div>',
    '<div><img src="img/brands-carousel-adidas.svg" alt="Adidas"></div>',
    '<div><img src="img/brands-carousel-nike.svg" alt="Nike"></div>',
    '<div><img src="img/brands-carousel-asics.svg" alt="Asics"></div>'
];

let slideIdx = 0;
const slideContainer = document.querySelector('.brands__carousel-slides');

function renderSlide() {
    slideContainer.innerHTML = '';
    const slidesToShow = getSlidesToShow();

    for (let i = 0; i < slidesToShow; i++) {
        const index = (slideIdx + i) % slides.length;
        // Wrap the image in a div with the class for styling
        const slideMarkup = `<div class="brands__carousel-slides-item">${slides[index]}</div>`;
        slideContainer.innerHTML += slideMarkup;
    }
}

function getSlidesToShow() {
    if (window.matchMedia('(min-width: 992px)').matches) {
        return 4; // Show 4 slides on screens wider than 992px
    } else if (window.matchMedia('(min-width: 768px)').matches) {
        return 2; // Show 2 slides on screens wider than 768px
    } else {
        return 1; // Default to 1 slide on smaller screens
    }
}

function nextSlide() {
    slideIdx = (slideIdx + 1) % slides.length;
    renderSlide();
}

function prevSlide() {
    slideIdx = (slideIdx - 1 + slides.length) % slides.length;
    renderSlide();
}

setInterval(nextSlide, 3000);

const btnNext = document.querySelector('.brands__carousel-btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.brands__carousel-btn-prev');
btnPrev.addEventListener('click', prevSlide);

renderSlide();

window.addEventListener('resize', renderSlide);