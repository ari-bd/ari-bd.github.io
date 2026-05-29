/* ============================================================
   ARI – Advanced Research and Innovation
   Main JavaScript – Enhanced Edition v2
   ============================================================ */

'use strict';

// ========== FOUNDER DATA ==========
const founderData = {
  rukon: {
    initials: 'RR',
    image: 'images/RR.jpg',
    name: 'Md. Rukonuzzaman Rukon',
    role: 'Co-Founder',
    bio: 'Md. Rukonuzzaman Rukon is a passionate research advocate dedicated to advancing research methodology and knowledge dissemination across Bangladesh. With a strong background in academic research and institutional capacity building, he co-founded ARI in 2023 to make quality research education accessible to all.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-flask', text: 'Research Methodology' },
      { icon: 'fas fa-university', text: 'Higher Education' },
      { icon: 'fas fa-book', text: 'Knowledge Dissemination' }
    ],
    profiles: [
      { type: 'linkedin', label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/rukonozzaman-rukon-a944b628b/' },
      { type: 'researchgate', label: 'ResearchGate', icon: 'rg', href: 'https://www.researchgate.net/' },
      { type: 'email', label: 'Email', icon: 'fas fa-envelope', href: 'mailto:rukon.stat.jnu@gmail.com' }
    ]
  },
  ador: {
    initials: 'MA',
    image: 'images/MA.jpg',
    name: 'Md. Ador Hossain',
    role: 'Co-Founder',
    bio: 'Md. Ador Hossain is committed to making research training accessible and impactful for all levels of learners. He brings expertise in academic training design and curriculum development, playing a central role in building ARI\'s educational programs and outreach initiatives.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-chalkboard-teacher', text: 'Training & Education' },
      { icon: 'fas fa-chart-bar', text: 'Data Analysis' },
      { icon: 'fas fa-graduation-cap', text: 'Curriculum Development' }
    ],
    profiles: [
      { type: 'researchgate', label: 'ResearchGate', icon: 'rg', href: 'https://www.researchgate.net/' },
      { type: 'email', label: 'Email', icon: 'fas fa-envelope', href: 'mailto:adorhossain58@gmail.com' }
    ]
  },
  samrat: {
    initials: 'SSK',
    image: 'images/SSK.jpg',
    name: 'Samrat Kumar Dev Sharma',
    role: 'Co-Founder',
    bio: 'Samrat Kumar Dev Sharma is passionate about data analysis and evidence-based research practices. His expertise in statistical tools and quantitative methods has been instrumental in shaping ARI\'s data analysis training programs and research support services.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-database', text: 'Statistical Analysis' },
      { icon: 'fas fa-code', text: 'SPSS & R' },
      { icon: 'fas fa-chart-line', text: 'Quantitative Research' }
    ],
    profiles: [
      { type: 'linkedin', label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/samrat-kumar-dev-sharma-b0a5a9212/' },
      { type: 'researchgate', label: 'ResearchGate', icon: 'rg', href: 'https://www.researchgate.net/' },
      { type: 'orcid', label: 'ORCID', icon: 'orcid', href: 'https://orcid.org/' },
      { type: 'email', label: 'Email', icon: 'fas fa-envelope', href: 'mailto:samrat.sdev@gmail.com' }
    ]
  },
  futanta: {
    initials: 'FC',
    image: 'images/FC.jpg',
    name: 'Futanta Chakma',
    role: 'Co-Founder',
    bio: 'Futanta Chakma is focused on promoting research culture among diverse communities across Bangladesh. With a commitment to inclusivity in academic research, she has worked to ensure ARI\'s programs reach underrepresented groups and communities outside urban centers.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-users', text: 'Community Research' },
      { icon: 'fas fa-seedling', text: 'Research Culture' },
      { icon: 'fas fa-hands-helping', text: 'Diversity & Inclusion' }
    ],
    profiles: [
      { type: 'linkedin', label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/futanta-chakma/' },
      { type: 'researchgate', label: 'ResearchGate', icon: 'rg', href: 'https://www.researchgate.net/' },
      { type: 'email', label: 'Email', icon: 'fas fa-envelope', href: 'mailto:futanta.stat@gmail.com' }
    ]
  },
  mahmud: {
    initials: 'MH',
    image: 'images/MH.jpg',
    name: 'Mahmud Hossain',
    role: 'Co-Founder',
    bio: 'Mahmud Hossain is dedicated to building research networks and fostering academic collaborations at national and international levels. His work focuses on connecting Bangladeshi researchers with global academic communities and facilitating collaborative research opportunities.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-network-wired', text: 'Research Networks' },
      { icon: 'fas fa-globe', text: 'International Collaboration' },
      { icon: 'fas fa-scroll', text: 'Academic Publishing' }
    ],
    profiles: [
      { type: 'linkedin', label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/mahmud-tanjid/' },
      { type: 'researchgate', label: 'ResearchGate', icon: 'rg', href: 'https://www.researchgate.net/' },
      { type: 'scholar', label: 'Google Scholar', icon: 'scholar', href: 'https://scholar.google.com/' },
      { type: 'email', label: 'Email', icon: 'fas fa-envelope', href: 'mailto:mahmudtanjid645@gmail.com' }
    ]
  }
};

// SVG icons for platforms
const platformSVGs = {
  rg: `<svg class="rg-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.586 0H4.414A4.414 4.414 0 0 0 0 4.414v15.172A4.414 4.414 0 0 0 4.414 24h15.172A4.414 4.414 0 0 0 24 19.586V4.414A4.414 4.414 0 0 0 19.586 0zM8.25 17.25H6.375V9.75H8.25v7.5zM7.313 8.813a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25zm10.312 8.437h-1.875v-3.75c0-.938-.938-1.688-1.875-1.688s-1.875.75-1.875 1.688v3.75H9.938V9.75h1.875v1.013A3.375 3.375 0 0 1 14.5 9.563c1.969 0 3.125 1.5 3.125 3.375v4.312z"/></svg>`,
  orcid: `<svg class="orcid-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>`,
  scholar: `<svg class="rg-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/></svg>`
};

// ========== FOUNDER MODAL ==========
const founderModal = document.getElementById('founderModal');
const founderModalClose = document.getElementById('founderModalClose');

