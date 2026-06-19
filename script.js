const body = document.body;
const menuButton = document.querySelector('.header__menu-button');
const menuPanel = document.querySelector('#site-menu');
const menuClose = document.querySelector('.menu-panel__close');
const menuLinks = document.querySelectorAll('.menu-panel__nav a');
const heroImages = document.querySelectorAll('[data-hero-depth]');
const heroVideo = document.querySelector('.hero__video');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let smoothScroller = null;
let fallbackSmoothScroll = null;

const loadScript = (src, vendor = 'motion') => new Promise((resolve, reject) => {
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
  script.dataset.motionVendor = vendor;

  script.addEventListener('load', () => {
    script.dataset.loaded = 'true';
    resolve();
  }, { once: true });

  script.addEventListener('error', reject, { once: true });
  document.head.appendChild(script);
});

const loadScriptCandidates = async (sources, vendor) => {
  let lastError = null;

  for (const src of sources) {
    try {
      await loadScript(src, vendor);
      return src;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
};

const initFallbackSmoothScroll = () => {
  if (fallbackSmoothScroll || prefersReducedMotion || window.innerWidth < 768) {
    return;
  }

  const state = {
    current: window.scrollY,
    target: window.scrollY,
    raf: null
  };

  const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  const animate = () => {
    state.current += (state.target - state.current) * 0.065;

    if (Math.abs(state.target - state.current) < 0.45) {
      state.current = state.target;
      window.scrollTo(0, state.current);
      state.raf = null;
      return;
    }

    window.scrollTo(0, state.current);
    state.raf = window.requestAnimationFrame(animate);
  };

  fallbackSmoothScroll = {
    scrollTo(target, options = {}) {
      const targetTop = typeof target === 'number'
        ? target
        : target.getBoundingClientRect().top + window.scrollY + (options.offset || 0);

      state.target = Math.max(0, Math.min(targetTop, maxScroll()));

      if (!state.raf) {
        state.current = window.scrollY;
        state.raf = window.requestAnimationFrame(animate);
      }
    },
    start() {
      body.classList.remove('smooth-scroll-paused');
    },
    stop() {
      body.classList.add('smooth-scroll-paused');
    }
  };

  window.addEventListener('wheel', (event) => {
    if (body.classList.contains('menu-is-open') || body.classList.contains('gallery-lightbox-is-open')) {
      return;
    }

    if (event.ctrlKey || event.metaKey || event.target.closest('.menu-panel, .gallery-lightbox')) {
      return;
    }

    event.preventDefault();
    state.target = Math.max(0, Math.min(state.target + event.deltaY * 1.16, maxScroll()));

    if (!state.raf) {
      state.current = window.scrollY;
      state.raf = window.requestAnimationFrame(animate);
    }
  }, { passive: false });

  body.classList.add('has-smooth-scroll', 'has-smooth-scroll-fallback');
};

const initLenis = async () => {
  if (prefersReducedMotion || smoothScroller) {
    return;
  }

  try {
    await loadScript('https://unpkg.com/lenis@1.3.23/dist/lenis.min.js', 'lenis');

    if (!window.Lenis) {
      initFallbackSmoothScroll();
      return;
    }

    smoothScroller = new window.Lenis({
      duration: 1.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.08,
      syncTouch: false,
      stopInertiaOnNavigate: true,
      prevent: (node) => node.closest('.menu-panel, .gallery-lightbox')
    });

    const raf = (time) => {
      smoothScroller?.raf(time);
      window.requestAnimationFrame(raf);
    };

    window.requestAnimationFrame(raf);
    body.classList.add('has-smooth-scroll', 'has-lenis-scroll');
  } catch (error) {
    initFallbackSmoothScroll();
  }
};

const initGsapMotion = async () => {
  try {
    await loadScriptCandidates([
      'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
    ], 'gsap');

    await loadScriptCandidates([
      'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'
    ], 'gsap-scrolltrigger');

    if (!window.gsap || !window.ScrollTrigger) {
      return;
    }

    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);
    body.classList.add('has-gsap-motion');
    const isMobileViewport = window.matchMedia('(max-width: 760px)').matches;

    const animateIn = (selector, options = {}) => {
      gsap.utils.toArray(selector).forEach((element, index) => {
        gsap.fromTo(element, {
          autoAlpha: 0,
          y: isMobileViewport ? (options.mobileY ?? 44) : (options.y ?? 72),
          scale: isMobileViewport ? (options.mobileScale ?? 0.97) : (options.scale ?? 0.96),
          filter: isMobileViewport ? (options.mobileFilter ?? 'blur(6px)') : (options.filter ?? 'blur(10px)')
        }, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: options.duration ?? 1.25,
          delay: Math.min(index * (options.stagger ?? 0.08), 0.32),
          ease: options.ease ?? 'power3.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: element,
            start: options.start ?? 'top 82%',
            once: true
          }
        });
      });
    };

    animateIn('.section-heading, .manifesto__inner, .projeto-detalhe__intro, .galeria__intro, .ernesto-gallery__intro, .investment-article', {
      y: 88,
      mobileY: 56,
      scale: 0.97,
      mobileScale: 0.98,
      duration: 1.35
    });

    animateIn('.empreendimento, .produto-especifico__grid article, .tipologia-card, .decisao__card, .confianca-fvs__grid article, .page-card, .investment-pillar, .investment-proof-card', {
      y: 68,
      mobileY: 46,
      scale: 0.94,
      mobileScale: 0.97,
      stagger: 0.1,
      duration: 1.2
    });

    animateIn('.produto-imagens__item, .galeria__item, .galeria-proof, .ernesto-gallery__item', {
      y: 96,
      mobileY: 52,
      scale: 0.92,
      mobileScale: 0.96,
      filter: 'blur(8px)',
      mobileFilter: 'blur(5px)',
      stagger: 0.055,
      duration: 1.15
    });

    gsap.utils.toArray('.hero__content').forEach((element) => {
      gsap.fromTo(element, {
        autoAlpha: 0,
        y: 58,
        scale: 0.98,
        filter: 'blur(8px)'
      }, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.35,
        ease: 'power3.out',
        delay: 0.28
      });
    });

    gsap.to('.hero__image--main', {
      yPercent: isMobileViewport ? 4 : 10,
      scale: isMobileViewport ? 1.045 : 1.09,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8
      }
    });

    gsap.utils.toArray('.empreendimento__image, .galeria__image, .produto-imagens__item, .ernesto-gallery__item img').forEach((element) => {
      gsap.fromTo(element, {
        yPercent: isMobileViewport ? -2 : -5,
        scale: isMobileViewport ? 1.015 : 1.04
      }, {
        yPercent: isMobileViewport ? 3 : 7,
        scale: isMobileViewport ? 1.04 : 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: element.closest('section, article, a') || element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.75
        }
      });
    });

    ScrollTrigger.refresh();
  } catch (error) {
    body.classList.remove('has-gsap-motion');
  }
};

