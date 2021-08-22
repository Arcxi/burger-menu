const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('navigation--active');
}

burger.addEventListener('click', handleClick);