function openFounderModal(founderId) {
  const data = founderData[founderId];
  if (!data || !founderModal) return;

  const avatarImg = document.getElementById('fpmAvatarImg');
  const avatarFallback = document.getElementById('fpmAvatarFallback');
  if (avatarImg && avatarFallback) {
    avatarImg.src = data.image || '';
    avatarImg.alt = data.name;
    avatarImg.style.display = '';
    avatarFallback.textContent = data.initials;
    avatarFallback.style.display = 'none';
  }
  document.getElementById('fpmName').textContent = data.name;
  document.getElementById('fpmRole').textContent = data.role;
  document.getElementById('fpmBio').textContent = data.bio;

  // Details chips
  const detailsEl = document.getElementById('fpmDetails');
  detailsEl.innerHTML = data.details.map(d =>
    `<div class="fpm-chip"><i class="${d.icon}"></i> ${d.text}</div>`
  ).join('');

  // Profile links
  const linksEl = document.getElementById('fpmProfileLinks');
  linksEl.innerHTML = data.profiles.map(p => {
    let iconHtml;
    if (p.icon === 'rg') iconHtml = platformSVGs.rg;
    else if (p.icon === 'orcid') iconHtml = platformSVGs.orcid;
    else if (p.icon === 'scholar') iconHtml = platformSVGs.scholar;
    else iconHtml = `<i class="${p.icon}"></i>`;

    const isExternal = p.href.startsWith('http');
    return `<a href="${p.href}" class="fpm-profile-link ${p.type}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>
      ${iconHtml} ${p.label}
    </a>`;
  }).join('');

  founderModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-open');
}

function closeFounderModal() {
  if (!founderModal) return;
  founderModal.classList.remove('open');
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.founder-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-founder');
    if (id) openFounderModal(id);
  });
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const id = card.getAttribute('data-founder');
      if (id) openFounderModal(id);
    }
  });
});

if (founderModalClose) founderModalClose.addEventListener('click', closeFounderModal);
if (founderModal) {
  founderModal.addEventListener('click', e => {
    if (e.target === founderModal) closeFounderModal();
  });
}

// ========== LOADER ==========
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader && !loader.classList.contains('hidden')) {
    loader.classList.add('hidden');
    initReveal();
  }
}

// Normal path: hide after load + short animation
window.addEventListener('load', () => setTimeout(hideLoader, 1800));

// Fallback: force-hide after 4s no matter what (broken images, slow resources, etc.)
setTimeout(hideLoader, 4000);

// Also hide as soon as DOM is ready if load never fires
document.addEventListener('DOMContentLoaded', () => setTimeout(hideLoader, 3000));

// ========== CUSTOM CURSOR ==========
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursor) {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  }
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  if (follower) {
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
  }
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .ptab, .faq-q, .gallery-item, .intern-card, .founder-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (cursor) { cursor.style.width = '18px'; cursor.style.height = '18px'; }
    if (follower) { follower.style.width = '50px'; follower.style.height = '50px'; follower.style.opacity = '0.6'; }
  });
  el.addEventListener('mouseleave', () => {
    if (cursor) { cursor.style.width = '10px'; cursor.style.height = '10px'; }
    if (follower) { follower.style.width = '36px'; follower.style.height = '36px'; follower.style.opacity = '1'; }
  });
});

// ========== NAVBAR SCROLL ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}

// ========== SPA NAVIGATION + URL ROUTING (GitHub Pages) ==========

const _knownSegments = new Set(['about','programs','research','services','media','contact']);

// Page ID → clean URL path
const pageRoutes = {
  home:     '/',
  about:    '/about',
  programs: '/programs',
  research: '/research',
  services: '/services',
  media:    '/media',
  contact:  '/contact'
};

// Program name → URL slug under /programs/
// Keys use decoded & (not &amp;) because getAttribute() returns decoded values
const programSlugs = {
  'IBM SPSS & Research-Ready Data Analysis':          'spss',
  'Data Analysis with Stata':                         'stata',
  'Introduction to R for Data Analysis':              'r',
  'Introduction to R for Data Analysis (Recording)':  'r',
  'Zotero & Mendeley Referencing':                    'referencing',
  'Research Methodology Workshop':                    'methodology-workshop',
  'Data Analysis Workshop':                           'data-analysis-workshop',
  'Data Analysis Workshop (Recording)':               'data-analysis-workshop',
  'Academic Writing Workshop':                        'academic-writing',
  'Beginner Research Fundamentals':                   'fundamentals',
  'Intermediate Research Methods':                    'intermediate',
  'Advanced Research & Publication':                  'advanced-publication',
  'Advanced Research & Publication (Recording)':      'advanced-publication'
};

function getPageFromPath(path) {
  if (!path || path === '/') return 'home';
  const segments = path.replace(/^\//, '').split('/');
  for (const seg of segments) {
    if (_knownSegments.has(seg)) return seg;
  }
  return 'home';
}
  return 'home';
}

function navigateTo(pageId, pushHistory = true) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const targetPage = document.getElementById(pageId);
  const targetNav  = document.querySelector(`.nav-link[data-page="${pageId}"]`);

  if (targetPage) {
    targetPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(initReveal, 100);
  }
  if (targetNav) targetNav.classList.add('active');

  if (pushHistory) {
    const url = pageRoutes[pageId] || '/';
    history.pushState({ pageId }, '', url);
  }

  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

// Handle browser Back / Forward
window.addEventListener('popstate', e => {
  const pageId = (e.state && e.state.pageId) || getPageFromPath(location.pathname);
  navigateTo(pageId, false);
});

document.addEventListener('click', e => {
  const link = e.target.closest('[data-page]');
  if (link) {
    e.preventDefault();
    const page = link.getAttribute('data-page');
    navigateTo(page);
  }
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) navigateTo(href.slice(1));
  });
});

// Reflect program/course slug in URL when enroll button is clicked
document.addEventListener('click', e => {
  const btn = e.target.closest('.enroll-btn[data-program]');
  if (!btn) return;
  const program = btn.getAttribute('data-program') || '';
  const slug = programSlugs[program];
  if (slug) {
    history.replaceState({ pageId: 'programs', slug }, '', '/programs/' + slug);
  }
});

// ========== REVEAL ON SCROLL ==========
function initReveal() {
  const reveals = document.querySelectorAll('.page.active .reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  reveals.forEach(el => observer.observe(el));
  initCounters();
}

// ========== COUNTERS ==========
function initCounters() {
  const counters = document.querySelectorAll('.page.active .stat-num, .page.active .hnum');
  counters.forEach(counter => {
    if (counter.dataset.animated) return;
    const target = parseInt(counter.getAttribute('data-target'));
    if (!target) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counter.dataset.animated) {
          counter.dataset.animated = true;
          animateCounter(counter, target);
          obs.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(counter);
  });
}

function animateCounter(el, target) {
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

// ========== PROJECT TABS ==========
document.querySelectorAll('.ptab').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');
    document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.proj-tab-content').forEach(c => c.classList.add('hidden'));
    tab.classList.add('active');
    const content = document.getElementById(tabId);
    if (content) {
      content.classList.remove('hidden');
      content.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible');
        setTimeout(() => el.classList.add('visible'), 100);
      });
    }
  });
});

