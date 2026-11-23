/* ============================================
   RENVO - Auth helper (Vanilla JS, shared)
   Used by signup, login, otp, role-selection and dashboards.
   Beginner-friendly + commented.
   --------------------------------------------
   IMPORTANT: This is a FRONTEND DEMO only.
   It uses localStorage to fake an account and login state.
   It is NOT secure authentication and must never be used
   to protect real data. A real backend is required later.
   ============================================ */

/* ----- 1. Storage keys (names we use in localStorage) ------------- */
const STORAGE_KEYS = {
  account: "renvo_demo_account", // the registered demo account
  session: "renvo_demo_session", // current login session
  pendingOtp: "renvo_pending_otp", // the OTP code waiting to be verified
  pendingFlow: "renvo_pending_flow", // "register" | "login"
};

/* ----- 2. Small DOM helpers --------------------------------------- */

// Show a toast message. Each auth page has a #toast element.
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2800);
}

// Read the demo account from localStorage (or null if none).
function getAccount() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.account));
  } catch {
    return null;
  }
}

// Save the demo account.
function setAccount(account) {
  localStorage.setItem(STORAGE_KEYS.account, JSON.stringify(account));
}

// Read the current session (or null).
function getSession() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.session));
  } catch {
    return null;
  }
}

// Save a session and optionally set the chosen role.
function setSession(session) {
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
}

// Clear the session (logout).
function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.session);
}

/* ----- 3. Validation helpers -------------------------------------- */
// These return an error string when invalid, or "" when valid.

function isEmail(value) {
  // Simple, readable email pattern (good enough for a demo).
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isPhone(value) {
  // Accepts digits, spaces, dashes, parentheses and an optional leading +.
  // Must contain between 7 and 15 digits.
  const digits = value.replace(/[^\d]/g, "");
  return /^[+\d\s()-]+$/.test(value) && digits.length >= 7 && digits.length <= 15;
}

/* ----- 4. Show / hide password toggle ----------------------------- */
// Call once per page. Finds every .password-field and wires its toggle.
function setupPasswordToggles() {
  document.querySelectorAll(".password-field").forEach((field) => {
    const input = field.querySelector("input");
    const toggle = field.querySelector(".toggle-password");
    if (!input || !toggle) return;

    toggle.addEventListener("click", () => {
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      toggle.textContent = isPassword ? "Hide" : "Show";
      input.focus();
    });
  });
}

/* ----- 5. Generate a random 6-digit demo OTP ---------------------- */
function generateOtp() {
  // A number between 100000 and 999999.
  return String(Math.floor(100000 + Math.random() * 900000));
}

/* ----- 6. Guard pages that need a session ------------------------- */
// If the user is not logged in, send them to the login page.
function requireSession() {
  if (!getSession()) {
    window.location.href = "/login.html";
    return null;
  }
  return getSession();
}

// If already logged in, skip auth pages (optional helper).
function redirectIfLoggedIn() {
  if (getSession()) {
    window.location.href = "/role-selection.html";
  }
}

/* ----- 7. Shared header/footer markup injection ------------------- */
// Keeps the auth pages short and consistent.

// Demo banner HTML reused on every auth page.
function demoBannerHTML() {
  return `
    <div class="demo-banner" role="note">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/>
        <path d="M12 8v5M12 16h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
      <span><strong>Demo mode:</strong> This is a frontend demo only. No real SMS or email is sent, and accounts are stored locally in your browser. Not secure authentication.</span>
    </div>
  `;
}

// Expose helpers globally so each page's inline script can use them.
window.RENVO = {
  STORAGE_KEYS,
  showToast,
  getAccount,
  setAccount,
  getSession,
  setSession,
  clearSession,
  isEmail,
  isPhone,
  setupPasswordToggles,
  generateOtp,
  requireSession,
  redirectIfLoggedIn,
  demoBannerHTML,
};
