/* ────────────────────────────────────────
   ATELIER INTERIORS — Interactive Scripts
   ──────────────────────────────────────── */

// ── Header scroll effect ──
const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 60);
});

// ── Mobile navigation toggle ──
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.classList.toggle("active", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.classList.remove("active");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

// ── Testimonial slider dots ──
const sliderDots = document.querySelectorAll(".slider-dot");
const testimonialCards = document.querySelector(".testimonial-cards");

sliderDots.forEach(dot => {
  dot.addEventListener("click", () => {
    sliderDots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");
  });
});

// ── Scroll-reveal animation ──
const revealElements = document.querySelectorAll(
  ".services, .projects, .about, .stats, .testimonials, .cta"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(36px)";
  el.style.transition = "opacity .7s ease, transform .7s ease";
  revealObserver.observe(el);
});

// ── Hero slider auto-progress ──
const heroDots = document.querySelectorAll(".slider-progress .dot");
let currentHeroSlide = 0;

setInterval(() => {
  heroDots.forEach(d => d.classList.remove("active"));
  currentHeroSlide = (currentHeroSlide + 1) % heroDots.length;
  heroDots[currentHeroSlide].classList.add("active");
}, 4000);

// ── Active nav highlight on scroll ──
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav > a:not(.nav-cta)");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
