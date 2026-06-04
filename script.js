const body = document.body;
const menuButton = document.querySelector('.header__menu-button');
const menuPanel = document.querySelector('#site-menu');
const menuClose = document.querySelector('.menu-panel__close');
const heroImages = document.querySelectorAll('[data-hero-depth]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const setMenuState = (isOpen) => {
  if (!menuButton || !menuPanel) {
    return;
  }

  body.classList.toggle('menu-is-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuPanel.setAttribute('aria-hidden', String(!isOpen));
};

if (menuButton && menuPanel) {
  menuButton.addEventListener('click', () => {
    setMenuState(!body.classList.contains('menu-is-open'));
  });
}

if (menuClose) {
  menuClose.addEventListener('click', () => setMenuState(false));
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuState(false);
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));

    if (!target) {
      return;
    }

    event.preventDefault();
    setMenuState(false);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

if (heroImages.length && !prefersReducedMotion) {
  let ticking = false;

  const updateHeroDepth = () => {
    const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);

    heroImages.forEach((image) => {
      const depth = Number(image.dataset.heroDepth || 0);
      image.style.setProperty('--hero-shift', `${progress * depth * 160}px`);
    });

    ticking = false;
  };

  const requestHeroDepth = () => {
    if (ticking) {
      return;
    }

    window.requestAnimationFrame(updateHeroDepth);
    ticking = true;
  };

  updateHeroDepth();
  window.addEventListener('scroll', requestHeroDepth, { passive: true });
}

const revealItems = document.querySelectorAll(
  '.manifesto__inner, .metodo-fvs__intro, .metodo-fvs__steps article, .gramado__media, .gramado__content, .experiencia__content, .experiencia__moment, .section-heading, .empreendimento, .projeto-detalhe__intro, .projeto-detalhe__layout, .projeto-detalhe__proofs figure, .tipologias__intro, .tipologia-card, .decisao__intro, .decisao__card, .decisao__notes, .seguranca-decisao__intro, .seguranca-decisao__grid article, .galeria__intro, .galeria__item, .cta-consultivo .container'
);

revealItems.forEach((item) => {
  item.setAttribute('data-reveal', '');
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.12
  });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
