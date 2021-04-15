"use strict";

/*const panelofContainer = document.querySelectorAll(".panel");
const forwardBtn = document.querySelector("#btn-forward");
const backwardBtn = document.querySelector("#btn-back");

let currenActive = 1;

function update() {
  panelofContainer.forEach((panel, idx) => {
    if (idx < currenActive) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });
}

forwardBtn.addEventListener("click", function () {
  currenActive++;

  if (currenActive >= panelofContainer.length) {
    currenActive = panelofContainer.length;
  }
  console.log(currenActive);
  update();
});

backwardBtn.addEventListener("click", function () {
  currenActive--;

  if (currenActive < 1) {
    currenActive = 1;
  }
  console.log(currenActive);
  update();
});
*/

const slides = document.querySelectorAll(".panel");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "panel active";
}
