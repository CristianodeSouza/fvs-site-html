const body = document.body;
const menuButton = document.querySelector('.header__menu-button');
const menuPanel = document.querySelector('#site-menu');
const menuClose = document.querySelector('.menu-panel__close');
const menuLinks = document.querySelectorAll('.menu-panel__nav a');
const heroImages = document.querySelectorAll('[data-hero-depth]');
const heroVideo = document.querySelector('.hero__video[data-loop-src]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let smoothScroller = null;

const loadScript = (src) => new Promise((resolve, reject) => {
  const existingScript = document.querySelector(`script[src="${src}"]`);

  if (existingScript) {
    if (existingScript.dataset.loaded === 'true') {
      resolve();
      return;
    }

    existingScript.addEventListener('load', resolve, { once: true });
    existingScript.addEventListener('error', reject, { once: true });
    return;
  }

  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.dataset.motionVendor = 'lenis';

  script.addEventListener('load', () => {
    script.dataset.loaded = 'true';
    resolve();
  }, { once: true });

  script.addEventListener('error', reject, { once: true });
  document.head.appendChild(script);
});

const initLenis = async () => {
  if (prefersReducedMotion || smoothScroller || window.innerWidth < 768) {
    return;
  }

  try {
    await loadScript('https://unpkg.com/lenis@1.3.23/dist/lenis.min.js');

    if (!window.Lenis) {
      return;
    }

    smoothScroller = new window.Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      stopInertiaOnNavigate: true,
      prevent: (node) => node.closest('.menu-panel, .gallery-lightbox')
    });

    const raf = (time) => {
      smoothScroller?.raf(time);
      window.requestAnimationFrame(raf);
    };

    window.requestAnimationFrame(raf);
    body.classList.add('has-smooth-scroll');
  } catch (error) {
    body.classList.remove('has-smooth-scroll');
  }
};

const playVideo = (video) => {
  const promise = video.play();

  if (promise && typeof promise.catch === 'function') {
    promise.catch(() => {});
  }
};

const switchHomeHeroToLoop = () => {
  if (!heroVideo || heroVideo.dataset.loopStarted === 'true') {
    return;
  }

  const loopSrc = heroVideo.dataset.loopSrc;

  if (!loopSrc) {
    return;
  }

  heroVideo.dataset.loopStarted = 'true';
  heroVideo.loop = true;
  heroVideo.setAttribute('loop', '');
  const source = heroVideo.querySelector('source');

  if (source) {
    source.setAttribute('src', loopSrc);
    heroVideo.removeAttribute('src');
  } else {
    heroVideo.src = loopSrc;
  }

  heroVideo.load();
  playVideo(heroVideo);
  body.classList.remove('home-logo-intro-playing');
};

const startHomeHeroSequence = () => {
  if (!heroVideo || !body.classList.contains('home-logo-intro')) {
    return;
  }

  if (prefersReducedMotion) {
    switchHomeHeroToLoop();
    return;
  }

  body.classList.add('home-logo-intro-playing');
  heroVideo.loop = false;
  heroVideo.removeAttribute('loop');

  try {
    heroVideo.currentTime = 0;
  } catch (error) {
    // Some browsers can reject seeking before metadata is ready.
  }

  heroVideo.addEventListener('ended', switchHomeHeroToLoop, { once: true });
  window.setTimeout(switchHomeHeroToLoop, 5200);
  playVideo(heroVideo);
};

const setLoadedState = () => {
  if (prefersReducedMotion) {
    body.classList.add('is-loaded');
    return;
  }

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      body.classList.add('is-loaded');
    });
  });
};

const setHeaderContrast = () => {
  body.classList.toggle('header-is-scrolled', window.scrollY > 24);
};

const setMenuState = (isOpen) => {
  if (!menuButton || !menuPanel) {
    return;
  }

  body.classList.toggle('menu-is-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuPanel.setAttribute('aria-hidden', String(!isOpen));
  smoothScroller?.[isOpen ? 'stop' : 'start']();
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

setHeaderContrast();
window.addEventListener('scroll', setHeaderContrast, { passive: true });

startHomeHeroSequence();
setLoadedState();

menuLinks.forEach((link, index) => {
  link.style.setProperty('--menu-order', String(index));
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));

    if (!target) {
      return;
    }

    event.preventDefault();
    setMenuState(false);

    if (smoothScroller && !prefersReducedMotion) {
      smoothScroller.scrollTo(target, {
        offset: -96,
        duration: 1.05
      });
      return;
    }

    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start'
    });
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