const initLocalVisualMotion = () => {
  const motionGroups = [
    {
      selector: '.manifesto__text, .section-heading h2, .projeto-detalhe__intro h2, .tipologias__intro h2, .decisao__intro h2, .investment-article h2, .page-section__heading h2',
      type: 'title'
    },
    {
      selector: '.manifesto__support, .section-heading p, .gramado__content, .page-copy, .investment-article p',
      type: 'copy'
    },
    {
      selector: '.empreendimento, .produto-especifico__grid article, .tipologia-card, .decisao__card, .confianca-fvs__grid article, .page-card, .investment-pillar, .investment-proof-card',
      type: 'card'
    },
    {
      selector: '.empreendimento__image, .produto-imagens__item, .galeria__item, .galeria-proof, .ernesto-gallery__item',
      type: 'image'
    }
  ];

  const motionItems = [];
  const counters = new Map();

  motionGroups.forEach(({ selector, type }) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (element.dataset.motionReady === 'true') {
        return;
      }

      const section = element.closest('section, main, footer') || body;
      const sectionIndex = counters.get(section) || 0;

      element.dataset.motionReady = 'true';
      element.dataset.motion = type;
      element.style.setProperty('--motion-order', String(Math.min(sectionIndex, 8)));
      counters.set(section, sectionIndex + 1);
      motionItems.push(element);
    });
  });

  if (!motionItems.length) {
    return;
  }

  body.classList.add('has-local-visual-motion');

  if (prefersReducedMotion) {
    body.classList.add('has-site-visual-motion');
  }

  const activate = (element) => {
    element.classList.add('motion-in');
  };

  if ('IntersectionObserver' in window) {
    const motionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        activate(entry.target);
        motionObserver.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px 14% 0px',
      threshold: 0.04
    });

    motionItems.forEach((element) => motionObserver.observe(element));
  } else {
    motionItems.forEach(activate);
  }
};

