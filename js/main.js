// ============================================================
//  main.js — small interactive features to practice with.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  setupMobileNav();
  setupCounter();
  setupThemeToggle();
  setupContactForm();
});

/* Footer: current year */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* Mobile navigation toggle */
function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close the menu when a link is clicked (mobile).
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Interactive counter */
function setupCounter() {
  const value = document.getElementById("counter");
  const inc = document.getElementById("increment");
  const dec = document.getElementById("decrement");
  if (!value || !inc || !dec) return;

  let count = 0;
  const render = () => (value.textContent = count);

  inc.addEventListener("click", () => { count++; render(); });
  dec.addEventListener("click", () => { count--; render(); });
}

/* Light/Dark theme toggle (remembers choice) */
function setupThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  updateLabel();

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateLabel();
  });

  function updateLabel() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    btn.textContent = isDark ? "☀️ Theme" : "🌙 Theme";
  }
}

/* Contact form with simple client-side validation */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    ["name", "email", "message"].forEach((id) => {
      const input = document.getElementById(id);
      const field = input.closest(".field");
      const ok = input.value.trim() !== "" &&
        (id !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value));
      field.classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      status.textContent = "Please fill in all fields with a valid email.";
      status.className = "form-status error";
      return;
    }

    status.textContent = "Thanks! Your message was captured (demo only).";
    status.className = "form-status success";
    form.reset();
  });
}
