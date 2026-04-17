/* ============================================================
   CAFÉ MADERA — Main JavaScript
   ============================================================ */

/* --- Image fallbacks ------------------------------------- */
(function () {
  const PALETTES = {
    coffee: { bg: '#2C1A0E', accent: '#C9A47A' },
    food:   { bg: '#3A1F10', accent: '#E8A85C' },
    beans:  { bg: '#1A0D08', accent: '#A87547' },
    person: { bg: '#4A2F1F', accent: '#E0D0BB' },
    pastry: { bg: '#5A3A1F', accent: '#F0C896' }
  };

  function categoryFor(img) {
    const alt  = (img.alt || '').toLowerCase();
    const cls  = (img.className || '').toLowerCase() + ' ' +
                 ((img.parentElement && img.parentElement.className) || '').toLowerCase();
    if (/avatar|anagarcia|carlitos|sofiaxoaxaca|barista|persona/.test(alt + cls)) return 'person';
    if (/grano|bean|intenso|smooth|aromátic|aromatic/.test(alt + cls))            return 'beans';
    if (/concha|pan dulce|pastel|pastry/.test(alt + cls))                         return 'pastry';
    if (/chilaquile|huevo|enchilada|tamal|toast|desayun|breakfast|post/.test(alt + cls)) return 'food';
    return 'coffee';
  }

  function iconPath(cat) {
    switch (cat) {
      case 'beans':
        return '<g><ellipse cx="0" cy="-30" rx="42" ry="62" transform="rotate(-18)"/><ellipse cx="10" cy="40" rx="42" ry="62" transform="rotate(18 10 40)"/></g>';
      case 'person':
        return '<g><circle cx="0" cy="-30" r="42"/><path d="M-70 80 q70 -90 140 0 v40 h-140 z"/></g>';
      case 'food':
        return '<g><circle cx="0" cy="0" r="80" fill="none" stroke-width="10"/><circle cx="0" cy="0" r="48"/></g>';
      case 'pastry':
        return '<g><path d="M-70 20 q70 -100 140 0 q-10 40 -70 40 q-60 0 -70 -40 z"/><path d="M-40 0 q10 -20 30 0 M0 -10 q10 -20 30 0" fill="none" stroke-width="6"/></g>';
      default: /* coffee cup */
        return '<g><path d="M-60 -40 h110 v50 a50 50 0 0 1 -50 50 h-10 a50 50 0 0 1 -50 -50 z"/><path d="M50 -25 q40 10 0 45" fill="none" stroke-width="10"/><path d="M-30 -70 q0 -20 15 -15 M0 -70 q0 -20 15 -15 M30 -70 q0 -20 15 -15" fill="none" stroke-width="6"/></g>';
    }
  }

  function makeSVG(cat, w, h) {
    const p = PALETTES[cat] || PALETTES.coffee;
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="g" cx="35%" cy="30%" r="85%">
            <stop offset="0" stop-color="${p.accent}" stop-opacity=".45"/>
            <stop offset="1" stop-color="${p.bg}"/>
          </radialGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#g)"/>
        <g transform="translate(${w / 2} ${h / 2})" fill="${p.accent}" stroke="${p.accent}" opacity="0.55">
          ${iconPath(cat)}
        </g>
      </svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  function handle(img) {
    if (!img || img.dataset.fallback === '1') return;
    img.dataset.fallback = '1';
    const w = img.clientWidth  || img.naturalWidth  || 800;
    const h = img.clientHeight || img.naturalHeight || 600;
    img.src = makeSVG(categoryFor(img), Math.max(w, 100), Math.max(h, 100));
  }

  document.addEventListener('error', (e) => {
    const t = e.target;
    if (t && t.tagName === 'IMG') handle(t);
  }, true);

  function sweep() {
    document.querySelectorAll('img').forEach((img) => {
      if (img.complete && img.naturalWidth === 0) handle(img);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sweep);
  } else {
    sweep();
  }
})();

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

    "dishes.label":      "COCINA OAXAQUEÑA · HECHA HOY",
    "dishes.line1":      "Platillos",
    "dishes.line2":      "de la Casa.",
    "dishes.body":       "Recetas de la abuela, ingredientes del mercado. Cada plato sale de la cocina con chile, maíz, y memoria oaxaqueña.",
    "dishes.stat1":      "platillos",
    "dishes.stat2":      "desde las mañanas",
    "dishes.stat3":      "ingredientes locales",
    "dishes.tag1":       "EL FAVORITO",
    "dishes.tag2":       "NUEVO",
    "dishes.dish1":      "Chilaquiles Verdes",
    "dishes.desc1":      "Totopos crujientes, salsa verde de la casa, crema fresca, queso oaxaca y huevo estrellado.",
    "dishes.spicy1":     "🌶 Picor medio",
    "dishes.dish2":      "Huevos Rancheros",
    "dishes.desc2":      "Tortilla, frijoles refritos, salsa roja tatemada.",
    "dishes.dish3":      "Enchiladas de Mole",
    "dishes.desc3":      "Mole negro oaxaqueño de 28 ingredientes.",
    "dishes.dish4":      "Tamales Oaxaqueños",
    "dishes.desc4":      "Hoja de plátano, masa de maíz, mole.",
    "dishes.dish5":      "Avocado Toast",
    "dishes.desc5":      "Pan artesanal, aguacate, rábano, limón.",
    "dishes.cta":        "Ver Menú Completo",

    "pastries.label":    "PAN DULCE & PASTELES",
    "pastries.title1":   "Hecho con",
    "pastries.title2":   "Amor y Harina",
    "pastries.body":     "Nuestro pan dulce es elaborado cada mañana por manos oaxaqueñas. Conchas suaves, polvorones crujientes, cuernos de mantequilla — tradición en cada mordida.",
    "pastry.conchas":    "Conchas",
    "pastry.polvorones": "Polvorones",
    "pastry.cuernos":    "Cuernos de Mantequilla",
    "pastry.churros":    "Churros con Chocolate",
    "pastry.empanadas":  "Empanadas de Fruta",

    "products.label":    "GRANOS DE OAXACA · TOSTADOS LOS LUNES",
    "products.line1":    "Tres Granos.",
    "products.line2":    "Un Alma.",
    "products.body":     "Cosechados en fincas oaxaqueñas, tostados cada lunes por manos que conocen el grano. Elige tu perfil y llévalo a casa.",
    "products.heavy":    "Intenso & Amargo",
    "products.smooth":   "Smooth Criminal",
    "products.soft":     "Suave & Aromático",
    "products.cta":      "Ver Toda La Tienda",
    "products.note":     "Envío gratis en pedidos mayores a $500 MXN",
    "bean.dark":         "TUESTE OSCURO",
    "bean.medium":       "TUESTE MEDIO",
    "bean.light":        "TUESTE CLARO",
    "bean.notes1":       "Chocolate · Cacao · Especias",
    "bean.notes2":       "Caramelo · Avellana · Miel",
    "bean.notes3":       "Frutal · Cítrico · Floral",
    "bean.weight":       "/ 340g",
    "bean.add":          "Añadir",
    "bean.popular":      "MÁS VENDIDO",

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

    "dishes.label":      "OAXACAN KITCHEN · MADE TODAY",
    "dishes.line1":      "Signature",
    "dishes.line2":      "Plates.",
    "dishes.body":       "Grandma's recipes, market-fresh ingredients. Every plate leaves the kitchen with chile, corn, and Oaxacan memory.",
    "dishes.stat1":      "dishes",
    "dishes.stat2":      "from the morning",
    "dishes.stat3":      "local ingredients",
    "dishes.tag1":       "THE FAVORITE",
    "dishes.tag2":       "NEW",
    "dishes.dish1":      "Chilaquiles Verdes",
    "dishes.desc1":      "Crispy tortilla chips, house salsa verde, crema fresca, Oaxaca cheese and a sunny egg on top.",
    "dishes.spicy1":     "🌶 Medium heat",
    "dishes.dish2":      "Huevos Rancheros",
    "dishes.desc2":      "Tortilla, refried beans, fire-charred red salsa.",
    "dishes.dish3":      "Mole Enchiladas",
    "dishes.desc3":      "Oaxacan black mole with 28 ingredients.",
    "dishes.dish4":      "Oaxacan Tamales",
    "dishes.desc4":      "Banana leaf, corn masa, mole.",
    "dishes.dish5":      "Avocado Toast",
    "dishes.desc5":      "Sourdough, avocado, radish, lime.",
    "dishes.cta":        "See Full Menu",

    "pastries.label":    "PAN DULCE & PASTRIES",
    "pastries.title1":   "Made with",
    "pastries.title2":   "Love and Flour",
    "pastries.body":     "Our pan dulce is baked every morning by Oaxacan hands. Soft conchas, crunchy polvorones, butter croissants — tradition in every bite.",
    "pastry.conchas":    "Conchas",
    "pastry.polvorones": "Polvorones",
    "pastry.cuernos":    "Butter Croissants",
    "pastry.churros":    "Churros with Chocolate",
    "pastry.empanadas":  "Fruit Empanadas",

    "products.label":    "OAXACA BEANS · ROASTED EVERY MONDAY",
    "products.line1":    "Three Beans.",
    "products.line2":    "One Soul.",
    "products.body":     "Harvested from Oaxacan farms, roasted every Monday by hands that know the bean. Pick your profile and take it home.",
    "products.heavy":    "Heavy & Bitter",
    "products.smooth":   "Smooth Criminal",
    "products.soft":     "Soft & Aromatic",
    "products.cta":      "Shop The Whole Store",
    "products.note":     "Free shipping on orders over $500 MXN",
    "bean.dark":         "DARK ROAST",
    "bean.medium":       "MEDIUM ROAST",
    "bean.light":        "LIGHT ROAST",
    "bean.notes1":       "Chocolate · Cocoa · Spices",
    "bean.notes2":       "Caramel · Hazelnut · Honey",
    "bean.notes3":       "Fruity · Citrus · Floral",
    "bean.weight":       "/ 340g",
    "bean.add":          "Add",
    "bean.popular":      "BESTSELLER",

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

/* --- Navbar + scroll progress ---------------------------- */
const nav = $('#nav');
const scrollProgress = $('#scrollProgress');
let lastScrollY = 0;
let scrollTicking = false;

function onScrollFrame() {
  const y = window.pageYOffset;

  // Progress bar
  if (scrollProgress) {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (y / docH) * 100 : 0;
    scrollProgress.style.width = `${Math.min(Math.max(pct, 0), 100)}%`;
  }

  // Solid nav bg after initial scroll
  nav.classList.toggle('scrolled', y > 60);

  // Auto-hide on scroll down, reveal on scroll up
  const mobileOpen = nav.classList.contains('is-open-mobile');
  if (!mobileOpen) {
    if (y > 160 && y > lastScrollY + 4) {
      nav.classList.add('nav--hidden');
    } else if (y < lastScrollY - 4 || y <= 60) {
      nav.classList.remove('nav--hidden');
    }
  }

  lastScrollY = y;
  scrollTicking = false;
}

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(onScrollFrame);
    scrollTicking = true;
  }
}, { passive: true });

/* --- Mobile nav ------------------------------------------ */
const hamburger = $('#navHamburger');
const mobileMenu = $('#navMobile');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('is-open');
  hamburger.classList.toggle('is-open', open);
  hamburger.setAttribute('aria-expanded', open);
  nav.classList.toggle('is-open-mobile', open);
  if (open) nav.classList.remove('nav--hidden');
});
$$('.nav__mobile-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open-mobile');
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

  $$('.lang-toggle').forEach(el => el.dataset.lang = lang);
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
  $$('.reveal, .reveal-right, .reveal-up-big, .reveal-clip').forEach(el => revealObserver.observe(el));
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
  $$('.about__headline, .pastries__headline, .testimonials__heading, .dishes__heading, .products__heading').forEach(el => {
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

/* --- Magnetic buttons (desktop pointer only) -------------- */
const canMagnet = window.matchMedia('(pointer: fine)').matches
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canMagnet) {
  $$('.btn, .ig-follow-btn').forEach(btn => {
    const strength = 0.28;
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      btn.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* --- Init ------------------------------------------------ */
observeAll();
observeLines();
