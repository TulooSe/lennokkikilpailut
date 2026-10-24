// Käyttöliittymän toiminta. Tiedot ovat tässä versiossa esimerkkitietoja.
// Apps Script -rajapinta liitetään myöhemmässä vaiheessa.

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebarBackdrop");
const navLinks = document.querySelectorAll(".nav-link[data-section]");

function closeMenu() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("show");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  backdrop.classList.toggle("show", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

backdrop.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    closeMenu();
  });
});
