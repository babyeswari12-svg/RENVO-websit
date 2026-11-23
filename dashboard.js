/* ============================================
   RENVO - Dashboard helper (Vanilla JS, shared)
   Used by buyer-dashboard.html and seller-dashboard.html.
   DEMO only — reads the session from localStorage.
   ============================================ */

/* Build the shared dashboard top bar inside #dashTopbar.
   currentRole = "buyer" | "seller"
   The nav items change based on the role, per the spec. */
function renderDashTopbar(currentRole) {
  const session = window.RENVO.getSession();
  if (!session) return;

  const initial = (session.fullName || "R").charAt(0).toUpperCase();
  const firstName = session.fullName ? session.fullName.split(" ")[0] : "User";

  // Nav links differ by role.
  const buyerLinks = `
    <a href="/index.html" class="dash-link" data-nav="home">Home</a>
    <a href="/buyer-dashboard.html#explore" class="dash-link" data-nav="explore">Explore Gadgets</a>
    <a href="/buyer-dashboard.html#offers" class="dash-link" data-nav="offers">My Offers</a>
  `;

  const sellerLinks = `
    <a href="/seller-dashboard.html#dashboard" class="dash-link" data-nav="dashboard">Dashboard</a>
    <a href="/seller-dashboard.html#listings" class="dash-link" data-nav="listings">My Listings</a>
    <a href="/seller-dashboard.html#offers" class="dash-link" data-nav="offers">Offers Received</a>
  `;

  const links = currentRole === "seller" ? sellerLinks : buyerLinks;

  const topbar = document.getElementById("dashTopbar");
  topbar.innerHTML = `
    <div class="container dash-topbar-inner">
      <a href="/index.html" class="logo" aria-label="RENVO home">
        <span class="logo-mark" aria-hidden="true">R</span>
        <span class="logo-text">RENVO</span>
      </a>

      <nav class="dash-nav" id="dashNav">
        ${links}
        <button type="button" class="dash-link dash-link-btn" id="switchRoleBtn">Switch Role</button>
        <button type="button" class="dash-link dash-link-btn" id="profileBtn">
          <span class="dash-avatar" aria-hidden="true">${initial}</span>
          ${firstName}
        </button>
        <button type="button" class="dash-link dash-link-btn ghost" id="logoutBtn">Logout</button>
      </nav>

      <button class="dash-menu-toggle" id="dashMenuToggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Mobile menu toggle.
  const nav = document.getElementById("dashNav");
  const toggle = document.getElementById("dashMenuToggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  // Close menu after clicking a link.
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  // Switch Role -> go to role selection page (same account, no new signup).
  document.getElementById("switchRoleBtn").addEventListener("click", () => {
    window.RENVO.showToast("Returning to role selection…");
    setTimeout(() => {
      window.location.href = "/role-selection.html";
    }, 500);
  });

  // Profile -> simple demo info toast.
  document.getElementById("profileBtn").addEventListener("click", () => {
    window.RENVO.showToast(`Profile editing is a demo placeholder for ${firstName}.`);
  });

  // Logout -> clear session and go home.
  document.getElementById("logoutBtn").addEventListener("click", () => {
    window.RENVO.clearSession();
    window.RENVO.showToast("Logged out.");
    setTimeout(() => (window.location.href = "/index.html"), 600);
  });
}

// Expose globally.
window.renderDashTopbar = renderDashTopbar;