const playVideo = (video) => {
  const promise = video.play();

  if (promise && typeof promise.catch === 'function') {
    promise.catch(() => {});
  }
};

const startHomeHeroSequence = () => {
  if (!heroVideo) {
    return;
  }

  heroVideo.loop = true;
  heroVideo.setAttribute('loop', '');
  heroVideo.muted = true;
  heroVideo.setAttribute('muted', '');
  heroVideo.setAttribute('playsinline', '');
  heroVideo.setAttribute('webkit-playsinline', '');
  playVideo(heroVideo);

  const retryPlay = () => playVideo(heroVideo);

  document.addEventListener('touchstart', retryPlay, { once: true, passive: true });
  document.addEventListener('pointerdown', retryPlay, { once: true, passive: true });
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      retryPlay();
    }
  });
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
  fallbackSmoothScroll?.[isOpen ? 'stop' : 'start']();
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

    const activeSmoothScroll = smoothScroller || fallbackSmoothScroll;

    if (activeSmoothScroll && !prefersReducedMotion) {
      activeSmoothScroll.scrollTo(target, {
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
    const depthStrength = window.innerWidth < 768 ? 115 : 260;

    heroImages.forEach((image) => {
      const depth = Number(image.dataset.heroDepth || 0);
      image.style.setProperty('--hero-shift', `${progress * depth * depthStrength}px`);
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
  fallbackSmoothScroll?.stop();
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
  fallbackSmoothScroll?.start();
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
  '.manifesto__inner, .institucional-fvs__intro, .institucional-fvs__stats article, .institucional-fvs__grid article, .metodo-fvs__intro, .metodo-fvs__steps article, .metodo-fvs__proof, .gramado__media, .gramado__content, .leitura-mercado__intro, .leitura-mercado__data article, .investir-serra__intro, .investir-serra__grid article, .experiencia__content, .experiencia__moment, .section-heading, .empreendimento, .projeto-detalhe__intro, .projeto-detalhe__layout, .produto-especifico, .produto-especifico__grid article, .localizacao-produto, .produto-imagens__item, .projeto-detalhe__proofs figure, .projeto-detalhe__criteria article, .tipologias__intro, .tipologia-card, .decisao__intro, .decisao__card, .decisao__notes, .seguranca-decisao__intro, .seguranca-decisao__grid article, .confianca-fvs__intro, .confianca-fvs__grid article, .galeria__intro, .galeria__item, .galeria-proof, .ernesto-gallery__intro, .ernesto-gallery__item, .page-list__item, .page-facts li, .investment-article, .investment-pillar, .investment-proof-card, .cta-consultivo .container'
);

const revealGroups = new Map();

revealItems.forEach((item) => {
  item.setAttribute('data-reveal', '');
  const group = item.closest('section, .hero-transition, footer, main') || body;
  const order = revealGroups.get(group) || 0;

  item.style.setProperty('--reveal-order', String(Math.min(order, 7)));
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
    rootMargin: '0px 0px 16% 0px',
    threshold: 0.04
  });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

initLenis();
initLocalVisualMotion();
initGsapMotion();
