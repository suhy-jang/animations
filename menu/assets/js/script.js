const ul = document.querySelector('.navbar .dropdown-menu');
let li = document.createElement('li');
li.textContent = 'first list';
li.classList.add('d-none');
ul.appendChild(li);

li = document.createElement('li');
li.textContent = 'second list';
li.classList.add('d-none');
ul.appendChild(li);

document.querySelector('.dropdown-toggle').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.dropdown-toggle+.dropdown-menu').querySelectorAll('li').forEach(li => {
    li.classList.toggle('d-none');
  });
});


const toggleBtn = document.querySelector('button.navbar-toggler');

let menuIconChild = document.createElement('div');
menuIconChild.classList.add('bar1');
toggleBtn.appendChild(menuIconChild);

menuIconChild = document.createElement('div');
menuIconChild.classList.add('bar2');
toggleBtn.appendChild(menuIconChild);

menuIconChild = document.createElement('div');
menuIconChild.classList.add('bar3');
toggleBtn.appendChild(menuIconChild);

const menuList = document.querySelector('.navbar-toggler+.navbar-collapse');
let originalDisplay;

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('change');
  menuList.classList.toggle('d-none');
  originalDisplay = menuList.classList.contains('d-none');
});

window.addEventListener('load', () => {
  if (document.body.clientWidth >= '992') {
    menuList.classList.remove('d-none');
  } else {
    menuList.classList.add('d-none');
  }
});

window.addEventListener('resize', () => {
  if (document.body.clientWidth >= '992') {
    if(!originalDisplay) originalDisplay = menuList.classList.contains('d-none');
    menuList.classList.remove('d-none');
  } else {
    if(originalDisplay) menuList.classList.add('d-none');
    originalDisplay = null;
  }
});
