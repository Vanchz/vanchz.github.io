// typing animation script
document.addEventListener("DOMContentLoaded", function() {
  var target = document.querySelector(".typewriter-text");
  if (!target) {
    console.error("typewriter: .typewriter-text not found");
    return;
  }
  if (typeof Typed === "undefined") {
    console.error("typewriter: Typed library not loaded");
    return;
  }
  var typed = new Typed(".typewriter-text", {
    strings: ["Web Development", "YouTuber", "Self-Taught Developer", "Developer", "Content Creator"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

function hamburg() {
  var navbar = document.querySelector(".dropdown");
  if (navbar) {
    navbar.style.transform = "translateY(0)";
  }
}

function closeDropdown() {
  var navbar = document.querySelector(".dropdown");
  if (navbar) {
    navbar.style.transform = "translateY(-500px)";
  }
}