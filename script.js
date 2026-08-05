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

const cleanText = (value = '') => value.replace(/\s+/g, ' ').trim();

const getLinkLabel = (link) => cleanText(link?.textContent || link?.getAttribute('aria-label') || 'link');

const getInternalPath = (href = '') => {
  try {
    const url = new URL(href, window.location.origin);

    if (url.origin !== window.location.origin) {
      return url.hostname;
    }

    return `${url.pathname}${url.hash}`;
  } catch (error) {
    return href.split('?')[0];
  }
};

const trackEvent = (eventName, params = {}) => {
  if (typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, {
    page_path: window.location.pathname,
    page_title: document.title,
    ...params
  });
};

const getProjectSlugFromHref = (href = '') => {
  if (href.includes('manhattan-residence')) {
    return 'manhattan-residence';
  }

  if (href.includes('ernesto-142')) {
    return 'ernesto-142';
  }

  if (href.includes('empreendimentos-imobiliarios')) {
    return 'empreendimentos';
  }

  return undefined;
};

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
          y: isMobileViewport ? (options.mobileY ?? 22) : (options.y ?? 72),
          scale: isMobileViewport ? (options.mobileScale ?? 0.99) : (options.scale ?? 0.96),
          filter: isMobileViewport ? (options.mobileFilter ?? 'blur(2px)') : (options.filter ?? 'blur(10px)')
        }, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: isMobileViewport ? (options.mobileDuration ?? 0.58) : (options.duration ?? 1.25),
          delay: isMobileViewport ? Math.min(index * (options.mobileStagger ?? 0.035), 0.1) : Math.min(index * (options.stagger ?? 0.08), 0.32),
          ease: options.ease ?? 'power3.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: element,
            start: isMobileViewport ? (options.mobileStart ?? 'top 94%') : (options.start ?? 'top 82%'),
            once: true
          }
        });
      });
    };

    animateIn('.section-heading, .manifesto__inner, .projeto-detalhe__intro, .galeria__intro, .ernesto-gallery__intro, .investment-article', {
      y: 88,
      mobileY: 20,
      scale: 0.97,
      mobileScale: 0.99,
      mobileFilter: 'blur(1px)',
      duration: 1.35,
      mobileDuration: 0.54
    });

    animateIn('.empreendimento, .produto-especifico__grid article, .tipologia-card, .decisao__card, .confianca-fvs__grid article, .page-card, .investment-pillar, .investment-proof-card', {
      y: 68,
      mobileY: 18,
      scale: 0.94,
      mobileScale: 0.99,
      mobileFilter: 'blur(0px)',
      stagger: 0.1,
      duration: 1.2,
      mobileDuration: 0.48,
      mobileStagger: 0.02
    });

    animateIn('.produto-imagens__item, .galeria__item, .galeria-proof, .ernesto-gallery__item', {
      y: 96,
      mobileY: 18,
      scale: 0.92,
      mobileScale: 0.99,
      filter: 'blur(8px)',
      mobileFilter: 'blur(0px)',
      stagger: 0.055,
      duration: 1.15,
      mobileDuration: 0.48,
      mobileStagger: 0.015
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

    if (!isMobileViewport) {
      gsap.utils.toArray('.empreendimento__image, .galeria__image, .produto-imagens__item, .ernesto-gallery__item img').forEach((element) => {
        gsap.fromTo(element, {
          yPercent: -5,
          scale: 1.04
        }, {
          yPercent: 7,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: element.closest('section, article, a') || element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.75
          }
        });
      });
    }

    ScrollTrigger.refresh();
  } catch (error) {
    body.classList.remove('has-gsap-motion');
  }
};

