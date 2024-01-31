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
    slideContainer.innerHTML = slides[slideIdx];
    if (window.matchMedia('(min-width: 768px)').matches ) {
        const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 980px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    renderSlide();
}

function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    renderSlide();
}

setInterval(nextSlide, 3000);

const btnNext = document.querySelector('.product-carousel__button-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.product-carousel__button-prev');
btnPrev.addEventListener('click', prevSlide);

renderSlide();

window.addEventListener('resize', renderSlide);