// Leon Unlimited Construction — site behavior
(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close mobile nav after clicking a link
    header.querySelectorAll(".mobile-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Gallery lightbox
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxClose = document.getElementById("lightbox-close");
  var galleryItems = document.querySelectorAll(".gallery-item");
  var lastFocused = null;

  function openLightbox(src, alt) {
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    lightboxClose.focus();
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var img = item.querySelector("img");
      openLightbox(item.getAttribute("data-full"), img ? img.alt : "");
    });
  });
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
  });

  // Quote form -> opens the user's email client with the details pre-filled
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var job = form.job.value.trim();

      var subject = "Quote request from " + (name || "website visitor");
      var body =
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n\n" +
        "Job details:\n" + job;

      // TODO: replace with the business's preferred quote-request inbox.
      var mailto =
        "mailto:leonunlimitedinc@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
})();
