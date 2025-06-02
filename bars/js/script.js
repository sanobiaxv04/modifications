const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    menuToggle.classList.remove("fa-bars");
    menuToggle.classList.add("fa-times");
  } else {
    menuToggle.classList.remove("fa-times");
    menuToggle.classList.add("fa-bars");
  }
});

const productNameEls = document.querySelectorAll(".product-name");
const maxChars = 20;

productNameEls.forEach((el) => {
    const text = el.innerText.trim();
    if (text.length > maxChars) {
        el.innerText = text.slice(0, maxChars - 3).trim() + "...";
    }
});


const btnLogin = document.querySelector(".btn-login");
const btnSignup = document.querySelector(".btn-signup");

btnLogin.addEventListener("click", () => {
  window.location.href = "login.html";
});

btnSignup.addEventListener("click", () => {
  window.location.href = "signup.html";
});



let slidesPerView = 5;

if (window.matchMedia("(max-width: 400px)").matches) {
  slidesPerView = 1;
} else if (window.matchMedia("(max-width: 500px)").matches) {
  slidesPerView = 2;
} else if (window.matchMedia("(max-width: 700px)").matches) {
  slidesPerView = 3;
} else if (window.matchMedia("(max-width: 900px)").matches) {
  slidesPerView = 4;
} else {
  slidesPerView = 5;
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: slidesPerView,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});