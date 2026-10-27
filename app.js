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
  console.log("Orbit JavaScript loaded successfully!");
});