// ========== FAQ ACCORDION ==========
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ========== CONTACT FORM ==========
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.classList.add('hidden');
    success.classList.remove('hidden');
  }
}
window.handleFormSubmit = handleFormSubmit;

// ========== ENROLL MODAL SYSTEM ==========
// To link a Google Form: add the URL to data-form-url on the enroll button.
// Example: data-form-url="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
const enrollModal = document.getElementById('enrollModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalFormWrap = document.getElementById('modalFormWrap');
const modalEmailFallback = document.getElementById('modalEmailFallback');
const modalEmailLink = document.getElementById('modalEmailLink');

function openEnrollModal(programName, formUrl) {
  if (!enrollModal) return;

  modalTitle.textContent = 'Enroll in: ' + programName;

  if (formUrl) {
    // Google Form integration — set data-form-url on any .enroll-btn to activate
    modalDesc.textContent = 'Complete the form below to enroll in this program.';
    modalFormWrap.innerHTML = `
      <div class="modal-iframe-wrap">
        <iframe src="${formUrl}" title="Enrollment Form" frameborder="0" marginheight="0" marginwidth="0" loading="lazy">Loading…</iframe>
      </div>`;
    modalFormWrap.style.display = 'block';
    modalEmailFallback.style.display = 'none';
  } else {
    // Email fallback (default until Google Form URL is added)
    modalDesc.textContent = 'Fill out the form below to register your interest. ARI will get back to you within 24–48 hours.';
    modalFormWrap.innerHTML = '';
    modalFormWrap.style.display = 'none';
    modalEmailFallback.style.display = 'block';
    if (modalEmailLink) {
      const subject = encodeURIComponent('Enrollment: ' + programName);
      modalEmailLink.href = `mailto:research.ari.bd@gmail.com?subject=${subject}`;
    }
  }

  enrollModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-open');
}

function closeEnrollModal() {
  if (!enrollModal) return;
  enrollModal.classList.remove('open');
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
  setTimeout(() => { if (modalFormWrap) modalFormWrap.innerHTML = ''; }, 300);
}

document.querySelectorAll('.enroll-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const program = btn.getAttribute('data-program') || 'Program';
    const formUrl = btn.getAttribute('data-form-url') || '';
    openEnrollModal(program, formUrl);
  });
});

if (modalClose) modalClose.addEventListener('click', closeEnrollModal);
if (enrollModal) {
  enrollModal.addEventListener('click', e => {
    if (e.target === enrollModal) closeEnrollModal();
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeEnrollModal();
    closeFounderModal();
  }
});

// ========== INITIAL LOAD ==========
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const redirectedPath = params.get('p');

  let startPage;
  if (redirectedPath) {
    startPage = getPageFromPath(redirectedPath);
    history.replaceState({ pageId: startPage }, '', pageRoutes[startPage] || '/');
  } else {
    startPage = getPageFromPath(location.pathname);
    history.replaceState({ pageId: startPage }, '', pageRoutes[startPage] || '/');
  }

  navigateTo(startPage, false);

  document.querySelectorAll('.nav-link').forEach((link, i) => {
    link.style.transitionDelay = `${i * 50}ms`;
  });
});

// ========== PARALLAX ORBS ==========
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelectorAll('.page.active .orb-1').forEach(orb => {
    orb.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
  });
  document.querySelectorAll('.page.active .orb-2').forEach(orb => {
    orb.style.transform = `translate(${-x * 0.3}px, ${-y * 0.3}px)`;
  });
});
// ========== INTERN DATA ==========
const internData = {
  tasneem: {
    initials: 'TA',
    image: 'images/TA.jpg',
    name: 'Tasneem Ahmed',
    role: 'Research Assistant Intern',
    bio: 'Tasneem Ahmed is a dedicated research assistant intern supporting data collection, cleaning, and statistical analysis for ARI\'s ongoing research projects. With a strong foundation in quantitative methods, she contributes to evidence-based research across multiple domains.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-flask', text: 'Data Analysis' },
      { icon: 'fas fa-chart-bar', text: 'Quantitative Research' },
      { icon: 'fas fa-database', text: 'SPSS & R' }
    ],
    profiles: [
      { type: 'email', label: 'Email ARI', icon: 'fas fa-envelope', href: 'mailto:research.ari.bd@gmail.com' }
    ]
  },
  rafiqul: {
    initials: 'RH',
    image: 'images/RH.jpg',
    name: 'Rafiqul Hasan',
    role: 'Content & Publication Intern',
    bio: 'Rafiqul Hasan assists in academic writing, manuscript editing, and publication preparation. He works closely with researchers to ensure their papers meet international journal standards and supports ARI\'s content creation and outreach efforts.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-pen-nib', text: 'Academic Writing' },
      { icon: 'fas fa-upload', text: 'Publication Support' },
      { icon: 'fas fa-edit', text: 'Manuscript Editing' }
    ],
    profiles: [
      { type: 'email', label: 'Email ARI', icon: 'fas fa-envelope', href: 'mailto:research.ari.bd@gmail.com' }
    ]
  },
  nusrat: {
    initials: 'NI',
    image: 'images/NI.jpg',
    name: 'Nusrat Islam',
    role: 'Survey & Methodology Intern',
    bio: 'Nusrat Islam specializes in survey instrument design and research methodology development. She plays a key role in designing validated questionnaires, conducting pilot tests, and ensuring methodological rigor across ARI\'s research projects.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-clipboard-list', text: 'Survey Design' },
      { icon: 'fas fa-microscope', text: 'Research Methodology' },
      { icon: 'fas fa-check-double', text: 'Validity & Reliability' }
    ],
    profiles: [
      { type: 'email', label: 'Email ARI', icon: 'fas fa-envelope', href: 'mailto:research.ari.bd@gmail.com' }
    ]
  },
  sabbir: {
    initials: 'SB',
    image: 'images/SB.jpg',
    name: 'Sabbir Biswas',
    role: 'Training Support Intern',
    bio: 'Sabbir Biswas coordinates ARI\'s training programs, managing logistics, participant registration, and workshop facilitation. He ensures a smooth learning experience for all participants and provides on-site and online technical support during training sessions.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-chalkboard-teacher', text: 'Training Coordination' },
      { icon: 'fas fa-calendar-check', text: 'Event Management' },
      { icon: 'fas fa-headset', text: 'Participant Support' }
    ],
    profiles: [
      { type: 'email', label: 'Email ARI', icon: 'fas fa-envelope', href: 'mailto:research.ari.bd@gmail.com' }
    ]
  },
  maliha: {
    initials: 'MR',
    image: 'images/MR.jpg',
    name: 'Maliha Rahman',
    role: 'Research Coordination Intern',
    bio: 'Maliha Rahman oversees cross-team research coordination and project documentation at ARI. She ensures effective communication between research teams, maintains project timelines, and supports the documentation of research outputs and institutional activities.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-project-diagram', text: 'Project Coordination' },
      { icon: 'fas fa-file-alt', text: 'Documentation' },
      { icon: 'fas fa-handshake', text: 'Team Collaboration' }
    ],
    profiles: [
      { type: 'email', label: 'Email ARI', icon: 'fas fa-envelope', href: 'mailto:research.ari.bd@gmail.com' }
    ]
  },
  karim: {
    initials: 'KA',
    image: 'images/KA.jpg',
    name: 'Karim Al-Amin',
    role: 'Digital & Outreach Intern',
    bio: 'Karim Al-Amin manages ARI\'s digital communications, social media presence, and research outreach campaigns. He works to expand ARI\'s reach among the academic community, creating engaging content that promotes research culture across Bangladesh.',
    details: [
      { icon: 'fas fa-map-marker-alt', text: 'Bangladesh' },
      { icon: 'fas fa-bullhorn', text: 'Digital Outreach' },
      { icon: 'fas fa-globe', text: 'Social Media' },
      { icon: 'fas fa-palette', text: 'Content Creation' }
    ],
    profiles: [
      { type: 'email', label: 'Email ARI', icon: 'fas fa-envelope', href: 'mailto:research.ari.bd@gmail.com' }
    ]
  }
};

