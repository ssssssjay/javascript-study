const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

console.log(carouselImages);

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener('click', () => {
  // 무한 클릭시 버그가 안나도록 해주는 코드
  if (counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = 'all 0.4s ease-in-out'
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  // 무한 클릭시 버그가 안나도록 해주는 코드
  if (counter <= 0) return;
  carouselSlide.style.transition = 'all 0.4s ease-in-out'
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


carouselSlide.addEventListener('transitionend', () => {
  // console.log('transitionend');
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length -2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})