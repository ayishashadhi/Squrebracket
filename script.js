// Scroll animation for cards
const cards = document.querySelectorAll('.service-card');

const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Typing animation for heading
const text = "Adventure Unleashed\nDiscover Your Next";
const target = document.getElementById("typing-heading");
target.innerHTML = "";

let index = 0;
function typeEffect() {
  if (index < text.length) {
    target.innerHTML += text[index] === "\n" ? "<br>" : text[index];
    index++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Card click effect
cards.forEach(card => {
  card.addEventListener('click', () => {
    alert("More info coming soon!");
  });
});

// 🌠 Shooting Star Generator
function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  // Random start position
  const top = Math.random() * window.innerHeight * 0.5;
  const delay = Math.random() * 5;

  star.style.top = `${top}px`;
  star.style.left = `-100px`;
  star.style.animationDelay = `${delay}s`;

  document.body.appendChild(star);

  // Remove after animation
  setTimeout(() => {
    star.remove();
  }, 5000);
}

// Repeat multiple stars every few seconds
setInterval(() => {
  for (let i = 0; i < 2; i++) {
    createShootingStar();
  }
}, 4000);
