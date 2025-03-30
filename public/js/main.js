document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    carousel.addEventListener('wheel', (e) => {
      if (e.deltaY > 0) {
        carousel.scrollLeft += 100;
      } else {
        carousel.scrollLeft -= 100;
      }
    });
  });
});
