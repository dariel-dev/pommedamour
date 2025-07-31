document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      // Common navigation & footer
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
      "footer-copy": "© 2025 My Mom’s Clothing Shop | Designed by Dariel",
      "footer-contact": "Contact",
      instagram: "Instagram",
      facebook: "Facebook",

      // Index page
      "hero-heading": "Beautiful, Handmade Fashion",
      "hero-text": "Visit us in Tirana or browse our latest styles!",
      "unlogical-poem": "Unlogical poem of styling",

      // Contact page
      "contact-title": "Contact Us",
      address: "📍 Address: Rruga e Dibrës, Tirana, Albania",
      phone: "📞 Phone: +355 68 123 4567",
      email: "📧 Email: mymomshop@gmail.com",
      whatsapp: "Message us on WhatsApp",
      map: "Find Us on the Map",

      // About page
      "about-title": "About Us",
      "about-text": "Welcome to My Mom's Clothing Shop, where tradition meets style! We offer handmade, quality clothing made with love right here in Tirana. Our mission is to bring unique fashion to our community with a personal touch.",
      "about-history": "Started as a small family business, we have grown thanks to your support. Each piece in our collection tells a story and reflects our passion for craftsmanship.",
      "about-invitation": "Come visit us, or explore our collection online. We're here to help you find the perfect outfit!",
      "shop-front": "Shop Front",

      // Products page
      "shop-category": "Shop by Category",
      skirts: "Skirts",
      jeans: "Jeans",
      jackets: "Jackets",
      dresses: "Dresses",
      blouses: "Blouses",
      sweaters: "Sweaters",
      coats: "Coats",
      scarves: "Scarves",
      hats: "Hats",
      trousers: "Trousers",
      shorts: "Shorts",
      bags: "Bags & Purses",
      shoes: "Shoes & Boots",
      belts: "Belts",
      jewelry: "Jewelry",
      gloves: "Gloves",
      cardigans: "Cardigans",
      outerwear: "Outerwear",
      tops: "Tops",
      "price-label": "Price:",
      "order-cta": "Contact to Order",
      "all-categories": "All Categories",
      "first-page": "First Page",
      previous: "Previous",
      next: "Next",

      // Collections
      "skirts-collection": "Skirts Collection",
      "jeans-collection": "Jeans Collection",
      "jackets-collection": "Jackets Collection",
      "dresses-collection": "Dresses Collection",
      "blouses-collection": "Blouses Collection",
      "sweaters-collection": "Sweaters Collection",
      "coats-collection": "Coats Collection",
      "scarves-collection": "Scarves Collection",
      "hats-collection": "Hats Collection",
      "trousers-collection": "Trousers Collection",
      "shorts-collection": "Shorts Collection",
      "bags-collection": "Bags Collection",
      "shoes-collection": "Shoes Collection",
      "belts-collection": "Belts Collection",
      "jewelry-collection": "Jewelry Collection",
      "gloves-collection": "Gloves Collection",
      "cardigans-collection": "Cardigans Collection",
      "outerwear-collection": "Outerwear Collection",

      // Product descriptions
      "skirt-desc": "Premium quality skirts piece #${n} for all seasons",
      "jeans-desc": "Premium quality jeans #${n} with perfect fit",
      "jacket-desc": "Beautiful handmade jacket #${n} with premium materials",
      "dress-desc": "Premium quality dresses piece #${n} for all seasons",
      "blouse-desc": "Premium quality blouses piece #${n} for all seasons",
      "sweater-desc": "Premium quality sweaters piece #${n} for all seasons",
      "coat-desc": "Premium quality coats piece #${n} for all seasons",
      "scarf-desc": "Premium quality scarves piece #${n} for all seasons",
      "hat-desc": "Premium quality hats piece #${n} for all seasons",
      "trouser-desc": "Premium quality trousers piece #${n} for all seasons",
      "short-desc": "Premium quality shorts piece #${n} for all seasons",
      "bag-desc": "Premium quality bags piece #${n} for all seasons",
      "shoe-desc": "Premium quality shoes piece #${n} for all seasons",
      "belt-desc": "Premium quality belts piece #${n} for all seasons",
      "jewelry-desc": "Exquisite handmade jewelry piece #${n}",
      "glove-desc": "Premium quality gloves piece #${n} for all seasons",
      "cardigan-desc": "Premium quality cardigans piece #${n} for all seasons",
      "outerwear-desc": "Premium quality outerwear piece #${n} for all seasons"
    },

    al: {
      // Common navigation & footer
      home: "Kreu",
      products: "Produkte",
      about: "Rreth Nesh",
      contact: "Kontakt",
      "footer-copy": "© 2025 Dyqani i Veshjeve të Mamasë | Dizajnuar nga Dariel",
      "footer-contact": "Kontakt",
      instagram: "Instagram",
      facebook: "Facebook",

      // Index page
      "hero-heading": "Moda e Bukur, e Punuar Me Dorë",
      "hero-text": "Na vizitoni në Tiranë ose shikoni stilet tona më të fundit!",
      "unlogical-poem": "Poemë e palogjikshme e stilit",

      // Contact page
      "contact-title": "Na Kontaktoni",
      address: "📍 Adresa: Rruga e Dibrës, Tiranë, Shqipëri",
      phone: "📞 Telefoni: +355 68 123 4567",
      email: "📧 Email: mymomshop@gmail.com",
      whatsapp: "Na shkruani në WhatsApp",
      map: "Gjejeni në Hartë",

      // About page
      "about-title": "Rreth Nesh",
      "about-text": "Mirë se vini në Dyqanin e Mamasë, ku tradita takohet me stilin! Ne ofrojmë rroba të punuara me dorë dhe cilësi të lartë me dashuri këtu në Tiranë. Misioni ynë është të sjellim modë unike në komunitetin tonë me një prekje personale.",
      "about-history": "Filluar si një biznes i vogël familjar, ne kemi evoluar falë mbështetjes suaj. Çdo veshje në koleksionin tonë tregon një histori dhe pasqyron pasionin tonë për artizanatin.",
      "about-invitation": "Na vizitoni ose eksploroni koleksionin tonë online. Jemi këtu për t'ju ndihmuar të gjeni veshjen perfekte!",
      "shop-front": "Pamja e Dyqanit",

      // Products page
      "shop-category": "Bleni sipas Kategorisë",
      skirts: "Fundet",
      jeans: "Xhinset",
      jackets: "Xhaketat",
      dresses: "Fustanet",
      blouses: "Bluzat",
      sweaters: "Trikot",
      coats: "Palltot",
      scarves: "Shallët",
      hats: "Kapelet",
      trousers: "Pantallonat",
      shorts: "Pantallonat e shkurtra",
      bags: "Çanta dhe Portofola",
      shoes: "Këpucët dhe Çizmet",
      belts: "Rripat",
      jewelry: "Bizhuteri",
      gloves: "Dorezat",
      cardigans: "Cardiganët",
      outerwear: "Veshje të Jashtme",
      costumes: "Kostume",
      furcoats: "Pelice",
      overcoats: "Pardesy",
      tops: "Kanatiere",
      "price-label": "Çmimi:",
      "order-cta": "Kontaktoni për Porositje",
      "all-categories": "Të Gjitha Kategoritë",
      "first-page": "Faqja e Parë",
      previous: "Paraardhëse",
      next: "Tjetra",

      // Collections
      "skirts-collection": "Koleksioni i Fundëve",
      "jeans-collection": "Koleksioni i Xhinseve",
      "jackets-collection": "Koleksioni i Xhaketave",
      "dresses-collection": "Koleksioni i Fustaneve",
      "blouses-collection": "Koleksioni i Bluzave",
      "sweaters-collection": "Koleksioni i Trikove",
      "coats-collection": "Koleksioni i Palltove",
      "scarves-collection": "Koleksioni i Shallëve",
      "hats-collection": "Koleksioni i Kapeleve",
      "trousers-collection": "Koleksioni i Pantallonave",
      "shorts-collection": "Koleksioni i Pantallonave të Shkurtra",
      "bags-collection": "Koleksioni i Çantave",
      "shoes-collection": "Koleksioni i Këpucëve",
      "belts-collection": "Koleksioni i Rripave",
      "jewelry-collection": "Koleksioni i Bizhuterive",
      "gloves-collection": "Koleksioni i Dorezave",
      "cardigans-collection": "Koleksioni i Cardiganëve",
      "outerwear-collection": "Koleksioni i Veshjeve të Jashtme",

      // Product descriptions
      "skirt-desc": "Fund me cilësi të lartë #${n} për të gjitha stinët",
      "jeans-desc": "Xhinse me cilësi të lartë #${n} me përshtatje perfekte",
      "jacket-desc": "Xhaketë e bukur e punuar me dorë #${n} me materiale premium",
      "dress-desc": "Fustan me cilësi të lartë #${n} për të gjitha stinët",
      "blouse-desc": "Bluzë me cilësi të lartë #${n} për të gjitha stinët",
      "sweater-desc": "Trik me cilësi të lartë #${n} për të gjitha stinët",
      "coat-desc": "Pallto me cilësi të lartë #${n} për të gjitha stinët",
      "scarf-desc": "Shall me cilësi të lartë #${n} për të gjitha stinët",
      "hat-desc": "Kapel me cilësi të lartë #${n} për të gjitha stinët",
      "trouser-desc": "Pantallona me cilësi të lartë #${n} për të gjitha stinët",
      "short-desc": "Pantallona të shkurtra me cilësi të lartë #${n} për të gjitha stinët",
      "bag-desc": "Çantë me cilësi të lartë #${n} për të gjitha stinët",
      "shoe-desc": "Këpucë me cilësi të lartë #${n} për të gjitha stinët",
      "belt-desc": "Rrip me cilësi të lartë #${n} për të gjitha stinët",
      "jewelry-desc": "Bizhuteri e bukur e punuar me dorë #${n}",
      "glove-desc": "Doreza me cilësi të lartë #${n} për të gjitha stinët",
      "cardigan-desc": "Cardigan me cilësi të lartë #${n} për të gjitha stinët",
      "outerwear-desc": "Veshje të jashtme me cilësi të lartë #${n} për të gjitha stinët"
    }
  };

  const lang = localStorage.getItem("language") || "en";
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      if (key.endsWith("-desc") && el.hasAttribute("data-index")) {
        const index = el.getAttribute("data-index");
        el.textContent = translations[lang][key].replace("${n}", index);
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
});