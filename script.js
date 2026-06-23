// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow =
      "0 5px 30px rgba(0,0,0,.4)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Fade animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform =
          "translateY(0)";
      }
    });
  },
  {
    threshold: 0.2
  }
);

document
  .querySelectorAll(
    ".card, .project-card, .testimonial-box"
  )
  .forEach(el => {
    el.style.opacity = "0";
    el.style.transform =
      "translateY(60px)";
    el.style.transition =
      "all .8s ease";

    observer.observe(el);
  });

// Typing effect
const text =
  "Modern Websites. Real Results.";

let i = 0;

function type() {
  const footer =
    document.querySelector("footer p");

  if (i < text.length) {
    footer.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}

window.onload = type;
