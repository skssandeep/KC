const menubar = document.querySelector(".menubar");
const menubarPage = document.querySelector(".menubarPage");
console.log(menubarPage);

menubar.addEventListener("click", function () {
  menubarPage.classList.toggle("hide");
  this.src = "imgs/crossicon.svg";

  if (!menubarPage.classList.contains("hide")) return;
  this.src = "imgs/menubar.svg";
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 150,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
