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
let slide = 0;

const calculateTransform = () => {
  return `translateX(calc(calc(-100% * ${slide}) / ${numOfImage}))`;
}

const [leftDot, rightDot] = document.querySelectorAll('.circle-side');

[leftArrow, leftDot].forEach(e => {
  e.addEventListener('click', () => {
    if (slide - 1 >= 0) {
      slide -= 1;
      innerFrame.style.transform = calculateTransform();
    }
  });
});

[rightArrow, rightDot].forEach(e => {
  e.addEventListener('click', () => {
    if (slide + 1 < numOfImage) {
      slide += 1;
      innerFrame.style.transform = calculateTransform();
    }
  });
});
