// Отримуємо посилання на елементи DOM
const womenLink = document.getElementById("women-link");
const menLink = document.getElementById("men-link");
const shoesLink = document.getElementById("shoes-link");

const womenClothes = document.querySelector(".main-collection__column-women");
const menClothes = document.querySelector(".main-collection__column-men");
const shoes = document.querySelector(".main-collection__column-shoes");

// Функція для зміни активного стану
function setActiveItem(activeItem) {
  womenLink.classList.remove("active-item");
  menLink.classList.remove("active-item");
  shoesLink.classList.remove("active-item");

  if (activeItem === "women") {
    womenLink.classList.add("active-item");
  } else if (activeItem === "men") {
    menLink.classList.add("active-item");
  } else if (activeItem === "shoes") {
    shoesLink.classList.add("active-item");
  }
}

// Функція для відображення відповідних блоків
function showBlock(blockToShow) {
  womenClothes.style.display = "none";
  menClothes.style.display = "none";
  shoes.style.display = "none";

  if (blockToShow === "women") {
    womenClothes.style.display = "flex";
  } else if (blockToShow === "men") {
    menClothes.style.display = "flex";
  } else if (blockToShow === "shoes") {
    shoes.style.display = "flex";
  }
}

// Додаємо обробники подій для кліку на посилання
womenLink.addEventListener("click", function (e) {
  e.preventDefault();

  setActiveItem("women");
  showBlock("women");
});

menLink.addEventListener("click", function (e) {
  e.preventDefault();

  setActiveItem("men");
  showBlock("men");
});

shoesLink.addEventListener("click", function (e) {
  e.preventDefault();

  setActiveItem("shoes");
  showBlock("shoes");
});

// Встановлюємо стан за замовчуванням
setActiveItem("women");
showBlock("women");