const galleryLinks = Array.from(document.querySelectorAll('[data-gallery-item], .ernesto-gallery__item'));
const galleryLightbox = document.querySelector('#gallery-lightbox');
const galleryLightboxImage = galleryLightbox?.querySelector('.gallery-lightbox__image');
const galleryLightboxCount = galleryLightbox?.querySelector('.gallery-lightbox__count');
const galleryLightboxClose = galleryLightbox?.querySelector('.gallery-lightbox__close');
const galleryLightboxBackdrop = galleryLightbox?.querySelector('.gallery-lightbox__backdrop');
const galleryLightboxPrev = galleryLightbox?.querySelector('.gallery-lightbox__control--prev');
const galleryLightboxNext = galleryLightbox?.querySelector('.gallery-lightbox__control--next');
let activeGalleryIndex = 0;

const setGalleryImage = (index) => {
  if (!galleryLightboxImage || !galleryLightboxCount || !galleryLinks.length) {
    return;
  }

  activeGalleryIndex = (index + galleryLinks.length) % galleryLinks.length;

  const activeLink = galleryLinks[activeGalleryIndex];
  const activeImage = activeLink.querySelector('img');
  const imageNumber = String(activeGalleryIndex + 1).padStart(2, '0');

  const galleryTitle = galleryLightbox?.dataset.galleryTitle || 'galeria';

  galleryLightboxImage.src = activeLink.href;
  galleryLightboxImage.alt = activeImage?.alt || `Imagem ${imageNumber} da ${galleryTitle}`;
  galleryLightboxCount.textContent = `${imageNumber} / ${String(galleryLinks.length).padStart(2, '0')}`;
};

const openGalleryLightbox = (index) => {
  if (!galleryLightbox) {
    return;
  }

  setGalleryImage(index);
  galleryLightbox.setAttribute('aria-hidden', 'false');
  body.classList.add('gallery-lightbox-is-open');
  smoothScroller?.stop();
  galleryLightboxClose?.focus({ preventScroll: true });
};

const closeGalleryLightbox = () => {
  if (!galleryLightbox) {
    return;
  }

  galleryLightbox.setAttribute('aria-hidden', 'true');
  body.classList.remove('gallery-lightbox-is-open');
  galleryLightboxImage?.removeAttribute('src');
  smoothScroller?.start();
  galleryLinks[activeGalleryIndex]?.focus({ preventScroll: true });
};

if (galleryLinks.length && galleryLightbox) {
  galleryLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openGalleryLightbox(index);
    });
  });

  galleryLightboxClose?.addEventListener('click', closeGalleryLightbox);
  galleryLightboxBackdrop?.addEventListener('click', closeGalleryLightbox);
  galleryLightboxPrev?.addEventListener('click', () => setGalleryImage(activeGalleryIndex - 1));
  galleryLightboxNext?.addEventListener('click', () => setGalleryImage(activeGalleryIndex + 1));
}

document.addEventListener('keydown', (event) => {
  if (!galleryLightbox || galleryLightbox.getAttribute('aria-hidden') === 'true') {
    return;
  }

  if (event.key === 'Escape') {
    closeGalleryLightbox();
  }

  if (event.key === 'ArrowLeft') {
    setGalleryImage(activeGalleryIndex - 1);
  }

  if (event.key === 'ArrowRight') {
    setGalleryImage(activeGalleryIndex + 1);
  }
});

const revealItems = document.querySelectorAll(
  '.incorporadora-strip__inner, .manifesto__inner, .institucional-fvs__intro, .institucional-fvs__stats article, .institucional-fvs__grid article, .metodo-fvs__intro, .metodo-fvs__steps article, .metodo-fvs__proof, .gramado__media, .gramado__content, .leitura-mercado__intro, .leitura-mercado__data article, .investir-serra__intro, .investir-serra__grid article, .experiencia__content, .experiencia__moment, .section-heading, .empreendimento, .projeto-detalhe__intro, .projeto-detalhe__layout, .produto-especifico, .produto-especifico__grid article, .localizacao-produto, .produto-imagens__item, .projeto-detalhe__proofs figure, .projeto-detalhe__criteria article, .tipologias__intro, .tipologia-card, .decisao__intro, .decisao__card, .decisao__notes, .seguranca-decisao__intro, .seguranca-decisao__grid article, .confianca-fvs__intro, .confianca-fvs__grid article, .galeria__intro, .galeria__item, .galeria-proof, .ernesto-gallery__intro, .ernesto-gallery__item, .page-list__item, .page-facts li, .investment-article, .investment-pillar, .investment-proof-card, .cta-consultivo .container'
);

const revealGroups = new Map();

revealItems.forEach((item) => {
  item.setAttribute('data-reveal', '');
  const group = item.closest('section, .hero-transition, footer, main') || body;
  const order = revealGroups.get(group) || 0;

  item.style.setProperty('--reveal-order', String(Math.min(order, 6)));
  revealGroups.set(group, order + 1);
});

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else if ('IntersectionObserver' in window) {
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

initLenis();
