// script.js
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-list a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scroll-to-top");

  // Affiche le bouton lorsque l'utilisateur fait défiler vers le bas
  window.addEventListener("scroll", function () {
    if (window.scrollY > 800) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Scroll doux vers le haut lorsque le bouton est cliqué
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.querySelector(".nav-list");

  menuIcon.style.display = "block"; // Affichez le menu burger par défaut

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("menu-active");
  });
});
