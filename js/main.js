const section3 = document.querySelector("#section--3");
const btnScrollToWorks = document.querySelector(".support__link");
const nav = document.querySelector(".nav");
const collapsiblesContainer = document.querySelector(".faqs");

// navigation menu
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navBackground = document.querySelector(".nav__background");
  const nav = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links li");

  const navToggler = () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    navBackground.classList.toggle("cut-display");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  };

  navBackground.addEventListener("click", navToggler);
  navLinks.forEach((link) => link.addEventListener("click", navToggler));
  burger.addEventListener("click", navToggler);
};

navSlide();

///////////////////////////////////////
// PAGE NAVIGATION

function scrollToSection(e) {
  e.preventDefault();
  // console.log('CLICKED');

  // matching strategy
  if (e.target.classList.contains("nav__link")) {
    // e.target;  // curent element
    const id = e.target.getAttribute("href");
    if (id === "#") return; // exemption of the last button
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
}

document
  .querySelector(".nav__links")
  .addEventListener("click", scrollToSection);

// For the Get started button
btnScrollToWorks.addEventListener("click", () => {
  section3.scrollIntoView({ behavior: "smooth" });
});

//////////////////   Collapsible for the faqs section  /////////////////////////////////

if (collapsiblesContainer) {
  collapsiblesContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("collapsible__content")) return;

    const clicked = e.target.closest(".collapsible");

    if (!clicked) return;

    clicked.classList.toggle("collapsible__expanded");
  });
}
