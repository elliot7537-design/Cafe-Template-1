/* ============================================================
   CAFÉ MADERA — Main JavaScript
   ============================================================ */

/* --- Translations ---------------------------------------- */
const translations = {
  es: {
    "nav.granos":        "Granos",
    "nav.tienda":        "Tienda",
    "nav.menu":          "Nuestro Menú",
    "nav.testimonios":   "Testimonios",
    "nav.empleo":        "Empleo",
    "nav.contacto":      "Contacto",
    "nav.location":      "Oaxaca, México",

    "hero.eyebrow":      "#SINCAFE SOLO CAFE",
    "hero.line1":        "Café Que",
    "hero.line2":        "Despierta.",
    "hero.tagline":      "Tostado con carácter. Servido con alma.\nSin pretensiones, solo café de verdad.",
    "hero.cta1":         "Ordenar Ahora",
    "hero.cta2":         "Ver Nuestro Espacio",
    "hero.sideText":     "Despierta.\nTrabaja duro.\nRepite.",
    "hero.est":          "EST. 2015 — STILL HOT, ALIVE",

    "ticker.text":       "CAFÉ \u00b7 MATCHA \u00b7 TÉ \u00b7 PASTELES \u00b7 DESAYUNO \u00b7 PAN DULCE \u00b7 ESPRESSO \u00b7 GRANOS DE OAXACA \u00b7",

    "about.line1":       "Hecho a Mano.",
    "about.line2":       "Servido con Alma.",
    "about.body":        "No somos una franquicia. No seguimos tendencias. Tostamos, molemos y preparamos para los que ansían café de verdad — no un accesorio de estilo de vida. Granos de agricultores locales, tostados frescos, preparados con manos que no tiemblan.",
    "about.cta":         "Explorar Más →",
    "stats.years":       "Años",
    "stats.cups":        "Tazas Servidas",
    "stats.farms":       "Fincas Locales",

    "menu.label":        "LA CARTA · EST. 2015",
    "menu.title1":       "Bebidas &",
    "menu.title2":       "Platillos.",
    "menu.subtitle":     "Bebidas y platillos preparados con pasión y tradición mexicana.",
    "menu.coffee":       "Café",
    "menu.tea":          "Té",
    "menu.matcha":       "Matcha",
    "menu.breakfast":    "Desayuno",
    "menu.viewAll":      "Ver Todo",
    "menu.bestseller":   "BESTSELLER",
    "menu.new":          "NUEVO",

    "items.espresso":    "Espresso",
    "items.americano":   "Americano",
    "items.cafeOlla":    "Café de Olla",
    "items.latte":       "Latte",
    "items.cappuccino":  "Cappuccino",
    "items.hibisco":     "Té de Hibisco",
    "items.verde":       "Té Verde",
    "items.chai":        "Chai con Canela",
    "items.manzana":     "Té Manzana",
    "items.menta":       "Té de Menta",
    "items.matchaLatte":     "Matcha Latte",
    "items.matchaOat":       "Matcha con Avena",
    "items.matchaIce":       "Matcha Helado",
    "items.matchaCinnamon":  "Matcha con Canela",
    "items.matchaCold":      "Matcha Cold Brew",
    "items.chilaquiles": "Chilaquiles",
    "items.huevos":      "Huevos Rancheros",
    "items.avocado":     "Avocado Toast",
    "items.enchiladas":  "Enchiladas de Desayuno",
    "items.tamales":     "Tamales",

    "pastries.label":    "PAN DULCE & PASTELES",
    "pastries.title1":   "Hecho con",
    "pastries.title2":   "Amor y Harina",
    "pastries.body":     "Nuestro pan dulce es elaborado cada mañana por manos oaxaqueñas. Conchas suaves, polvorones crujientes, cuernos de mantequilla — tradición en cada mordida.",
    "pastry.conchas":    "Conchas",
    "pastry.polvorones": "Polvorones",
    "pastry.cuernos":    "Cuernos de Mantequilla",
    "pastry.churros":    "Churros con Chocolate",
    "pastry.empanadas":  "Empanadas de Fruta",

    "products.label":    "ROASTERY BEAN PRODUCTS",
    "products.bigWord1": "NUESTROS",
    "products.bigWord2": "BEANS",
    "products.bigWord3": "& PRODUCTOS",
    "products.heavy":    "Intenso &\nAmargo",
    "products.smooth":   "Smooth\nCriminal",
    "products.soft":     "Suave &\nAromático",
    "products.cta":      "Comprar Granos",

    "testimonials.line1": "Likes Reales,",
    "testimonials.line2": "Café Real.",
    "testimonials.sub":   "Lo que la comunidad publica desde nuestras mesas — sin filtros, sin pagos, solo amor.",
    "ig.tagged":      "Café Madera, Oaxaca",
    "ig.likes":       "Me gusta",
    "ig.follow":      "Síguenos en Instagram",
    "ig.followers":   "seguidores",
    "ig.tagged_count":"etiquetas",
    "ig.topPost":     "★ Top Post",
    "ig.new":         "NUEVO",
    "ig.foodie":      "🌮 Foodie Pick",
    "t1.caption":  " Vine por un café, me quedé por toda una semana ☕🫶 No hay nada igual en Oaxaca. El espresso aquí es vida. Sin mentiras.",
    "t1.time":     "hace 2 días",
    "t2.caption":  " El matcha con canela 🍵✨ No hay nada igual en el mundo. Ya es mi oficina favorita. Vengo todos los días.",
    "t2.time":     "hace 5 días",
    "t3.caption":  " Chilaquiles + café de olla = el desayuno perfecto 🌮☕ Regresaré este fin de semana sin duda. Oaxaca tiene el mejor café.",
    "t3.time":     "hace 1 semana",

    "footer.tagline":       "Tostado con carácter.\nOaxaca, México.",
    "footer.visitUs":       "Visítanos",
    "footer.address":       "Calle Independencia 42\nCentro Histórico\nOaxaca de Juárez, Oax.",
    "footer.hours":         "Horario",
    "footer.weekdays":      "Lun – Vie",
    "footer.weekends":      "Sáb – Dom",
    "footer.newsletter":    "Mantente Conectado",
    "footer.newsletterSub": "Suscríbete para recibir noticias sobre nuestros granos y eventos.",
    "footer.emailPlaceholder": "tu@email.com",
    "footer.subscribe":     "Suscribirse",
    "footer.rights":        "© 2025 Café Madera. Todos los derechos reservados.",
    "footer.privacy":       "Privacidad",
    "footer.terms":         "Términos",
    "footer.cookies":       "Cookies",
  },

  en: {
    "nav.granos":        "Beans",
    "nav.tienda":        "Shop",
    "nav.menu":          "Our Menu",
    "nav.testimonios":   "Testimonials",
    "nav.empleo":        "Careers",
    "nav.contacto":      "Contact Us",
    "nav.location":      "Oaxaca, Mexico",

    "hero.eyebrow":      "#NOCAFE JUSTCOFFEE",
    "hero.line1":        "Coffee That",
    "hero.line2":        "Wakes You.",
    "hero.tagline":      "Roasted with character. Served with soul.\nNo pretense, just real coffee.",
    "hero.cta1":         "Order Now",
    "hero.cta2":         "Visit Our Space",
    "hero.sideText":     "Wake up.\nWork hard.\nRepeat.",
    "hero.est":          "EST. 2015 — STILL HOT, ALIVE",

    "ticker.text":       "COFFEE \u00b7 MATCHA \u00b7 TEA \u00b7 PASTRIES \u00b7 BREAKFAST \u00b7 PAN DULCE \u00b7 ESPRESSO \u00b7 OAXACAN BEANS \u00b7",

    "about.line1":       "Crafted by Hand.",
    "about.line2":       "Served with Soul.",
    "about.body":        "We're not a franchise. We're not chasing trends. We roast, grind, and brew for the ones who crave real coffee — not a lifestyle accessory. Beans from local farmers, roasted fresh, crafted by hands that don't shake.",
    "about.cta":         "Explore More →",
    "stats.years":       "Years",
    "stats.cups":        "Cups Served",
    "stats.farms":       "Local Farms",

    "menu.label":        "THE MENU · EST. 2015",
    "menu.title1":       "Drinks &",
    "menu.title2":       "Plates.",
    "menu.subtitle":     "Drinks and dishes prepared with passion and Mexican tradition.",
    "menu.coffee":       "Coffee",
    "menu.tea":          "Tea",
    "menu.matcha":       "Matcha",
    "menu.breakfast":    "Breakfast",
    "menu.viewAll":      "View All",
    "menu.bestseller":   "BESTSELLER",
    "menu.new":          "NEW",

    "items.espresso":    "Espresso",
    "items.americano":   "Americano",
    "items.cafeOlla":    "Café de Olla",
    "items.latte":       "Latte",
    "items.cappuccino":  "Cappuccino",
    "items.hibisco":     "Hibiscus Tea",
    "items.verde":       "Green Tea",
    "items.chai":        "Cinnamon Chai",
    "items.manzana":     "Apple Tea",
    "items.menta":       "Mint Tea",
    "items.matchaLatte":     "Matcha Latte",
    "items.matchaOat":       "Oat Milk Matcha",
    "items.matchaIce":       "Iced Matcha",
    "items.matchaCinnamon":  "Matcha with Cinnamon",
    "items.matchaCold":      "Matcha Cold Brew",
    "items.chilaquiles": "Chilaquiles",
    "items.huevos":      "Huevos Rancheros",
    "items.avocado":     "Avocado Toast",
    "items.enchiladas":  "Breakfast Enchiladas",
    "items.tamales":     "Tamales",

    "pastries.label":    "PAN DULCE & PASTRIES",
    "pastries.title1":   "Made with",
    "pastries.title2":   "Love and Flour",
    "pastries.body":     "Our pan dulce is baked every morning by Oaxacan hands. Soft conchas, crunchy polvorones, butter croissants — tradition in every bite.",
    "pastry.conchas":    "Conchas",
    "pastry.polvorones": "Polvorones",
    "pastry.cuernos":    "Butter Croissants",
    "pastry.churros":    "Churros with Chocolate",
    "pastry.empanadas":  "Fruit Empanadas",

    "products.label":    "ROASTERY BEAN PRODUCTS",
    "products.bigWord1": "OUR",
    "products.bigWord2": "BEANS",
    "products.bigWord3": "& PRODUCTS",
    "products.heavy":    "Heavy &\nBitter",
    "products.smooth":   "Smooth\nCriminal",
    "products.soft":     "Soft &\nAromatic",
    "products.cta":      "Shop Beans",

    "testimonials.line1": "Real Likes,",
    "testimonials.line2": "Real Coffee.",
    "testimonials.sub":   "What our community posts from our tables — no filters, no payments, just love.",
    "ig.tagged":      "Café Madera, Oaxaca",
    "ig.likes":       "likes",
    "ig.follow":      "Follow us on Instagram",
    "ig.followers":   "followers",
    "ig.tagged_count":"tagged",
    "ig.topPost":     "★ Top Post",
    "ig.new":         "NEW",
    "ig.foodie":      "🌮 Foodie Pick",
    "t1.caption":  " Came for a coffee, stayed for a whole week ☕🫶 Nothing like it in Oaxaca. The espresso here is life. No lies.",
    "t1.time":     "2 days ago",
    "t2.caption":  " The cinnamon matcha 🍵✨ Nothing like it in the world. Already my favorite office. Here every day.",
    "t2.time":     "5 days ago",
    "t3.caption":  " Chilaquiles + café de olla = the perfect breakfast 🌮☕ Coming back this weekend for sure. Oaxaca has the best coffee.",
    "t3.time":     "1 week ago",

    "footer.tagline":       "Roasted with character.\nOaxaca, Mexico.",
    "footer.visitUs":       "Visit Us",
    "footer.address":       "42 Independencia Street\nHistoric Center\nOaxaca de Juárez, Oax.",
    "footer.hours":         "Hours",
    "footer.weekdays":      "Mon – Fri",
    "footer.weekends":      "Sat – Sun",
    "footer.newsletter":    "Stay Connected",
    "footer.newsletterSub": "Subscribe to get news about our beans and events.",
    "footer.emailPlaceholder": "you@email.com",
    "footer.subscribe":     "Subscribe",
    "footer.rights":        "© 2025 Café Madera. All rights reserved.",
    "footer.privacy":       "Privacy",
    "footer.terms":         "Terms",
    "footer.cookies":       "Cookies",
  }
};

