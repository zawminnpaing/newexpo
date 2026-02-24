// NAVBAR ACTIVE LINK ON SCROLL
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

// INTERSECTION OBSERVER FOR PRODUCT ANIMATIONS
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.target.classList.toggle("active", e.isIntersecting));
},{ threshold: 0.1 });

document.querySelectorAll(".reveal-left,.reveal-right").forEach(el => observer.observe(el));

// FORM SUBMISSION HANDLER
const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Inquiry sent successfully. We will contact you shortly.");
  e.target.reset();
});

// REQUEST QUOTE BUTTONS HANDLER
const quoteButtons = document.querySelectorAll(".quote-btn");

quoteButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const productName = btn.getAttribute("data-product"); // Get product name
    // Scroll to contact section smoothly
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });

    // Autofill the textarea with product info
    const messageField = quoteForm.querySelector("textarea[name='message']");
    messageField.value = `Inquiry for: ${productName}\nQuantity:\nDestination:\nAdditional Notes:\n`;
    messageField.focus();
  });
});
