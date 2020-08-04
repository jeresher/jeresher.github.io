const carouselSlide = document.querySelector('.carousel-slide');
const carouselElement = document.querySelectorAll('.carousel-slide div');

const backButton = document.querySelector("#backButton")
const nextButton = document.querySelector("#nextButton")

let counter = 0;
const size = carouselElement[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextButton.addEventListener('click', () => {
    if (counter >= carouselElement.length-1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

backButton.addEventListener('click', () => {
    if (counter <= 0 ) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})