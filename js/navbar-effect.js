const navbar = document.getElementById("navbar");
let scrollUpNavbar;

window.onscroll = () => {
  clearTimeout(scrollUpNavbar)

  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = "0.5s";

    scrollUpNavbar = setTimeout(() => {
      navbar.style.transform = "translateY(-70px)";
      navbar.style.transition = "0.5s";
    }, 30000);
  } else {
    navbar.classList.add("top");
  }
};