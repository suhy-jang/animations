const imageSources = [
  './assets/images/wine-1761613_640.jpg',
  './assets/images/grapes-2656259_640.jpg',
  './assets/images/red-wine-2443699_640.jpg',
  './assets/images/grapes-1659118_640.jpg',
  './assets/images/sparkling-wine-1030754_640.jpg',
  './assets/images/purple-grapes-553464_640.jpg',
];

const leftArrow = document.querySelector('.fa-arrow-left');
const rightArrow = document.querySelector('.fa-arrow-right');
const innerFrame = document.querySelector('.container-inner');
const numOfImage = 6;

const updateSlideByDx = (inSlide, dx) => {
  // console.log('update', inSlide, dx);
  let updateSlide = inSlide;
  if (updateSlide + dx < 0) {
    updateSlide += numOfImage;
  } else if (updateSlide + dx >= numOfImage) {
    updateSlide -= numOfImage;
  }
  return updateSlide + dx;
}

const swapMainAndSide = ({ newMainId }) => {
  const originalMain = document.querySelector('.circle-main');
  originalMain.classList.remove('circle-main');
  originalMain.classList.add('circle-side');
  
  const newMain = document.getElementById(`circle-${newMainId}`);
  newMain.classList.remove('circle-side');
  newMain.classList.add('circle-main');
}

let slide = 0;
const doSlide = ({ newSlide, dx }) => {
  if (dx) slide = updateSlideByDx(slide, dx);
  if (newSlide) slide = newSlide;
  swapMainAndSide({ newMainId: slide });

  innerFrame.style.transform = `translateX(calc(calc(-100% * ${slide}) / ${numOfImage}))`;
}

const nextScreen = setInterval(() => { doSlide({ dx: 1 }) }, 5000);

leftArrow.addEventListener('click', () => {
  doSlide({ dx: -1 });
});

rightArrow.addEventListener('click', () => {
  doSlide({ dx: 1 });
});

const dots = document.querySelectorAll('.circle');
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    doSlide({ newSlide: Number(dot.id.split('-')[1]) });
  })
})
