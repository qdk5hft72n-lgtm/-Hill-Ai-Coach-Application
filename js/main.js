/* main.js — Nav behavior, scroll reveals, micro-interactions */

// ============ NAV SCROLL BEHAVIOR ============
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Highlight active nav link
  const sections = ['cover', 'resume', 'builds', 'learning'];
  let current = '';

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120) {
        current = id;
      }
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}, { passive: true });

// ============ SCROLL REVEAL ============
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08,
    rootMargin: '0px 0px -60px 0px',
  }
);

// Add reveal class to key elements and observe
function initReveal() {
  const targets = document.querySelectorAll(
    '.cover-layout, .resume-header, .resume-col, ' +
    '.learning-left, .learning-right, ' +
    '.section-meta, .builds-heading, .build-card'
  );

  targets.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Stagger resume cols
  document.querySelectorAll('.resume-col').forEach((col, i) => {
    col.style.transitionDelay = `${i * 0.12}s`;
  });

  // Stagger learning sections
  document.querySelectorAll('.learning-left, .learning-right').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.15}s`;
  });
}

// ============ SMOOTH NAV CLICK ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ============ ACTIVE NAV STYLE ============
const styleEl = document.createElement('style');
styleEl.textContent = `
  .nav-link.active {
    color: var(--teal);
    border-color: var(--border-bright);
    background: var(--teal-dim);
  }
`;
document.head.appendChild(styleEl);

// ============ SUBTLE HERO PARALLAX ============
const heroInner = document.querySelector('.hero-inner');
const heroGlow = document.querySelector('.hero-glow');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (heroInner && scrollY < window.innerHeight) {
    heroInner.style.transform = `translateY(${scrollY * 0.15}px)`;
    heroInner.style.opacity = 1 - scrollY / (window.innerHeight * 0.8);
  }
  if (heroGlow && scrollY < window.innerHeight) {
    heroGlow.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.08}px))`;
  }
}, { passive: true });

// ============ BUILD CARD HOVER GLOW ============
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.build-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
});
