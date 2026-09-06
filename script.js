// 1. Animation d'apparition au scroll
const elements = document.querySelectorAll('.projet, .skill-card, .stat-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// 2. Copier l'email en 1 clic
// const emailLink = document.querySelector('a[href^="mailto"]');
if (emailLink) {
  emailLink.addEventListener('click', (e) => {
    e.preventDefault();
    const emailText = "chedrackgnambode5@gmail.com";
    navigator.clipboard.writeText(emailText);
    alert("Email copié : chedrackgnambode5@gmail.com ✅");
  });
}

// 3. Smooth scroll pour la navbar
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

console.log("Portfolio Pro de Faith chargé ✅");