// ========== INTERN MODAL ==========
const internModal = document.getElementById('internModal');
const internModalClose = document.getElementById('internModalClose');

function openInternModal(internId) {
  const data = internData[internId];
  if (!data || !internModal) return;

  const avatarImg = document.getElementById('ipmAvatarImg');
  const avatarFallback = document.getElementById('ipmAvatarFallback');
  if (avatarImg && avatarFallback) {
    avatarImg.src = data.image || '';
    avatarImg.alt = data.name;
    avatarImg.style.display = '';
    avatarFallback.textContent = data.initials;
    avatarFallback.style.display = 'none';
  }
  document.getElementById('ipmName').textContent = data.name;
  document.getElementById('ipmRole').textContent = data.role;
  document.getElementById('ipmBio').textContent = data.bio;

  const detailsEl = document.getElementById('ipmDetails');
  detailsEl.innerHTML = data.details.map(d =>
    `<div class="fpm-chip"><i class="${d.icon}"></i> ${d.text}</div>`
  ).join('');

  const linksEl = document.getElementById('ipmProfileLinks');
  linksEl.innerHTML = data.profiles.map(p => {
    let iconHtml = `<i class="${p.icon}"></i>`;
    const isExternal = p.href.startsWith('http') || p.href.startsWith('mailto');
    return `<a href="${p.href}" class="fpm-profile-link ${p.type}"${isExternal ? '' : ''}>
      ${iconHtml} ${p.label}
    </a>`;
  }).join('');

  internModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-open');
}

function closeInternModal() {
  if (!internModal) return;
  internModal.classList.remove('open');
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.intern-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-intern');
    if (id) openInternModal(id);
  });
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const id = card.getAttribute('data-intern');
      if (id) openInternModal(id);
    }
  });
});

if (internModalClose) internModalClose.addEventListener('click', closeInternModal);
if (internModal) {
  internModal.addEventListener('click', e => {
    if (e.target === internModal) closeInternModal();
  });
}

// Update Escape handler to include intern modal
document.removeEventListener('keydown', window._ariEscHandler);
window._ariEscHandler = e => {
  if (e.key === 'Escape') {
    closeEnrollModal();
    closeFounderModal();
    closeInternModal();
    closeNewsModal();
    ['abstractModal','articleModal','projectModal','galleryModal'].forEach(id => {
      const m = document.getElementById(id);
      if (m) { m.classList.remove('open'); document.body.style.overflow=''; document.body.classList.remove('modal-open'); }
    });
  }
};
document.addEventListener('keydown', window._ariEscHandler);

