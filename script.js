/**
 * =============================================
 * TRENDGEEKZONE v2 — script.js
 * Theme: Clothing · Figures · Accessories
 *
 * Replace each `affiliateUrl` with your real
 * Amazon / Flipkart affiliate link.
 * =============================================
 */

/* ══════════════════════════════════════════════
   PRODUCT DATA
   Categories: clothing | figures | accessories
══════════════════════════════════════════════ */
const PRODUCTS = [

  /* ── CLOTHING ───────────────────────────── */
  {
    id: 'C001',
    name: 'Oversized Graphic Streetwear Tee',
    category: 'clothing',
    price: 799,
    originalPrice: 1499,
    discount: '47%',
    rating: 4.4,
    reviewCount: 8200,
    description: 'Drop-shoulder fit, 100% cotton. Bold front print. Available in S–XXL.',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&q=80',
    store: 'amazon',
    affiliateUrl: 'https://amazon.in/s?k=oversized+graphic+tee',
    badge: 'deal',
  },
  {
    id: 'C002',
    name: 'Anime Print Hoodie — Unisex',
    category: 'clothing',
    price: 1299,
    originalPrice: 2499,
    discount: '48%',
    rating: 4.6,
    reviewCount: 5100,
    description: 'Fleece-lined, kangaroo pocket. Iconic anime artwork printed on both sides.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    store: 'flipkart',
    affiliateUrl: 'https://www.flipkart.com/search?q=anime+hoodie+unisex',
    badge: 'new',
  },
  {
    id: 'C003',
    name: 'Cargo Joggers — Utility Style',
    category: 'clothing',
    price: 999,
    originalPrice: 1799,
    discount: '44%',
    rating: 4.3,
    reviewCount: 3700,
    description: '6-pocket cargo joggers with elastic waistband. Perfect for street or gym.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80',
    store: 'amazon',
    affiliateUrl: 'https://amazon.in/s?k=cargo+joggers+utility',
    badge: null,
  },
  {
    id: 'C004',
    name: 'Vintage Washed Denim Jacket',
    category: 'clothing',
    price: 1899,
    originalPrice: 3499,
    discount: '46%',
    rating: 4.5,
    reviewCount: 2900,
    description: 'Pre-washed distressed finish. Classic collar, chest pockets. Timeless piece.',
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500&q=80',
    store: 'flipkart',
    affiliateUrl: 'https://www.flipkart.com/search?q=vintage+denim+jacket',
    badge: 'deal',
  },

  /* ── FIGURES ────────────────────────────── */
  {
    id: 'F001',
    name: 'Spider-Man No Way Home Action Figure — 6"',
    category: 'figures',
    price: 1299,
    originalPrice: 1999,
    discount: '35%',
    rating: 4.8,
    reviewCount: 11400,
    description: 'Articulated 6-inch figure with web-slinger accessories. Marvel Legends quality.',
    image: 'https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=500&q=80',
    store: 'amazon',
    affiliateUrl: 'https://amazon.in/s?k=spider-man+action+figure+6+inch',
    badge: 'deal',
  },
  {
    id: 'F002',
    name: 'Goku Ultra Instinct — Statue Figure',
    category: 'figures',
    price: 3499,
    originalPrice: 4999,
    discount: '30%',
    rating: 4.9,
    reviewCount: 4800,
    description: 'PVC collectible figure, 28cm tall. Ultra-detailed sculpt with aura effect base.',
    image: 'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=500&q=80',
    store: 'amazon',
    affiliateUrl: 'https://amazon.in/s?k=goku+ultra+instinct+figure',
    badge: 'rare',
  },
  {
    id: 'F003',
    name: 'LEGO Star Wars Darth Vader Helmet',
    category: 'figures',
    price: 5999,
    originalPrice: 7499,
    discount: '20%',
    rating: 4.9,
    reviewCount: 9200,
    description: '834 pieces. Life-size display model. Ages 18+. Perfect desk centrepiece.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80',
    store: 'amazon',
    affiliateUrl: 'https://amazon.in/s?k=lego+darth+vader+helmet',
    badge: 'rare',
  },
  {
    id: 'F004',
    name: 'Naruto Shippuden — Sage Mode Figurine',
    category: 'figures',
    price: 1799,
    originalPrice: 2499,
    discount: '28%',
    rating: 4.5,
    reviewCount: 3100,
    description: 'Hand-painted 20cm figurine. Stable weighted base. Great gift for anime fans.',
    image: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=500&q=80',
    store: 'flipkart',
    affiliateUrl: 'https://www.flipkart.com/search?q=naruto+sage+mode+figure',
    badge: 'new',
  },

  /* ── ACCESSORIES ────────────────────────── */
  {
    id: 'A001',
    name: 'Streetwear Snapback Cap — Embroidered',
    category: 'accessories',
    price: 499,
    originalPrice: 999,
    discount: '50%',
    rating: 4.3,
    reviewCount: 6700,
    description: 'Structured 6-panel snapback. Flat brim. Adjustable strap. One size fits most.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80',
    store: 'amazon',
    affiliateUrl: 'https://amazon.in/s?k=streetwear+snapback+cap',
    badge: 'deal',
  },
  {
    id: 'A002',
    name: 'Tactical Crossbody Sling Bag',
    category: 'accessories',
    price: 799,
    originalPrice: 1499,
    discount: '47%',
    rating: 4.4,
    reviewCount: 9800,
    description: 'Water-resistant nylon, USB charging port, multiple compartments. 5L capacity.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    store: 'flipkart',
    affiliateUrl: 'https://www.flipkart.com/search?q=tactical+crossbody+sling+bag',
    badge: null,
  },
  {
    id: 'A003',
    name: 'Enamel Pin Set — Pop Culture Icons',
    category: 'accessories',
    price: 349,
    originalPrice: 599,
    discount: '42%',
    rating: 4.6,
    reviewCount: 4200,
    description: 'Set of 5 hard enamel pins. Anime, games & superhero icons. Butterfly clasp.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80',
    store: 'amazon',
    affiliateUrl: 'https://amazon.in/s?k=enamel+pins+pop+culture',
    badge: 'new',
  },
  {
    id: 'A004',
    name: 'Anime Character Phone Case (iPhone/Android)',
    category: 'accessories',
    price: 299,
    originalPrice: 599,
    discount: '50%',
    rating: 4.2,
    reviewCount: 15600,
    description: 'Shockproof TPU case with raised edges. Multiple designs. Check listing for compatibility.',
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=500&q=80',
    store: 'flipkart',
    affiliateUrl: 'https://www.flipkart.com/search?q=anime+phone+case',
    badge: 'deal',
  },
];

