/* ============================================================
   Cancún Travel Site — Interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close menu when a link is clicked (mobile)
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Day / Night hero toggle ---- */
  const hero = document.querySelector(".hero");
  const dnButton = document.querySelector(".daynight-toggle");

  if (hero && dnButton) {
    dnButton.addEventListener("click", function () {
      const isNight = hero.classList.toggle("hero-night");
      dnButton.textContent = isNight ? "☀️ Day" : "🌙 Night";
      dnButton.setAttribute(
        "aria-label",
        isNight ? "Switch to daytime view" : "Switch to nighttime view"
      );
    });
  }

  /* ---- Contact form (front-end demo handling) ---- */
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const success = form.querySelector(".form-success");
      if (success) {
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }

  /* ---- Mark active nav link based on current page ---- */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    const href = a.getAttribute("href");
    if (href === path) {
      a.classList.add("active");
    }
  });
})();
