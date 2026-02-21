const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  navItems.forEach(item => {
    item.classList.toggle("active", item.getAttribute("href").includes(current));
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.target.classList.toggle("active", e.isIntersecting));
},{ threshold: 0.1 });

document.querySelectorAll(".reveal-left,.reveal-right").forEach(el => observer.observe(el));

document.getElementById("quoteForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Inquiry sent successfully. We will contact you shortly.");
  e.target.reset();
});
