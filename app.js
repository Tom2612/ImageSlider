const container = document.querySelector('.container');
const images = document.querySelector('.images');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const carouselImages = document.querySelectorAll('.images img');

let counter = 1;
const size = carouselImages[0].clientWidth;

images.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length-1) return;
    images.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    images.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    images.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    images.style.transform = `translateX(${-size * counter}px)`;
});

images.addEventListener('transitionend', () => {
    if (carouselImages[counter].id ==='lastClone'){
        images.style.transition = 'none';
        counter = carouselImages.length - 2;
        images.style.transform = `translateX(${-size * counter}px)`;
    }
    if (carouselImages[counter].id ==='firstClone'){
        images.style.transition = 'none';
        counter = carouselImages.length - counter;
        images.style.transform = `translateX(${-size * counter}px)`;
    }
})