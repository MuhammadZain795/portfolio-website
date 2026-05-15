document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') links.classList.remove('open');
});

const sections = document.querySelectorAll('.section, .hero');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.08 }
);

sections.forEach((s) => {
  s.style.opacity = '0';
  s.style.transform = 'translateY(20px)';
  s.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(s);
});
