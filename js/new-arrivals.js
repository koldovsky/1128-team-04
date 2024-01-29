const slides = document.querySelector('.arrivals__item');

let slideIdx = 0;

const slideContainer = document.querySelector('.arrivals__item');

function renderSlide() {
    slideContainer.innerHTML = slides[slideIdx];
}

function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    renderSlide();
}

function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    renderSlide();
}

const btnPrev = document.querySelector('.arrivals__carousel-button--previous');
btnPrev.addEventListener('click', prevSlide);

const btnNext = document.querySelector('.arrivals__carousel-button--next');
btnNext.addEventListener('click', nextSlide);

