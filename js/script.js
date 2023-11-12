function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDarkMode() {
  console.log("hello")
  const body = document.body;
  body.classList.toggle("dark-mode");

  // You can also toggle specific elements with dark mode styles if needed
  // For example: document.getElementById("someElement").classList.toggle("dark-mode");
}
