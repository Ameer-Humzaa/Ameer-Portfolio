const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
function animateCircularSkills() {
  const cards = document.querySelectorAll('.circle-card');
  const section = document.querySelector('.skills-circle-section');
  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (sectionTop < triggerPoint) {
    cards.forEach(card => {
      const percent = card.getAttribute('data-percent');
      const circle = card.querySelector('circle:last-child');
      const radius = 45;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (percent / 100) * circumference;

      circle.style.strokeDashoffset = offset;
    });

    window.removeEventListener('scroll', animateCircularSkills);
  }
}

window.addEventListener('scroll', animateCircularSkills);