/* ══════════════════════════════════════════════
   DOM REFS
══════════════════════════════════════════════ */
const $grid        = document.getElementById('productsGrid');
const $count       = document.getElementById('resultsCount');
const $noResults   = document.getElementById('noResults');
const $hamBtn      = document.getElementById('hamBtn');
const $mobileTray  = document.getElementById('mobileTray');
const $scrollTop   = document.getElementById('scrollTop');

// Collect ALL filter buttons (header + mobile tray)
const $filterBtns  = document.querySelectorAll('.filter-btn');

/* ══════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════ */

/** Format number as ₹ Indian Rupees */
function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

/** Render star characters from a numeric rating */
function stars(r) {
  const full  = Math.floor(r);
  const empty = 5 - Math.ceil(r);
  const half  = 5 - full - empty;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/** Badge markup */
function badgeHTML(badge) {
  const map = {
    deal: '<span class="badge badge-deal">🔥 Deal</span>',
    new:  '<span class="badge badge-new">✨ New</span>',
    rare: '<span class="badge badge-rare">💎 Rare</span>',
  };
  return badge ? (map[badge] || '') : '';
}

/** Store label */
function storeLabel(store) {
  return store === 'amazon' ? 'Amazon' : 'Flipkart';
}

/* External link SVG */
const EXT_SVG = `<svg class="ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

/* ══════════════════════════════════════════════
   BUILD PRODUCT CARD
══════════════════════════════════════════════ */
function buildCard(p) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.category = p.category;

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <div class="card-badges">${badgeHTML(p.badge)}</div>
      <span class="store-tag ${p.store}">${storeLabel(p.store)}</span>
    </div>

    <div class="card-body">
      <span class="card-cat">${p.category}</span>
      <h2 class="card-name">${p.name}</h2>
      <p class="card-desc">${p.description}</p>

      <div class="card-rating">
        <span class="stars">${stars(p.rating)}</span>
        <span class="rating-count">${p.rating} · ${p.reviewCount.toLocaleString('en-IN')} reviews</span>
      </div>

      <div class="card-price-row">
        <span class="card-price">${formatPrice(p.price)}</span>
        ${p.originalPrice ? `<span class="card-price-original">${formatPrice(p.originalPrice)}</span>` : ''}
        ${p.discount ? `<span class="card-discount">↓ ${p.discount}</span>` : ''}
      </div>

      <button
        class="buy-btn ${p.store}"
        data-url="${p.affiliateUrl}"
        data-name="${p.name}"
        data-store="${p.store}"
        aria-label="Buy ${p.name} on ${storeLabel(p.store)}"
      >
        Buy on ${storeLabel(p.store)}
        ${EXT_SVG}
      </button>
    </div>
  `;

  // Affiliate redirect
  card.querySelector('.buy-btn').addEventListener('click', onBuyClick);
  return card;
}

