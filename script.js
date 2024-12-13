function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const themeToggle = document.getElementById('theme-toggle');
  if (body.classList.contains('dark-theme')) {
      themeToggle.textContent = '☀️';
  } else {
      themeToggle.textContent = '🌙';
  }
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add animation to skills
const skillElements = document.querySelectorAll('.article-container article');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.5s ease-out forwards';
      }
  });
}, { threshold: 0.1 });

skillElements.forEach(el => observer.observe(el));