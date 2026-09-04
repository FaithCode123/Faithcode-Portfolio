// 1. Animation d'apparition des projets au scroll
const projets = document.querySelectorAll('.projet');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Prépare l'animation
projets.forEach(projet => {
  projet.style.opacity = 0;
  projet.style.transform = 'translateY(20px)';
  projet.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(projet);
});

// 2. Copier l'email en 1 clic
const email = document.querySelector('#contact p:nth-of-type(2)');

if (email) {
  email.style.cursor = 'pointer';
  email.title = "Cliquer pour copier";
  
  email.addEventListener('click', () => {
    const emailText = "chedrackgnambode5@gmail.com";
    navigator.clipboard.writeText(emailText);
    
    // Petit message de confirmation
    const originalText = email.innerText;
    email.innerText = "Email copié ! ✅";
    email.style.color = "var(--primary)";
    
    setTimeout(() => {
      email.innerText = originalText;
      email.style.color = "var(--muted)";
    }, 2000);
  });
}

// 3. Smooth scroll pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

console.log("Portfolio de Faith chargé ✅");
