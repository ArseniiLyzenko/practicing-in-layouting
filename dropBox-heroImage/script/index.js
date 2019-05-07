"use strict";

const body = document.body;
const documentElement = document.documentElement;
const mainContainer = document.getElementById("main-container");

/*==============================================*/
/*          Listener(s) for the header          */
/*==============================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  body.scrollTop > 0 || documentElement.scrollTop > 0
    ? header.classList.replace("b-trans", "b-white")
    : header.classList.replace("b-white", "b-trans");
});

/*============================================================================*/
/*  Listener for "Try free for 30 days" button in right corner of the header  */
/*============================================================================*/

const navLastChildA = document.querySelector("header>nav>a:last-child");

window.addEventListener("scroll", () => {
  body.scrollTop > 370 || documentElement.scrollTop > 370
    ? navLastChildA.classList.replace("transparent", "blue")
    : navLastChildA.classList.replace("blue", "transparent");
});

/*============================================================================*/
/*          Listeners for drop-menu in the navigation in the header           */
/*============================================================================*/

const learnMore = document.getElementById("learn-more");
const popWrapperLearnMore = document.getElementById("pop-wrapper-learn-more");

const contactSales = document.getElementById("contact-sales");
const popWrapperContactSales = document.getElementById(
  "pop-wrapper-contact-sales"
);

const arrowSpan = document.getElementsByClassName("drop-menu-arrow");

function matchBtnAndArrow(btn, arrow) {
  for (let i = 0, l = arrowSpan.length; i < l; i++) {
    if (arrow[i].parentElement === btn) {
      return arrow[i];
    }
  }
  console.log("The match was not found");
  return null;
}

learnMore.addEventListener("click", () => {
  if (popWrapperLearnMore.classList.contains("fade-out-300")) {
    popWrapperLearnMore.classList.replace("fade-out-300", "fade-in-300");
  } else {
    popWrapperLearnMore.classList.replace("fade-in-300", "fade-out-300");
  }
  matchBtnAndArrow(learnMore, arrowSpan).classList.toggle("rot-180");
});

contactSales.addEventListener("click", () => {
  if (popWrapperContactSales.classList.contains("fade-out-300")) {
    popWrapperContactSales.classList.replace("fade-out-300", "fade-in-300");
  } else {
    popWrapperContactSales.classList.replace("fade-in-300", "fade-out-300");
  }
  matchBtnAndArrow(contactSales, arrowSpan).classList.toggle("rot-180");
});

window.addEventListener(
  "click",
  e => {
    if (e.composedPath()[0] !== learnMore) {
      popWrapperLearnMore.classList.replace("fade-in-300", "fade-out-300");
      matchBtnAndArrow(learnMore, arrowSpan).classList.remove("rot-180");
    }

    if (e.composedPath()[0] !== contactSales) {
      popWrapperContactSales.classList.replace("fade-in-300", "fade-out-300");
      matchBtnAndArrow(contactSales, arrowSpan).classList.remove("rot-180");
    }
  },
  false
);

window.addEventListener("scroll", () => {
  popWrapperLearnMore.classList.replace("fade-in-300", "fade-out-300");
  matchBtnAndArrow(learnMore, arrowSpan).classList.remove("rot-180");
  popWrapperContactSales.classList.replace("fade-in-300", "fade-out-300");
  matchBtnAndArrow(contactSales, arrowSpan).classList.remove("rot-180");
});
