(() => {
  const progressBar = document.querySelector('#scroll-progress-bar');
  const topButton = document.querySelector('.back-to-top');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navAnchors = [...document.querySelectorAll('.nav-link')];
  const sections = navAnchors.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const revealItems = document.querySelectorAll('[data-reveal]');

  // Reveal content as it enters the viewport; keep it visible if IO is unavailable.
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-revealed'));
  }

  const updateScrollUI = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    progressBar.style.width = `${Math.min(100, progress * 100)}%`;
    topButton.classList.toggle('is-visible', window.scrollY > 520);
  };
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.querySelectorAll('.footer-back, .scroll-cue').forEach((link) => {
    link.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  });

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navLinks.classList.toggle('is-open', !isOpen);
  });
  navAnchors.forEach((link) => link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));

  // Keep the underline on the section currently in view.
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach((link) => link.classList.toggle('is-active', link.hash === `#${entry.target.id}`));
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  document.querySelector('#current-year').textContent = new Date().getFullYear();

  // A small tactile flourish on the pinned note, without moving page content.
  const note = document.querySelector('.hero-note');
  note.addEventListener('click', () => note.classList.toggle('is-pinned'));
  note.setAttribute('role', 'button');
  note.setAttribute('tabindex', '0');
  note.setAttribute('aria-label', 'Toggle the learning note');
  note.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      note.classList.toggle('is-pinned');
    }
  });
})();
