/* =============================================
   MAIN.JS — DOM Logic, Renders, Observers
   Thadeus Hill AI Technical Coach Application
   ============================================= */

/* ─── Render Builds Grid ─── */
(function renderBuilds() {
  const grid = document.getElementById('builds-grid');
  if (!grid || !Array.isArray(builds)) return;

  builds.forEach((b, i) => {
    const card = document.createElement('div');
    card.className = 'build-card reveal';
    card.style.setProperty('--card-accent', b.accent);
    card.style.transitionDelay = `${i * 0.06}s`;

    card.innerHTML = `
      <div class="build-card-top">
        <div class="build-icon">${b.icon}</div>
        <div class="build-type-badge" style="color:${b.accent}">${b.type}</div>
      </div>
      <div class="build-title">${b.title}</div>
      <div class="build-desc">${b.desc}</div>
      <div class="build-stack">
        ${b.stack.map(s => `<span class="build-stack-item">${s}</span>`).join('')}
      </div>
      <div class="build-status">
        <span class="build-status-dot" style="background:${b.accent}"></span>
        ${b.status}
      </div>
    `;

    grid.appendChild(card);
  });
})();

/* ─── Reveal on Scroll (IntersectionObserver) ─── */
(function initReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

/* ─── Nav Border on Scroll ─── */
(function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 60
      ? 'rgba(0,245,196,.2)'
      : 'rgba(255,255,255,.07)';
  }, { passive: true });
})();

/* ─── Smooth Scroll for Anchor Links ─── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    });
  });
})();
