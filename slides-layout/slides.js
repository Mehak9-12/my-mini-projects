const allSlides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#pbtn');
const nextBtn = document.querySelector('#nbtn');
const allDots = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = allSlides.length;
allSlides.forEach((_, i) => {
  //dynamic add of dots
  //because we don't need first argument so we use underscore
  const dotsHtml = `<button class="dotsDot" data-slide="${i}"></button>`;
  allDots.insertAdjacentHTML('beforeend', dotsHtml);
});
const activateDot = (slide) => {
  const eachDot = document.querySelectorAll('.dotsDot');
  console.log(eachDot);

  eachDot.forEach((d) => {
    console.log('abc');
    d.classList.remove('active');
  });
  document
    .querySelector(`.dotsDot[data-slide='${slide}']`)
    .classList.add('active');
};

function slides(slide) {
  allSlides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
}
const prevSlide = () => {
  if (curSlide <= 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  slides(curSlide);
  activateDot(curSlide);
};
const nextSlide = () => {
  if (curSlide >= maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides(curSlide);
  activateDot(curSlide);
};

allDots.addEventListener('click', function (e) {
  const dotClicked = e.target.closest('.dotsDot');

  if (!dotClicked) return;

  curSlide = dotClicked.dataset.slide;
  slides(curSlide);
  activateDot(curSlide);
});
slides(0);
activateDot(0);
document.addEventListener('keydown', function (e) {
  //keydown means any key
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
});
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
// setInterval(nextSlide, 2000);
