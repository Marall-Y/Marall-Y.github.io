$(document).ready(function ($) {
  "use strict";
  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });
});
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

/*** Quantity Counter ***/
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

var valueCount;

//plus button
document.querySelector(".plus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount++;
  document.getElementById("quantity").value = valueCount;

  if (valueCount > 1) {
    document.querySelector(".minus-btn").removeAttribute("disabled");
    document.querySelector(".minus-btn").classList.remove("disabled");
  }
});

//Minus button
document.querySelector(".minus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount--;
  document.getElementById("quantity").value = valueCount;

  if (valueCount == 1) {
    document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
  }
});