/* --- State ----------------------------------------------- */
let currentLang = 'es';
let countersAnimated = false;

/* --- DOM Helpers ----------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* --- Loader ---------------------------------------------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    $('#loader').classList.add('is-hidden');
    document.body.classList.remove('loading');
    triggerHeroAnimations();
  }, 1600);
});

/* --- Hero entry animations ------------------------------- */
function triggerHeroAnimations() {
  $$('.hero-anim').forEach(el => {
    requestAnimationFrame(() => el.classList.add('is-live'));
  });
}

/* --- Parallax -------------------------------------------- */
const heroBg = $('#heroBg');
let ticking = false;
function updateParallax() {
  if (!heroBg) return;
  const scrolled = window.pageYOffset;
  const viewH = window.innerHeight;
  if (scrolled < viewH * 1.5) {
    heroBg.style.transform = `translateY(${scrolled * 0.35}px)`;
  }
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}, { passive: true });

/* --- Navbar scroll --------------------------------------- */
const nav = $('#nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.pageYOffset > 60);
}, { passive: true });

/* --- Mobile nav ------------------------------------------ */
const hamburger = $('#navHamburger');
const mobileMenu = $('#navMobile');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('is-open');
  hamburger.classList.toggle('is-open', open);
  hamburger.setAttribute('aria-expanded', open);
});
$$('.nav__mobile-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    hamburger.classList.remove('is-open');
  });
});

