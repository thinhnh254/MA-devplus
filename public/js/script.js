const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
