var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  mousewheel: {
    releaseOnEdges: true,
    thresholdDelta: 10,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      const currentSlide = this.activeIndex + 1;
      document.querySelector(".slide-info").textContent = `0${currentSlide} `;
    },
  },
});

document.querySelector(".slide-info").textContent = `01`;