/* ══════════════════════════════════════════════
   AFFILIATE CLICK HANDLER
   → Replace console.log with your analytics
══════════════════════════════════════════════ */
function onBuyClick(e) {
  const { url, name, store } = e.currentTarget.dataset;

  /* Analytics hook — uncomment & customise:
  gtag('event', 'affiliate_click', {
    product_name: name,
    store:        store,
    url:          url,
  }); */
  console.log(`[TGZ] Affiliate → ${name} | ${store} | ${url}`);

  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ══════════════════════════════════════════════
   RENDER PRODUCTS
══════════════════════════════════════════════ */
function renderProducts(list) {
  $grid.innerHTML = '';

  if (list.length === 0) {
    $noResults.classList.remove('hidden');
    $count.textContent = '0 products';
    return;
  }

  $noResults.classList.add('hidden');
  $count.textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;

  list.forEach(p => $grid.appendChild(buildCard(p)));
}

/* ══════════════════════════════════════════════
   FILTER LOGIC
   Syncs state across header + mobile tray
══════════════════════════════════════════════ */
let activeCategory = 'all';

function setFilter(category) {
  activeCategory = category;

  // Update active class on ALL matching buttons
  $filterBtns.forEach(btn => {
    const match = btn.dataset.category === category;
    btn.classList.toggle('active', match);
  });

  const filtered = category === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);

  renderProducts(filtered);
}

function initFilters() {
  $filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setFilter(btn.dataset.category);
      // Close mobile tray after selection
      $mobileTray.classList.remove('open');
      $hamBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ══════════════════════════════════════════════
   MOBILE HAM BUTTON
══════════════════════════════════════════════ */
function initMobileMenu() {
  $hamBtn.addEventListener('click', () => {
    const isOpen = $mobileTray.classList.toggle('open');
    $hamBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

/* ══════════════════════════════════════════════
   SCROLL TO TOP
══════════════════════════════════════════════ */
function initScrollTop() {
  window.addEventListener('scroll', () => {
    $scrollTop.classList.toggle('show', window.scrollY > 350);
  }, { passive: true });

  $scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
(function init() {
  renderProducts(PRODUCTS);   // show all on load
  initFilters();
  initMobileMenu();
  initScrollTop();
})();