// ========== PROGRAMS PAGE — Filter ==========
document.querySelectorAll('.pf-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pf-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.getAttribute('data-filter');
    const grid = document.getElementById('prog2Grid');
    if (!grid) return;
    grid.querySelectorAll('.prog2-card').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-cat') === filter) {
        card.style.display = '';
        setTimeout(() => card.classList.remove('visible'), 10);
        setTimeout(() => card.classList.add('visible'), 50);
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ========== RESEARCH PAGE — Publication Filter ==========
document.querySelectorAll('.pub-ftab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pub-ftab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.getAttribute('data-pubfilter');
    document.querySelectorAll('.pub2-item').forEach(item => {
      if (filter === 'all' || item.getAttribute('data-pubtype') === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ========== ABSTRACT MODAL ==========
function openAbstractModal(title, content) {
  const modal = document.getElementById('abstractModal');
  if (!modal) return;
  document.getElementById('abstractModalTitle').textContent = title;
  document.getElementById('abstractModalContent').textContent = content;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-open');
}
window.openAbstractModal = openAbstractModal;

// ========== RESEARCH PROJECT MODAL DATA ==========
const projectData = {
  'research-culture': {
    title: 'Research Culture Development in Bangladeshi Universities',
    status: 'Ongoing',
    year: '2024–2025',
    category: 'Education Research',
    description: 'A multi-institutional study on research participation rates, barriers, and motivators among undergraduate students across Bangladesh.',
    methodology: ['Survey Design', 'Quantitative Analysis', 'Multi-institutional Sampling', 'SPSS Analysis', 'Descriptive Statistics'],
    researchers: [
      { name: 'Md. Rukonuzzaman Rukon', role: 'Principal Investigator', linkedin: 'https://www.linkedin.com/in/rukonozzaman-rukon-a944b628b/' },
      { name: 'Md. Ador Hossain', role: 'Co-Investigator', linkedin: '#' },
      { name: 'Futanta Chakma', role: 'Research Associate', linkedin: 'https://www.linkedin.com/in/futanta-chakma/' },
      { name: 'Mahmud Hossain', role: 'Data Analyst', linkedin: 'https://www.linkedin.com/in/mahmud-tanjid/' }
    ]
  },
  'digital-tools': {
    title: 'Digital Tools for Academic Research: Adoption & Impact',
    status: 'Ongoing',
    year: '2024–2025',
    category: 'Technology Research',
    description: 'Evaluating the adoption of digital research tools (Zotero, SPSS, R) among Bangladeshi academics and measuring effectiveness.',
    methodology: ['Mixed Methods', 'Pre/Post Assessment', 'Likert Scale Surveys', 'Regression Analysis', 'Interview Protocol'],
    researchers: [
      { name: 'Samrat Kumar Dev Sharma', role: 'Principal Investigator', linkedin: 'https://www.linkedin.com/in/samrat-kumar-dev-sharma-b0a5a9212/' },
      { name: 'Md. Ador Hossain', role: 'Co-Investigator', linkedin: '#' },
      { name: 'Karim Al-Amin', role: 'Research Assistant', linkedin: 'https://www.linkedin.com/in/' }
    ]
  },
  'evidence-healthcare': {
    title: 'Evidence-Based Practice in Healthcare Settings',
    status: 'Ongoing',
    year: '2023–2025',
    category: 'Health Research',
    description: 'Assessment of evidence-based practice adoption among healthcare professionals in clinical and community health settings.',
    methodology: ['Clinical Observation', 'Structured Interviews', 'SPSS Analysis', 'Systematic Review', 'Purposive Sampling'],
    researchers: [
      { name: 'Futanta Chakma', role: 'Principal Investigator', linkedin: 'https://www.linkedin.com/in/futanta-chakma/' },
      { name: 'Mahmud Hossain', role: 'Co-Investigator', linkedin: 'https://www.linkedin.com/in/mahmud-tanjid/' },
      { name: 'Md. Rukonuzzaman Rukon', role: 'Methodology Advisor', linkedin: 'https://www.linkedin.com/in/rukonozzaman-rukon-a944b628b/' },
      { name: 'Nusrat Islam', role: 'Survey Design Lead', linkedin: 'https://www.linkedin.com/in/' },
      { name: 'Tasneem Ahmed', role: 'Data Collection', linkedin: 'https://www.linkedin.com/in/' }
    ]
  },
  'barriers-graduate': {
    title: 'Barriers to Research Participation Among Graduate Students',
    status: 'Completed',
    year: '2023',
    category: 'Education Research',
    description: 'A comprehensive survey study identifying key barriers to research engagement in Bangladeshi universities with actionable recommendations.',
    methodology: ['Probability Sampling', 'Structured Questionnaire', 'Factor Analysis', 'Thematic Analysis', 'SPSS'],
    researchers: [
      { name: 'Md. Rukonuzzaman Rukon', role: 'Principal Investigator', linkedin: 'https://www.linkedin.com/in/rukonozzaman-rukon-a944b628b/' },
      { name: 'Md. Ador Hossain', role: 'Co-Investigator', linkedin: '#' },
      { name: 'Sabbir Biswas', role: 'Field Coordinator', linkedin: 'https://www.linkedin.com/in/' },
      { name: 'Maliha Rahman', role: 'Documentation Lead', linkedin: 'https://www.linkedin.com/in/' }
    ]
  },
  'spss-curriculum': {
    title: 'Introduction of SPSS Training in Academic Curriculum',
    status: 'Completed',
    year: '2023',
    category: 'Training Research',
    description: 'Pilot program evaluating the impact of SPSS training on student research capacity and academic output quality.',
    methodology: ['Quasi-experimental Design', 'Pre-Post Testing', 'Control Group', 'SPSS Analysis', 'Competency Assessment'],
    researchers: [
      { name: 'Samrat Kumar Dev Sharma', role: 'Principal Investigator', linkedin: 'https://www.linkedin.com/in/samrat-kumar-dev-sharma-b0a5a9212/' },
      { name: 'Md. Ador Hossain', role: 'Curriculum Lead', linkedin: '#' },
      { name: 'Rafiqul Hasan', role: 'Content Development', linkedin: 'https://www.linkedin.com/in/' }
    ]
  },
  'ai-research': {
    title: 'AI & Machine Learning in Academic Research',
    status: 'Upcoming',
    year: '2025–2026',
    category: 'AI Research',
    description: 'Exploring the intersection of AI tools and academic research workflows in South Asia, with focus on automation and productivity.',
    methodology: ['Literature Review', 'User Testing', 'Workflow Analysis', 'Quantitative Survey', 'A/B Testing'],
    researchers: [
      { name: 'Samrat Kumar Dev Sharma', role: 'Lead Researcher', linkedin: 'https://www.linkedin.com/in/' },
      { name: 'Mahmud Hossain', role: 'Co-Investigator', linkedin: 'https://www.linkedin.com/in/mahmud-tanjid/' }
    ]
  },
  'open-access': {
    title: 'Open Access Research Initiative',
    status: 'Upcoming',
    year: '2025',
    category: 'Open Science',
    description: 'Promoting open-access publishing and research dissemination across Bangladeshi institutions and beyond.',
    methodology: ['Policy Analysis', 'Institutional Survey', 'Comparative Study', 'Stakeholder Interviews'],
    researchers: [
      { name: 'Mahmud Hossain', role: 'Principal Investigator', linkedin: 'https://www.linkedin.com/in/mahmud-tanjid/' },
      { name: 'Md. Rukonuzzaman Rukon', role: 'Co-Investigator', linkedin: 'https://www.linkedin.com/in/rukonozzaman-rukon-a944b628b/' }
    ]
  }
};

function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const statusColors = { Ongoing: 'var(--accent)', Completed: 'var(--violet)', Upcoming: 'var(--accent2)' };
  const statusBg = { Ongoing: 'rgba(96,165,250,0.12)', Completed: 'rgba(139,92,246,0.12)', Upcoming: 'rgba(129,140,248,0.1)' };

  document.getElementById('pmStatus').textContent = data.status;
  document.getElementById('pmStatus').style.color = statusColors[data.status] || 'var(--accent)';
  document.getElementById('pmStatus').style.background = statusBg[data.status] || 'rgba(96,165,250,0.12)';
  document.getElementById('pmYear').textContent = data.year;
  document.getElementById('pmCategory').textContent = data.category;
  document.getElementById('pmTitle').textContent = data.title;
  document.getElementById('pmDesc').textContent = data.description;

  document.getElementById('pmMethodology').innerHTML = data.methodology.map(m =>
    `<span class="pm-method-tag">${m}</span>`
  ).join('');

  document.getElementById('pmResearchers').innerHTML = data.researchers.map(r => `
    <div class="pm-researcher">
      <div class="pm-researcher-info">
        <span class="pm-researcher-name">${r.name}</span>
        <span class="pm-researcher-role">${r.role}</span>
      </div>
      <a href="${r.linkedin}" target="_blank" rel="noopener noreferrer" class="pm-linkedin-btn">
        <i class="fab fa-linkedin-in"></i> LinkedIn
      </a>
    </div>
  `).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-open');
}
window.openProjectModal = openProjectModal;

const projectModalClose = document.getElementById('projectModalClose');
if (projectModalClose) {
  projectModalClose.addEventListener('click', () => {
    document.getElementById('projectModal').classList.remove('open');
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  });
}
const projectModal = document.getElementById('projectModal');
if (projectModal) {
  projectModal.addEventListener('click', e => {
    if (e.target === projectModal) {
      projectModal.classList.remove('open');
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
  });
}

// ========== GALLERY MODAL ==========
const galleryItems = [
  {
    id: 'g1',
    title: 'SPSS Research Training Session',
    date: 'March 2025',
    category: 'Training',
    description: 'Participants engaged in hands-on SPSS data analysis during ARI\'s flagship training program. Over 40 researchers attended this intensive session covering regression analysis and hypothesis testing.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
  },
  {
    id: 'g2',
    title: 'Data Analysis Workshop',
    date: 'February 2025',
    category: 'Workshop',
    description: 'A focused data analysis workshop where participants learned advanced SPSS techniques. The session included live demonstrations of data cleaning and statistical visualization methods.',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'
  },
  {
    id: 'g3',
    title: 'Research Team Collaboration',
    date: 'January 2025',
    category: 'Team',
    description: 'ARI founders and research interns collaborating on ongoing research projects. Regular team meetings ensure all active projects stay on track and aligned with ARI\'s mission.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
  },
  {
    id: 'g4',
    title: 'International Research Conference',
    date: 'December 2024',
    category: 'Conference',
    description: 'ARI researchers presented their findings at an international academic conference. The presentation on research capacity building received outstanding feedback from international scholars.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
  },
  {
    id: 'g5',
    title: 'Statistical Methods Lab',
    date: 'November 2024',
    category: 'Lab',
    description: 'Students working through advanced statistical methods in ARI\'s dedicated data analysis lab session. The lab covered multivariate analysis techniques using R and SPSS.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'
  },
  {
    id: 'g6',
    title: 'Academic Writing Seminar',
    date: 'October 2024',
    category: 'Seminar',
    description: 'Researchers sharpening their academic writing skills during ARI\'s intensive seminar. Topics covered included abstract writing, literature review structure, and journal submission strategies.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80'
  }
];

function openGalleryModal(itemId) {
  const data = galleryItems.find(g => g.id === itemId);
  if (!data) return;
  const modal = document.getElementById('galleryModal');
  if (!modal) return;

  document.getElementById('gmImg').src = data.img;
  document.getElementById('gmImg').alt = data.title;
  document.getElementById('gmCategory').textContent = data.category;
  document.getElementById('gmTitle').textContent = data.title;
  document.getElementById('gmDate').textContent = data.date;
  document.getElementById('gmDesc').textContent = data.description;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-open');
}
window.openGalleryModal = openGalleryModal;

const galleryModalClose = document.getElementById('galleryModalClose');
if (galleryModalClose) {
  galleryModalClose.addEventListener('click', () => {
    document.getElementById('galleryModal').classList.remove('open');
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  });
}
const galleryModal = document.getElementById('galleryModal');
if (galleryModal) {
  galleryModal.addEventListener('click', e => {
    if (e.target === galleryModal) {
      galleryModal.classList.remove('open');
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
  });
}

const abstractModalClose = document.getElementById('abstractModalClose');
if (abstractModalClose) {
  abstractModalClose.addEventListener('click', () => {
    document.getElementById('abstractModal').classList.remove('open');
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  });
}
const abstractModal = document.getElementById('abstractModal');
if (abstractModal) {
  abstractModal.addEventListener('click', e => {
    if (e.target === abstractModal) {
      abstractModal.classList.remove('open');
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
  });
}

// ========== MEDIA PAGE — Tab Switching ==========
const articleContents = {
  blog1: {
    cat: 'Research Tips',
    icon: 'fas fa-lightbulb',
    title: '10 Essential Steps to Writing a Strong Research Proposal',
    content: `A research proposal is the foundation of any successful academic project. Here are 10 essential steps:\n\n1. Identify a clear, relevant research problem.\n2. Review existing literature thoroughly.\n3. Define clear research objectives and questions.\n4. Choose an appropriate methodology.\n5. Describe your data collection plan.\n6. Outline your analysis strategy.\n7. Consider ethical implications.\n8. Create a realistic timeline.\n9. Prepare a budget estimate.\n10. Write a compelling introduction and conclusion.\n\nFollowing these steps significantly increases the likelihood of proposal approval and successful research completion. ARI provides guidance on all stages of this process through its consultation services.`
  },
  blog2: {
    cat: 'Data Analysis',
    icon: 'fas fa-chart-line',
    title: 'Why SPSS Remains Essential for Social Science Research',
    content: `Despite the rise of R and Python, SPSS continues to be one of the most widely used statistical tools in social science research. Here's why:\n\nSPSS offers an intuitive graphical user interface that makes it accessible to researchers without programming backgrounds. It handles descriptive statistics, inferential tests, regression, and factor analysis with ease.\n\nIn Bangladesh and South Asia, SPSS remains the dominant tool in academic institutions. Its output formats are directly suitable for APA-style reporting, widely required by journals.\n\nARI's SPSS training programs are designed to help researchers leverage the full power of the software, from basic data entry to advanced multivariate analysis.`
  },
  blog3: {
    cat: 'Publication',
    icon: 'fas fa-upload',
    title: 'How to Choose the Right Journal for Your Research Paper',
    content: `Selecting the right journal is one of the most important decisions in the publication process. Consider these key factors:\n\n1. Scope and Audience: Ensure your paper aligns with the journal's subject area and target readership.\n\n2. Impact Factor & Indexing: Scopus and ISI-indexed journals carry more academic weight.\n\n3. Open Access Options: Assess whether open access fits your needs and funding requirements.\n\n4. Submission Requirements: Match your manuscript format to the journal's author guidelines.\n\n5. Review Timeline: Consider the average time from submission to decision.\n\nARI's publication support service assists researchers in identifying the best journals for their work and guides them through the entire submission process.`
  },
  n1: {
    cat: 'Active Notice',
    icon: 'fas fa-bell',
    title: 'New Batch: IBM SPSS Training — Registration Open',
    content: `A new batch of IBM SPSS & Research-Ready Data Analysis training is now accepting registrations.\n\nProgram Details:\n- Duration: 4 weeks\n- Format: Online + In-person sessions available\n- Level: Beginner to Advanced\n- Certificate: Provided upon completion\n- Seats: Limited (first-come, first-served)\n\nTopics covered include descriptive statistics, hypothesis testing, regression analysis, ANOVA, and complete data cleaning workflows.\n\nTo register, email research.ari.bd@gmail.com with your name, institution, and current research background.`
  },
  n2: {
    cat: 'Active Notice',
    icon: 'fas fa-bell',
    title: 'Academic Writing Workshop — 3-Day Intensive Program',
    content: `ARI's Academic Writing Workshop is scheduled for June 2025.\n\nWorkshop Details:\n- Duration: 3 days (intensive)\n- Format: In-person (Dhaka) with online option\n- Focus: Research paper writing, literature review, abstract writing, journal submission\n- Certificate: Provided to all participants\n\nThis workshop is designed for graduate students, researchers, and faculty members seeking to improve the quality and impact of their academic writing. Experienced facilitators will provide hands-on guidance throughout the program.\n\nContact research.ari.bd@gmail.com to register your interest.`
  },
  n3: {
    cat: 'Notice',
    icon: 'fas fa-user-plus',
    title: 'ARI Internship Applications Open',
    content: `Research assistant positions are now open at ARI for the 2025 academic year.\n\nAvailable Roles:\n- Research Assistant (Data Analysis)\n- Content & Publication Intern\n- Survey & Methodology Intern\n- Training Support Intern\n- Digital & Outreach Intern\n\nEligibility: Current university students, recent graduates, or early-career researchers.\n\nTo apply, send your CV and a brief cover letter explaining your interest to research.ari.bd@gmail.com with subject: "ARI Internship Application - [Role Name]".`
  },
  n4: {
    cat: 'Notice',
    icon: 'fas fa-file-alt',
    title: 'Publication Support Drive — Free Initial Consultation',
    content: `ARI is offering free initial consultation sessions for researchers seeking publication guidance.\n\nServices Available:\n- Journal selection advice\n- Manuscript review and feedback\n- Cover letter writing assistance\n- Peer review response guidance\n- APA/MLA/Vancouver formatting support\n\nThis initiative is available to all researchers regardless of experience level. Priority will be given to researchers with manuscripts ready for submission.\n\nTo schedule your free consultation, email research.ari.bd@gmail.com with your manuscript title and target journal.`
  },
  n5: {
    cat: 'Notice',
    icon: 'fas fa-code',
    title: 'R Programming Workshop — Beginner-Friendly, Certificate Provided',
    content: `An R Programming Workshop for data analysis has been scheduled for mid-2025.\n\nWorkshop Details:\n- Duration: Full day + follow-up session\n- Format: Hands-on practical sessions\n- Prerequisites: None (beginner-friendly)\n- Certificate: Awarded to all attendees\n- Software: Free (R + RStudio)\n\nTopics include R basics, data manipulation with tidyverse, visualization with ggplot2, and basic statistical analysis. Participants are encouraged to bring their own laptops.\n\nContact research.ari.bd@gmail.com to pre-register.`
  }
};

document.querySelectorAll('.med-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.med-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.getAttribute('data-med');
    document.querySelectorAll('.med-section').forEach(sec => {
      const secId = sec.getAttribute('data-medsec');
      if (filter === 'all' || secId === filter) {
        sec.classList.remove('hidden-section');
      } else {
        sec.classList.add('hidden-section');
      }
    });
  });
});

// Blog read buttons
document.querySelectorAll('.b2c-read').forEach(btn => {
  btn.addEventListener('click', () => {
    const articleId = btn.getAttribute('data-article');
    const data = articleContents[articleId];
    if (!data) return;
    openArticleModal(data);
  });
});

// Notice view buttons
document.querySelectorAll('.n2i-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const noticeId = btn.getAttribute('data-notice');
    const data = articleContents[noticeId];
    if (!data) return;
    openArticleModal(data);
  });
});

function openArticleModal(data) {
  const modal = document.getElementById('articleModal');
  if (!modal) return;
  document.getElementById('articleModalCat').textContent = data.cat;
  document.getElementById('articleModalTitle').textContent = data.title;
  document.getElementById('articleModalIcon').innerHTML = `<i class="${data.icon}"></i>`;
  const contentEl = document.getElementById('articleModalContent');
  contentEl.innerHTML = data.content.split('\n').map(line =>
    line.trim() ? `<p style="margin-bottom:.6rem">${line}</p>` : ''
  ).join('');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-open');
}

const articleModal = document.getElementById('articleModal');
const articleModalClose = document.getElementById('articleModalClose');
if (articleModalClose) {
  articleModalClose.addEventListener('click', () => {
    articleModal.classList.remove('open');
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  });
}
if (articleModal) {
  articleModal.addEventListener('click', e => {
    if (e.target === articleModal) {
      articleModal.classList.remove('open');
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
  });
}

// ========== NEWS MODAL ==========
const newsData = {
  news1: {
    icon: 'fas fa-graduation-cap',
    cat: 'Training',
    date: '15 May 2025',
    title: 'ARI Launches New Research Training Cycle',
    content: [
      'Advanced Research and Innovation (ARI) has officially announced the launch of a new cycle of structured research training programs for June–August 2025. This cycle represents ARI\'s most comprehensive offering to date, designed to serve university students, academic researchers, and working professionals across Bangladesh.',
      'The new cycle covers four core areas: IBM SPSS & Research-Ready Data Analysis, Data Analysis with Stata, Introduction to R, and Academic Writing for Publication. Each program is delivered in a blended format, combining live online sessions with recorded materials for flexible access.',
      'Participants who complete a program will receive a certificate of completion from ARI, recognized by academic institutions and research organizations. Early registration discounts are available until 31 May 2025.',
      'To register or inquire about specific programs, contact ARI at research.ari.bd@gmail.com with your name, institution, and area of interest.'
    ],
    tags: ['Training', 'SPSS', 'R', 'Stata', 'Academic Writing', 'Certificate']
  },
  news2: {
    icon: 'fas fa-handshake',
    cat: 'Services',
    date: '3 April 2025',
    title: 'ARI Expands Publication Support Program',
    content: [
      'ARI has significantly expanded its publication support services to provide end-to-end assistance for researchers seeking to publish in Scopus and ISI-indexed international journals. The expanded program covers every stage of the publication journey, from manuscript preparation to final acceptance.',
      'Key additions include dedicated journal selection consultations, abstract and title optimization, manuscript formatting for target journals, cover letter drafting, and structured peer review response guidance. Researchers at any career stage — from students submitting their first paper to experienced academics seeking higher-impact venues — are eligible to apply.',
      'As part of a special outreach initiative, ARI is offering free initial consultation sessions for eligible researchers. These 30-minute consultations will assess the current state of a manuscript and recommend a clear path to submission.',
      'This expansion reflects ARI\'s commitment to strengthening Bangladesh\'s academic publishing footprint in international scholarly databases. Interested researchers can apply by emailing research.ari.bd@gmail.com with a brief description of their manuscript and target journal.'
    ],
    tags: ['Publication', 'Scopus', 'ISI', 'Peer Review', 'Journal Submission', 'Free Consultation']
  },
  news3: {
    icon: 'fas fa-users',
    cat: 'Team',
    date: '18 March 2025',
    title: 'New Cohort of Research Interns Joins ARI',
    content: [
      'ARI is pleased to welcome a new cohort of dedicated research interns who have joined the organization for the 2025 academic year. This cohort brings fresh energy and diverse skills to ARI\'s growing team, reinforcing the organization\'s capacity to deliver high-quality research support and training.',
      'The new interns are distributed across five functional areas: Data Analysis, Content & Publication Support, Survey & Methodology Design, Training Coordination, and Digital Outreach. Each intern will work alongside ARI founders and senior team members on real ongoing research projects, gaining hands-on experience in academic research and organizational operations.',
      'ARI\'s internship program is designed to develop future researchers by pairing theoretical knowledge with practical exposure. Interns receive mentorship, skill development workshops, and an official experience letter upon successful completion of the program.',
      'ARI continues to accept applications for research internships on a rolling basis. Students and early-career researchers interested in joining the team can send their CV and a brief cover letter to research.ari.bd@gmail.com.'
    ],
    tags: ['Internship', 'Team', 'Research Assistants', 'Mentorship', 'Capacity Building']
  },
  news4: {
    icon: 'fas fa-trophy',
    cat: 'Achievement',
    date: '7 February 2025',
    title: 'ARI Researchers Present at International Conference',
    content: [
      'ARI co-founders and researchers delivered a well-received presentation at an international research methods conference in early February 2025. The presentation focused on two interconnected themes: building research capacity in emerging academic institutions and measuring the impact of digital tool adoption (SPSS, R, Zotero) on research output quality.',
      'The findings, drawn from ARI\'s ongoing multi-institutional study on research culture in Bangladeshi universities, attracted significant interest from international scholars working on similar capacity-building initiatives in South and Southeast Asia. Attendees noted the methodological rigor of ARI\'s data collection approach and the relevance of its recommendations.',
      'The conference provided an important opportunity to connect ARI\'s work with a broader global research community. Several collaborative research proposals emerged from the event, with potential partners from three countries expressing interest in co-authoring publications with ARI researchers.',
      'This recognition at the international level underscores ARI\'s growing reputation as a credible contributor to the global conversation on research education and institutional capacity building. Details of upcoming collaborative projects will be announced in future updates.'
    ],
    tags: ['Conference', 'International', 'Research Culture', 'Collaboration', 'Publication', 'Capacity Building']
  }
};

function openNewsModal(newsId) {
  const data = newsData[newsId];
  if (!data) return;
  const modal = document.getElementById('newsModal');
  if (!modal) return;

  document.getElementById('newsModalIcon').innerHTML = `<i class="${data.icon}"></i>`;
  document.getElementById('newsModalCat').textContent = data.cat;
  document.getElementById('newsModalDateText').textContent = data.date;
  document.getElementById('newsModalTitle').textContent = data.title;

  const contentEl = document.getElementById('newsModalContent');
  contentEl.innerHTML = data.content.map(p => `<p>${p}</p>`).join('');

  const tagsEl = document.getElementById('newsModalTags');
  tagsEl.innerHTML = data.tags.map(t => `<span>${t}</span>`).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-open');
}
window.openNewsModal = openNewsModal;

function closeNewsModal() {
  const modal = document.getElementById('newsModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
}

document.addEventListener('DOMContentLoaded', () => {
  const newsModalClose = document.getElementById('newsModalClose');
  if (newsModalClose) newsModalClose.addEventListener('click', closeNewsModal);

  const newsModal = document.getElementById('newsModal');
  if (newsModal) {
    newsModal.addEventListener('click', e => {
      if (e.target === newsModal) closeNewsModal();
    });
  }

  document.querySelectorAll('.news2-card-clickable').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-news');
      if (id) openNewsModal(id);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = card.getAttribute('data-news');
        if (id) openNewsModal(id);
      }
    });
  });
});
document.querySelectorAll('.intern-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    if (cursor) { cursor.style.width = '18px'; cursor.style.height = '18px'; }
    if (follower) { follower.style.width = '50px'; follower.style.height = '50px'; follower.style.opacity = '0.6'; }
  });
  el.addEventListener('mouseleave', () => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    if (cursor) { cursor.style.width = '10px'; cursor.style.height = '10px'; }
    if (follower) { follower.style.width = '36px'; follower.style.height = '36px'; follower.style.opacity = '1'; }
  });
});
// ========== HOME NOTICES — Navigate to media section ==========
document.querySelectorAll('.notice-clickable').forEach(item => {
  item.addEventListener('click', () => {
    const page = item.getAttribute('data-page');
    const section = item.getAttribute('data-med-section');
    if (!page) return;

    // Navigate to media page
    navigateTo(page);

    // After navigation, activate the correct tab
    setTimeout(() => {
      const targetTab = document.querySelector(`.med-tab[data-med="${section}"]`);
      if (targetTab) {
        // Simulate tab click
        document.querySelectorAll('.med-tab').forEach(t => t.classList.remove('active'));
        targetTab.classList.add('active');
        document.querySelectorAll('.med-section').forEach(sec => {
          const secId = sec.getAttribute('data-medsec');
          if (section === 'all' || secId === section) {
            sec.classList.remove('hidden-section');
          } else {
            sec.classList.add('hidden-section');
          }
        });

        // Scroll to the section
        const targetSec = document.querySelector(`.med-section[data-medsec="${section}"]`);
        if (targetSec) {
          setTimeout(() => {
            targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 200);
        }
      }
    }, 150);
  });
});

// ========== CUSTOM GLASSY DROPDOWN ==========
(function() {
  const select = document.getElementById('subjectSelect');
  const hidden = document.getElementById('subjectHidden');
  if (!select) return;

  const selected = select.querySelector('.cs-selected span');
  const options = select.querySelectorAll('.cs-option');

  // Toggle open/close
  select.querySelector('.cs-selected').addEventListener('click', e => {
    e.stopPropagation();
    select.classList.toggle('open');
  });

  // Pick an option
  options.forEach(opt => {
    opt.addEventListener('click', e => {
      e.stopPropagation();
      options.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      selected.textContent = opt.textContent;
      if (hidden) hidden.value = opt.textContent;
      select.classList.remove('open');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', () => select.classList.remove('open'));
})();
