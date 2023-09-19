const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1048: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.service-section-slider-pagination',
    bulletClass: 'service-section-slider-pagination__button',
    bulletActiveClass: 'service-section-slider-pagination__button--active',
  },
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
  watchOverflow: false,
});
