// /*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

const linkClickHandle = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((link) => link.addEventListener("click", linkClickHandle));

/*==================== EXPERIENCE TABS ====================*/
const expTabs = document.querySelectorAll("[data-target]"),
  expTabContents = document.querySelectorAll("[data-content");

expTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    expTabContents.forEach((tabContent) => {
      tabContent.classList.remove("experience__active");
    });

    target.classList.add("experience__active");

    expTabs.forEach((tab) => {
      tab.classList.remove("experience__active");
    });

    tab.classList.add("experience__active");
  });
});

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
