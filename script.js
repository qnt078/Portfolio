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
