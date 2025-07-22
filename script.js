// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const statusDiv = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          statusDiv.innerHTML = "✅ Thank you! Your message has been sent.";
          statusDiv.style.color = "green";
          form.reset();
        } else {
          statusDiv.innerHTML = "❌ Something went wrong.";
          statusDiv.style.color = "red";
        }
      } catch (error) {
        statusDiv.innerHTML = "❌ Network error.";
        statusDiv.style.color = "red";
      }
    });
  }

  // Toggle mobile menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Dark mode
  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark');
    });
  }

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.accordion-title').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Loader
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
});
