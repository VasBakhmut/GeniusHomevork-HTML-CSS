const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const linkBtnClose = document.querySelector('.link-btn-close');
const linkBtnClose1 = document.querySelector('.link-btn-close1');
const linkBtnClose2 = document.querySelector('.link-btn-close2');
const linkBtnClose3 = document.querySelector('.link-btn-close3');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () => document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
linkBtnClose.addEventListener('click', toggleMenu);
linkBtnClose1.addEventListener('click', toggleMenu);
linkBtnClose2.addEventListener('click', toggleMenu);
linkBtnClose3.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
