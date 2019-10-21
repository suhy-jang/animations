
const imageSlide = (() => {
  let currentImage = 1;
  const imageSources = [
    './assets/images/wine-1761613_640.jpg',
    './assets/images/grapes-2656259_640.jpg',
    './assets/images/red-wine-2443699_640.jpg',
    './assets/images/grapes-1659118_640.jpg',
    './assets/images/sparkling-wine-1030754_640.jpg',
    './assets/images/purple-grapes-553464_640.jpg',
  ];
  const getImage = (dx) => {
    if (((currentImage + dx) < 0) || ((currentImage + dx) >= imageSources.length)) {
      return;
    }
    const imageTag = document.createElement('img');
    const source = imageSources[currentImage + dx];
    imageTag.src = source;
    imageTag.alt = source.split('/')[3].split('-')[0];
    imageTag.classList.add('card-image');
    return imageTag;
  }

  const drawArrow = () => {
    const container = document.createElement('div');
    container.classList.add('card-overlay', 'card-overlay-main');

    const leftArrow = document.createElement('i');
    leftArrow.classList.add('fas', 'fa-arrow-left');
    const rightArrow = document.createElement('i');
    rightArrow.classList.add('fas', 'fa-arrow-right');
    container.appendChild(leftArrow);
    container.appendChild(rightArrow);

    return container;
  }

  const getEachFrame = (option) => {
    const container = document.createElement('div');
    container.classList.add('frame', 'd-inline-block');
    let image;
    if (option === 'left') {
      image = getImage(-1);
    } else if (option === 'right') {
      image = getImage(1);
    } else {
      image = getImage(0);
    }
    if (image) container.appendChild(image);
    return container;
  }

  const leftFrame = () => {
    return getEachFrame('left');
  }

  const rightFrame = () => {
    return getEachFrame('right');
  }

  const mainFrame = () => {
    return getEachFrame('main');
  }

  const getFrame = () => {
    const outerFrame = document.createElement('div');
    outerFrame.classList.add('container-outer', 'card', 'overflow-x-hidden', 'mx-auto');

    const innerFrame = document.createElement('div');
    innerFrame.classList.add('container-inner', 'content-box', 'd-flex');

    innerFrame.appendChild(leftFrame());
    innerFrame.appendChild(mainFrame());
    innerFrame.appendChild(rightFrame());

    outerFrame.appendChild(innerFrame);
    outerFrame.appendChild(drawArrow());
    return outerFrame;
  }

  const updateFrame = (dx) => {
    if (((currentImage + dx) < 0) || ((currentImage + dx) >= imageSources.length)) {
      return;
    }
    currentImage += dx;
    const frame = document.querySelector('.content .container-inner');
    while(frame.firstChild) {
      frame.removeChild(frame.firstChild);
    }
    frame.appendChild(leftFrame());
    frame.appendChild(mainFrame());
    frame.appendChild(rightFrame());
  }

  const createCircle = (option) => {
    let circle = document.createElement('div');
    circle.classList.add('circle', `circle-${option}`);
    return circle;
  }

  const dotSlide = () => {
    const container = document.createElement('div');
    container.classList.add('mx-auto', 'circle-bound');
    container.appendChild(createCircle('side'));
    container.appendChild(createCircle('main'));
    container.appendChild(createCircle('side'));
    return container;
  }

  const arrowMovement = () => {
    const leftArrow = document.querySelector('.fa-arrow-left');
    const rightArrow = document.querySelector('.fa-arrow-right');
    leftArrow.addEventListener('click', () => {
      updateFrame(-1);
    });
    rightArrow.addEventListener('click', () => {
      updateFrame(1);
    });
  };

  const dotMovement = () => {
    const [leftDot, rightDot] = document.querySelectorAll('.circle-side');
    leftDot.addEventListener('click', () => {
      updateFrame(-1);
    });
    rightDot.addEventListener('click', () => {
      updateFrame(1);
    });
  };

  const createEvents = () => {
    arrowMovement();
    dotMovement();
  }

  const render = () => {
    const mainContainer = document.querySelector('.content');
    mainContainer.appendChild(getFrame());
    mainContainer.appendChild(dotSlide());
    createEvents();
  }

  return { render };
})();


imageSlide.render();
