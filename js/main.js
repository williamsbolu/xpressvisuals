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
    navBackground.classList.toggle("cut-modal-display");

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

//////////////////////////////////////////////////
// Card Modal
const cardsContainer = document.querySelector(".works__content");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__img");

const cancelBtn = document.querySelector(".modal__button--cancel");
const prevButton = document.querySelector(".modal__button--prev");
const nextButton = document.querySelector(".modal__button--next");

let indexNo = 0;
let curModalImgArr = null;
// console.log(curModalImgArr);

cardsContainer.addEventListener("click", function (e) {
  // if we click on the btn link.. return
  if (e.target.classList.contains("btn")) return;

  const cardElement = e.target.closest(".card");

  if (!cardElement) return; // if we dont get d card modal element

  const imagesArr = Array.from(
    document.querySelectorAll(`.${cardElement.dataset.modal}`)
  );

  console.log(imagesArr);

  // stops the body scrolling
  document.body.classList.add("stop-scrolling");

  // display the modal
  modal.classList.remove("remove-display");
  modal.classList.add("add-display");

  // add the src
  modalImg.src = imagesArr[indexNo].src;

  // Animate the image
  modalImg.classList.remove("remove-image");
  modalImg.classList.add("add-image");

  curModalImgArr = imagesArr;
});

cancelBtn.addEventListener("click", function (e) {
  // Animate out the image
  modalImg.classList.remove("add-image");
  modalImg.classList.add("remove-image");

  // remove the modal
  modal.classList.remove("add-display");
  modal.classList.add("remove-display");

  document.body.classList.remove("stop-scrolling");

  indexNo = 0;
});

prevButton.addEventListener("click", function () {
  if (indexNo === 0) {
    indexNo = curModalImgArr.length - 1;
    modalImg.src = curModalImgArr[indexNo].src;
  } else {
    indexNo -= 1;
    modalImg.src = curModalImgArr[indexNo].src;
  }
  console.log(indexNo);
});

nextButton.addEventListener("click", function () {
  indexNo += 1;

  if (indexNo < curModalImgArr.length) {
    // if d index is equal to d length of d array
    modalImg.src = curModalImgArr[indexNo].src;
  } else {
    indexNo = 0;
    modalImg.src = curModalImgArr[indexNo].src;
  }
  console.log(indexNo);
});

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