const initLocalVisualMotion = () => {
  const isMobileViewport = window.matchMedia('(max-width: 760px)').matches;
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
      rootMargin: isMobileViewport ? '0px 0px 46% 0px' : '0px 0px 14% 0px',
      threshold: isMobileViewport ? 0.01 : 0.04
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

const markActiveNavigation = () => {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  document.querySelectorAll('.header__link, .menu-panel__nav a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const path = getInternalPath(link.href).split('#')[0].replace(/\/$/, '') || '/';
    const isMenuPanelLink = Boolean(link.closest('.menu-panel__nav'));
    let isActive = path === currentPath;

    if (currentPath === '/' && isMenuPanelLink) {
      isActive = href === '/';
    } else if (currentPath === '/' && href.includes('#manifesto')) {
      isActive = true;
    } else if (currentPath.startsWith('/empreendimentos-imobiliarios') && path === '/empreendimentos-imobiliarios') {
      isActive = true;
    }

    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const initContactForm = () => {
  const form = document.querySelector('[data-contact-form]');
  const status = form?.querySelector('[data-form-status]');
  const submit = form?.querySelector('button[type="submit"]');

  if (!form || !status || !submit) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('is-error');
      status.textContent = 'Confira os campos obrigatórios para continuar.';
      status.dataset.state = 'error';
      form.querySelector(':invalid')?.focus();
      return;
    }

    const data = new FormData(form);
    const message = `Olá, vim pelo site da FVS. Meu nome é ${data.get('name')}. Interesse: ${data.get('interest')}. ${data.get('message')}`;
    const whatsappUrl = `https://wa.me/5554999214824?text=${encodeURIComponent(message)}`;
    submit.disabled = true;
    submit.classList.add('is-loading');
    submit.setAttribute('aria-busy', 'true');
    status.textContent = 'Preparando sua conversa...';
    status.dataset.state = 'loading';
    window.setTimeout(() => {
      form.classList.remove('is-error');
      status.textContent = 'Tudo certo. Abrindo o WhatsApp para continuar o atendimento.';
      status.dataset.state = 'success';
      submit.classList.remove('is-loading');
      submit.disabled = false;
      submit.removeAttribute('aria-busy');
      trackEvent('submit_contact_form', { interest: data.get('interest') });
      window.location.assign(whatsappUrl);
    }, 420);
  });
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
markActiveNavigation();
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

const trackGalleryNavigation = (direction) => {
  const activeLink = galleryLinks[activeGalleryIndex];
  const activeImage = activeLink?.querySelector('img');

  trackEvent('navigate_gallery', {
    gallery_title: galleryLightbox?.dataset.galleryTitle || document.title,
    navigation_direction: direction,
    image_index: activeGalleryIndex + 1,
    image_alt: cleanText(activeImage?.alt || '')
  });
};

if (galleryLinks.length && galleryLightbox) {
  galleryLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openGalleryLightbox(index);
      trackEvent('open_gallery', {
        gallery_title: galleryLightbox.dataset.galleryTitle || document.title,
        image_index: index + 1,
        image_path: getInternalPath(link.href)
      });
    });
  });

  galleryLightboxClose?.addEventListener('click', closeGalleryLightbox);
  galleryLightboxBackdrop?.addEventListener('click', closeGalleryLightbox);
  galleryLightboxPrev?.addEventListener('click', () => {
    setGalleryImage(activeGalleryIndex - 1);
    trackGalleryNavigation('previous');
  });
  galleryLightboxNext?.addEventListener('click', () => {
    setGalleryImage(activeGalleryIndex + 1);
    trackGalleryNavigation('next');
  });
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
    trackGalleryNavigation('keyboard_previous');
  }

  if (event.key === 'ArrowRight') {
    setGalleryImage(activeGalleryIndex + 1);
    trackGalleryNavigation('keyboard_next');
  }
});

document.addEventListener('click', (event) => {
  const link = event.target.closest('a');

  if (!link || !link.href) {
    return;
  }

  const href = link.getAttribute('href') || '';
  const label = getLinkLabel(link);
  const destination = getInternalPath(link.href);
  const projectSlug = getProjectSlugFromHref(href);
  const isProjectCard = Boolean(link.closest('.empreendimento, .page-card'));
  const isPrimaryCta = Boolean(link.closest('.cta-consultivo, .page-cta, .hero__actions') || link.className.includes('button') || link.className.includes('cta'));
  const isMenuLink = Boolean(link.closest('.header__nav, .menu-panel__nav, .footer'));

  if (href.includes('wa.me')) {
    trackEvent('click_whatsapp', {
      cta_label: label,
      cta_position: link.closest('footer') ? 'footer' : link.closest('.menu-panel') ? 'menu' : link.closest('.cta-consultivo') ? 'cta_consultivo' : 'content',
      project_slug: projectSlug
    });
    return;
  }

  if (href.includes('instagram.com')) {
    trackEvent('click_social', {
      network: 'instagram',
      cta_label: label,
      cta_position: link.closest('footer') ? 'footer' : link.closest('.menu-panel') ? 'menu' : 'content'
    });
    return;
  }

  if (href.startsWith('mailto:')) {
    trackEvent('click_email', {
      cta_label: label,
      email_type: href.includes('engenharia') ? 'engenharia' : 'comercial'
    });
    return;
  }

  if (href.startsWith('tel:')) {
    trackEvent('click_phone', {
      cta_label: label
    });
    return;
  }

  if (isProjectCard && projectSlug) {
    trackEvent('click_project_card', {
      cta_label: label,
      project_slug: projectSlug,
      destination
    });
    return;
  }

  if (isPrimaryCta) {
    trackEvent('click_primary_cta', {
      cta_label: label,
      cta_position: link.closest('section')?.id || link.closest('main, footer')?.tagName?.toLowerCase() || 'content',
      project_slug: projectSlug,
      destination
    });
    return;
  }

  if (isMenuLink) {
    trackEvent('click_navigation', {
      cta_label: label,
      navigation_area: link.closest('.menu-panel') ? 'menu_panel' : link.closest('footer') ? 'footer' : 'header',
      destination
    });
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
initContactForm();
