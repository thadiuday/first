// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Contact form submission with success/error message
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
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          statusDiv.innerHTML = "✅ Thank you! Your message has been sent.";
          statusDiv.style.color = "green";
          form.reset();
        } else {
          statusDiv.innerHTML = "❌ Oops! Something went wrong. Please try again.";
          statusDiv.style.color = "red";
        }
      } catch (error) {
        statusDiv.innerHTML = "❌ Network error. Please try again later.";
        statusDiv.style.color = "red";
      }
    });
  }
});
