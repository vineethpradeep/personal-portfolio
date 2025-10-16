(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  // Mobile menu
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuToggle) {
    // Open/close menu
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.style.display = expanded ? "none" : "block";
      if (!expanded) {
        mobileMenu.querySelector("a")?.focus();
      }
    });
  }

  // Project filter
  const filter = document.getElementById("filter");
  const projectsGrid = document.getElementById("projectsGrid");
  // Filter projects by type
  if (filter && projectsGrid) {
    filter.addEventListener("change", (e) => {
      const val = e.target.value;
      const cards = projectsGrid.querySelectorAll(".project");
      cards.forEach((card) => {
        const type = card.getAttribute("data-type");
        if (val === "all" || type === val) card.style.display = "";
        else card.style.display = "none";
      });
    });
  }

  // Contact form
  const form = document.getElementById("contactForm");
  const result = document.getElementById("formResult");
  // Validate email
  function isEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  if (form) {
    // Submit form
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      // name email message condition check
      if (!name || !email || !message) {
        result.textContent = "Please complete all fields.";
        return;
      }
      if (!isEmail(email)) {
        result.textContent = "Please provide a valid email address.";
        return;
      }
      result.textContent =
        "Thanks — your message looks good. (This demo does not send messages.)";
      form.reset();
    });
  }
  (function () {
    function handleFirstTab(e) {
      if (e.key === "Tab")
        document.documentElement.classList.add("user-is-tabbing");
    }
    window.addEventListener("keydown", handleFirstTab, { once: true });
  })();
})();