/* --- Language toggle ------------------------------------- */
function applyTranslations(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;

  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return;
    const text = t[key].replace(/\n/g, '<br>');
    el.innerHTML = text;
  });

  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });

  const toggleLabel = lang === 'es' ? 'EN' : 'ES';
  $$('.lang-toggle__text').forEach(el => el.textContent = toggleLabel);
}

function switchLanguage() {
  const els = $$('[data-i18n], [data-i18n-placeholder]');
  els.forEach(el => el.classList.add('lang-fade'));

  setTimeout(() => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyTranslations(currentLang);
    requestAnimationFrame(() => {
      els.forEach(el => el.classList.remove('lang-fade'));
    });
  }, 200);
}

$('#langToggle').addEventListener('click', switchLanguage);
$('#langToggleMobile').addEventListener('click', switchLanguage);

/* --- Intersection Observer ------------------------------- */
const observerOpts = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('is-visible');
    revealObserver.unobserve(el);

    if (el.classList.contains('about__stats') && !countersAnimated) {
      countersAnimated = true;
      animateCounters();
    }
  });
}, observerOpts);

function observeAll() {
  $$('.reveal, .reveal-right, .reveal-up-big').forEach(el => revealObserver.observe(el));
}

/* Heading line reveal — observe the parent heading, not children */
const headingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    $$('.reveal-line', entry.target).forEach((line, i) => {
      setTimeout(() => line.classList.add('is-visible'), i * 130);
    });
    headingObserver.unobserve(entry.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

function observeLines() {
  $$('.about__headline, .pastries__headline, .testimonials__heading').forEach(el => {
    headingObserver.observe(el);
  });
}

/* --- Counter Animation ----------------------------------- */
function animateCounters() {
  $$('.stat__number').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = value >= 1000
        ? value.toLocaleString('es-MX')
        : value;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target >= 1000 ? target.toLocaleString('es-MX') : target;
    }

    requestAnimationFrame(step);
  });
}

