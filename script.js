'use strict';

const hamburger = document.querySelector('.menu__hamburger');
const menuList =document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuList.classList.toggle('active');
});

document.querySelectorAll('.menu__list-item').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuList.classList.remove('active');
}));