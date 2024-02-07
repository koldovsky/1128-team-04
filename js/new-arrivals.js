const slides = [
    '<article class="arrivals__item">\
      <a href="new-arrivals-catalouge.html"><img class="arrivals__item-picture" width="421" src="img/bluecros.jpg" alt="Blue Sneakers" /></a>\
      <h3 class="arrivals__item-title">\
        <a href="new-arrivals-catalouge.html" class="arrivals__item-title-link">Puma Textile Running Shoes</a>\
      </h3>\
      <p class="arrivals__item-price">$62.00</p>\
      <button type="button" class="arrivals__item-button">Add to Cart</button>\
    </article>',
    '<article class="arrivals__item">\
      <img class="arrivals__item-picture" width="421" src="img/bluejacket.jpg" alt="Blue Jacket" />\
      <h3 class="arrivals__item-title">Nike Winter Jacket in Blue</h3>\
      <p class="arrivals__item-price">$85.00</p>\
      <button type="button" class="arrivals__item-button">Add to Cart</button>\
    </article>',
    '<article class="arrivals__item">\
      <img class="arrivals__item-picture" width="421" src="img/blacksneakers.jpg" alt="Black Trainers" />\
      <h3 class="arrivals__item-title">Adidas Black Trainers</h3>\
      <p class="arrivals__item-price">$60.00</p>\
      <button type="button" class="arrivals__item-button">Add to Cart</button>\
    </article>',
    '<article class="arrivals__item">\
      <img class="arrivals__item-picture" width="421" src="img/redjacket.jpg" alt="Red Jacket" />\
      <h3 class="arrivals__item-title">Reebok Red Duster</h3>\
      <p class="arrivals__item-price">$60.00</p>\
      <button type="button"class="arrivals__item-button" >Add to Cart</button>\
    </article>',
    '<article class="arrivals__item">\
      <img class="arrivals__item-picture" width="421" src="img/blackcros.jpg" alt="Black Sneakers" />\
      <h3 class="arrivals__item-title">Asics Jordan 2000</h3>\
      <p class="arrivals__item-price">$200.00</p>\
      <button type="button" class="arrivals__item-button">Add to Cart</button>\
    </article>'
];

let slideIdx = 0;

const slideContainer = document.querySelector('.arrivals__items');

function renderSlide() {
    slideContainer.innerHTML = slides[slideIdx];
    if (window.matchMedia('(min-width: 768px)').matches ) {
      const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.matchMedia('(min-width: 980px)').matches) {
        const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
        if (window.matchMedia('(min-width: 990px)').matches) {
          const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
          slideContainer.innerHTML += slides[fourthSlideIdx];
          }
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

const btnNext = document.querySelector('.arrivals__carousel-button--next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.arrivals__carousel-button--previous');
btnPrev.addEventListener('click', prevSlide);

renderSlide();

window.addEventListener('resize', renderSlide);

