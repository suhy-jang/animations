const leftArrow = document.querySelector('.fa-arrow-left');
const rightArrow = document.querySelector('.fa-arrow-right');
const innerFrame = document.querySelector('.container-inner');
const numOfImage = 6;

const updateSlideByDx = (inSlide, dx) => {
  let updateSlide = inSlide;
  if (updateSlide + dx < 0) {
    updateSlide += numOfImage;
  } else if (updateSlide + dx >= numOfImage) {
    updateSlide -= numOfImage;
  }
  return updateSlide + dx;
};

const swapMainAndSide = ({ newMainId }) => {
  const originalMain = document.querySelector('.circle-main');
  originalMain.classList.remove('circle-main');
  originalMain.classList.add('circle-side');

  const newMain = document.getElementById(`circle-${newMainId}`);
  newMain.classList.remove('circle-side');
  newMain.classList.add('circle-main');
};

let slide = 0;
const doSlide = ({ newSlide, dx }) => {
  if (dx) slide = updateSlideByDx(slide, dx);
  if (newSlide) slide = newSlide;
  swapMainAndSide({ newMainId: slide });

  innerFrame.style.transform = `translateX(calc(calc(-100% * ${slide}) / ${numOfImage}))`;
};

const nextScreen = setInterval(() => { doSlide({ dx: 1 }); }, 5000);

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
  });
});
