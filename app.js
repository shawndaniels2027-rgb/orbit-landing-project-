// ORBIT LANDING PAGE
// FEDS Academy - Week 3

document.addEventListener("DOMContentLoaded", () => {
  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // CLOSE MENU AFTER CLICKING A LINK
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
// ===== LIGHT AND DARK MODE =====

const themeToggle = document.getElementById("theme-toggle");

// Restore the saved theme
const savedTheme = localStorage.getItem("orbit-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
  themeToggle.setAttribute("aria-label", "Switch to light mode");
}

// Switch themes when the button is clicked
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  themeToggle.textContent = isDark ? "☀️" : "🌙";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );

  localStorage.setItem(
    "orbit-theme",
    isDark ? "dark" : "light"
  );
});
  // =========================================
// CONTACT FORM VALIDATION
// =========================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formStatus = document.getElementById("form-status");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll(".error-message").forEach((error) => {
      error.textContent = "";
    });

    document.querySelectorAll("#contact-form .invalid").forEach((field) => {
      field.classList.remove("invalid");
    });

    formStatus.textContent = "";
    formStatus.className = "";

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
      showError("name", "Please enter your name.");
      isValid = false;
    }

    // Validate email
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      showError("email", "Please enter your email address.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      showError("email", "Please enter a valid email address.");
      isValid = false;
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      showError("message", "Please enter your message.");
      isValid = false;
    }

    // Display the result
    if (isValid) {
      formStatus.textContent =
        "Your form passed validation! No message has been sent yet.";

      formStatus.className = "success";

      contactForm.reset();
    } else {
      formStatus.textContent =
        "Please correct the errors above and try again.";

      formStatus.className = "failure";
    }
  });

  function showError(fieldName, message) {
    document.getElementById(`${fieldName}-error`).textContent = message;

    document.getElementById(fieldName).classList.add("invalid");
  }
}
  // ===== FAQ ACCORDION =====
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isExpanded = question.getAttribute("aria-expanded") === "true";

    question.setAttribute("aria-expanded", String(!isExpanded));
    answer.hidden = isExpanded;

    const icon = question.querySelector(".faq-icon");
    icon.textContent = isExpanded ? "+" : "−";
  });
});
  console.log("Orbit JavaScript loaded successfully!");
});
