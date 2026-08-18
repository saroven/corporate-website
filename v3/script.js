const header = document.getElementById("siteHeader");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 40);
});

document.getElementById("quote-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you. Your quotation request has been received.");
});
