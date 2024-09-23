document.addEventListener('DOMContentLoaded', () => {
const productContainer = document.querySelector('.product-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.nxt-btn');
const productCards = document.querySelectorAll('.product-card');

let cardWidth = productCards[0].offsetWidth; // Assuming all cards have the same width
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % productCards.length;
    productContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + productCards.length) % productCards.length;
    productContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});
const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu button');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});
});