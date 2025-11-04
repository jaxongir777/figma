AOS.init();
AOS.init({
  duration: 1000,
  once: true,
});
// Burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Counter animation
const counters = document.querySelectorAll('.count');
const speed = 200;

const animateCounters = () => {
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(update, 20);
      } else {
        counter.innerText = target >= 1000 ? (target / 1000) + 'K' : target;
      }
    };
    update();
  });
};

// Animate on scroll
window.addEventListener('scroll', () => {
  const section = document.querySelector('.about');
  const top = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (top < windowHeight - 100) {
    animateCounters();
  }
});
