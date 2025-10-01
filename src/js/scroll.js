window.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    duration: 0.75,  // Скорость
    easing: (t) => t * (2 - t),  // Инерция
    smooth: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const animatedElems = document.querySelectorAll(
    '.scroll-anim'
  );

  animatedElems.forEach(elem => {
    elem.style.opacity = '0';
    elem.style.transform = 'translateY(60px)';
    elem.style.transition = 'all 1s ease';
  });

  function animateOnScroll() {
    animatedElems.forEach(elem => {
      const rect = elem.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85;

      if (isVisible) {
        elem.style.opacity = '1';
        elem.style.transform = 'translateY(0)';
      }
    });
  }

  lenis.on('scroll', animateOnScroll);
  animateOnScroll();

  console.log("скрипт scroll-bar/scroll.js работает!");
});