/* --- Smooth scroll --------------------------------------- */
$$('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = $(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = nav.offsetHeight;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* --- Instagram heart interactions ----------------------- */
$$('.ig-action--heart').forEach(btn => {
  btn.addEventListener('click', () => {
    const liked = btn.classList.toggle('is-liked');
    btn.classList.remove('heart-pop');
    void btn.offsetWidth; // reflow to restart animation
    btn.classList.add('heart-pop');

    const likesEl = btn.closest('.ig-post').querySelector('.ig-post__likes strong');
    if (!likesEl) return;
    const text = likesEl.textContent;
    const match = text.match(/[\d,]+/);
    if (!match) return;
    const current = parseInt(match[0].replace(/,/g, ''), 10);
    const next = liked ? current + 1 : current - 1;
    likesEl.textContent = text.replace(/[\d,]+/, next.toLocaleString('es-MX'));
  });
});

/* --- Ticker hover pause ---------------------------------- */
const tickerTrack = $('.ticker__track');
if (tickerTrack) {
  tickerTrack.addEventListener('mouseenter', () => {
    tickerTrack.style.animationPlayState = 'paused';
  });
  tickerTrack.addEventListener('mouseleave', () => {
    tickerTrack.style.animationPlayState = 'running';
  });
}

/* --- Init ------------------------------------------------ */
observeAll();
observeLines();
