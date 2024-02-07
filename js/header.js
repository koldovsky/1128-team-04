/*
const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__nav-menu");

btnSub.addEventListener("click", () => {
    body.classList.toggle("fixed");
    header.classList.toggle("responsive");
})

navLinks.addEventListener("click", () => {
    body.classList.remove("fixed");
    header.classList.remove("responsive");
