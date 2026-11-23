/* ============================================
   RENVO - Homepage interactions (Vanilla JS)
   No frameworks. Beginner-friendly + commented.
   ============================================ */

/* ----- 1. Sample data ---------------------------------------------- */

// Each category gets an inline SVG icon (kept short and readable).
const categoryIcons = {
  Smartphones: '<svg viewBox="0 0 24 24" fill="none"><path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.6"/><path d="M11 18h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  Laptops: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M2 20h20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  Tablets: '<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M11 18h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  Smartwatches: '<svg viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M9 6V3h6v3M9 18v3h6v-3M12 9v3l2 1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  Headphones: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 14v-2a8 8 0 0 1 16 0v2" stroke="currentColor" stroke-width="1.6"/><rect x="2" y="13" width="4" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="18" y="13" width="4" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/></svg>',
  Cameras: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 8h3l2-2h8l2 2h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="13" r="4" stroke="currentColor" stroke-width="1.6"/></svg>',
  "Gaming Consoles": '<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="20" height="9" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M7 12v2M6 13h2M16 13h2M16 12v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  Accessories: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 6h12v8a6 6 0 0 1-12 0V6z" stroke="currentColor" stroke-width="1.6"/><path d="M9 6V4a2 2 0 0 1 4 0v2" stroke="currentColor" stroke-width="1.6"/></svg>',
};

// Category list shown in the "Explore Popular Categories" section.
const categories = [
  { name: "Smartphones", count: 320 },
  { name: "Laptops", count: 180 },
  { name: "Tablets", count: 95 },
  { name: "Smartwatches", count: 74 },
  { name: "Headphones", count: 210 },
  { name: "Cameras", count: 58 },
  { name: "Gaming Consoles", count: 66 },
  { name: "Accessories", count: 140 },
];

// Featured product listings (sample data, no backend).
const products = [
  { name: "iPhone 13 Pro 128GB", category: "Smartphones", price: "$549", condition: "Excellent", seller: "Marcus L." },
  { name: "MacBook Air M1 2020", category: "Laptops", price: "$899", condition: "Like New", seller: "Priya S." },
  { name: "iPad Air 5th Gen", category: "Tablets", price: "$420", condition: "Good", seller: "Tomás R." },
  { name: "Apple Watch Series 8", category: "Smartwatches", price: "$299", condition: "Excellent", seller: "Lena K." },
  { name: "Sony WH-1000XM4", category: "Headphones", price: "$180", condition: "Like New", seller: "Ade O." },
  { name: "Canon EOS R50 Kit", category: "Cameras", price: "$640", condition: "Good", seller: "Sofia M." },
  { name: "PlayStation 5 Disc", category: "Gaming Consoles", price: "$430", condition: "Excellent", seller: "Jordan P." },
  { name: "Anker GaN 100W Charger", category: "Accessories", price: "$45", condition: "Like New", seller: "Yuki T." },
];

/* ----- 2. Render categories --------------------------------------- */

const categoryGrid = document.getElementById("categoryGrid");

categories.forEach((cat) => {
  // Create a card element for each category
  const card = document.createElement("button");
  card.className = "category-card reveal";
  card.type = "button";
  card.setAttribute("aria-label", `Browse ${cat.name}`);
  card.innerHTML = `
    <span class="category-icon">${categoryIcons[cat.name] || ""}</span>
    <h3>${cat.name}</h3>
    <span class="category-count">${cat.count} listings</span>
  `;
  // When a category is clicked, show a friendly toast (no backend yet)
  card.addEventListener("click", () => {
    showToast(`Browsing ${cat.name} (${cat.count} listings) — coming soon!`);
  });
  categoryGrid.appendChild(card);
});

/* ----- 3. Render featured products -------------------------------- */

const productGrid = document.getElementById("productGrid");

products.forEach((p) => {
  const card = document.createElement("article");
  card.className = "product-card reveal";
  card.innerHTML = `
    <div class="product-thumb">
      <span class="product-condition">${p.condition}</span>
      ${categoryIcons[p.category] || ""}
    </div>
    <div class="product-body">
      <span class="product-cat">${p.category}</span>
      <h3>${p.name}</h3>
      <span class="product-seller">Sold by ${p.seller}</span>
      <span class="product-price">${p.price}</span>
    </div>
  `;
  card.addEventListener("click", () => {
    showToast(`${p.name} — ${p.price} — details coming soon!`);
  });
  productGrid.appendChild(card);
});

/* ----- 4. Mobile menu toggle -------------------------------------- */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu whenever a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* ----- 5. Navbar shadow on scroll --------------------------------- */

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 8);
});

/* ----- 6. Reveal on scroll ---------------------------------------- */
// Adds a subtle fade-in to cards as they enter the viewport.

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => observer.observe(el));

// Also reveal the static section cards (steps, why, about)
document
  .querySelectorAll(".step-card, .why-card, .about-text, .about-visual, .hero-text")
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

/* ----- 7. Toast helper -------------------------------------------- */

const toast = document.getElementById("toast");
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ----- 8. Login / Sign Up links + demo modal ---------------------- */
// Login and Sign Up now go to real auth pages.
// Contact, Privacy and Terms still open an informational modal (no pages yet).

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.getElementById("modalClose");
const modalOk = document.getElementById("modalOk");

function openModal(title, desc) {
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll('a[href="#contact"], a[href="#privacy"], a[href="#terms"]').forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const href = a.getAttribute("href");
    const map = {
      "#contact": ["Contact RENVO", "Need help? Email us at hello@renvo.example — a contact form will live here soon."],
      "#privacy": ["Privacy Policy", "Our full privacy policy will be published here. We respect your data and never sell it."],
      "#terms": ["Terms & Conditions", "Our terms and conditions will be published here. By using RENVO you agree to them."],
    };
    const [t, d] = map[href] || ["RENVO", "This section is coming soon."];
    openModal(t, d);
  })
);

modalClose.addEventListener("click", closeModal);
modalOk.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ----- 9. Current year in footer ---------------------------------- */

document.getElementById("year").textContent = new Date().getFullYear();
