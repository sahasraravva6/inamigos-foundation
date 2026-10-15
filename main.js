import "./style.css";

/* ---------- Mobile Navigation Toggle ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Navbar Shadow + Back-to-top on Scroll ---------- */
const navbar = document.getElementById("navbar");
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 40;

  if (navbar) {
    navbar.classList.toggle("scrolled", scrolled);
  }

  if (backToTop) {
    backToTop.classList.toggle("visible", window.scrollY > 400);
  }
});

/* ---------- Scroll Reveal Animations ---------- */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("visible"));
}

/* ---------- Active Nav Link Tracking ---------- */
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinkEls = navLinks ? navLinks.querySelectorAll("a") : [];

if ("IntersectionObserver" in window && navLinkEls.length > 0) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinkEls.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
  );

  sections.forEach((sec) => navObserver.observe(sec));
}
