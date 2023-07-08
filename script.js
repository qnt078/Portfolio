window.addEventListener("scroll", function () {
  var navBar = document.querySelector("header");
  var scrolled = window.scrollY > 0;

  if (scrolled) {
    navBar.classList.add("nav-bar-scrolled");
  } else {
    navBar.classList.remove("nav-bar-scrolled");
  }
});

//Download CV
function demo1() {
  window.location.href = "https://watch-aw44.vercel.app/";
}

function demo2() {
  window.location.href = "https://linkking-sale.vercel.app/";
}
// scroll section
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header nav a");

window.onscroll = () => {
   sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
         navLi.forEach((a) => {
            a.classList.remove("active");
            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
         });
      }
   }
    );
};
//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}

document.addEventListener('click', function(event) {
  const navbar = document.querySelector('.navbar');
  const menuIcon = document.querySelector('#menu-icon');

  // Check if the clicked element is outside the navbar and toggle button
  if (!navbar.contains(event.target) && event.target !== menuIcon) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  }
});

