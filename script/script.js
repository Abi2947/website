// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Entry animations (for .fade-in elements)
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach((fader) => appearOnScroll.observe(fader));

// Animation restart for sections (Hero, About Me, Education, Projects)
const sections = document.querySelectorAll(
  ".hero-section, .about-section, .education-section, .projects-section"
);

const sectionObserverOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const sectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  });
}, sectionObserverOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  nav_links.classList.toggle("active");
  hamburger.classList.toggle("active");
});
