const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// Fecha o menu quando clicar em qualquer link da navlist
document.querySelectorAll(".navlist a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Esconde/mostra a navbar ao rolar a página
let prevScroll = window.pageYOffset;

window.onscroll = function () {
  let currentScroll = window.pageYOffset;

  if (prevScroll > currentScroll) {
    // Scroll para cima – mostra a navbar
    header.style.top = "0";
  } else {
    // Scroll para baixo – esconde a navbar
    header.style.top = "-100px";
  }

  prevScroll = currentScroll;
};

// Slider automático
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1, // Sempre 1 imagem por vez
  spaceBetween: 0, // Sem espaço para evitar corte
});
