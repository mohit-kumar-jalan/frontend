const slideButton = document.querySelectorAll(".slide-button");
//console.log(slideButton)
const slidesContainer = document.querySelector(".slides-container");
//console.log(slidesContainer)
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
//console.log(nextBtn,prevBtn)
const navigationDots = document.querySelector(".navigation-dots");

let numberofButton = slideButton.length;
let slideWidth = slideButton[0].clientWidth;
let currentSlide = 0;

function createButton() {
  var e = document.getElementsByClassName("slide-button");
  for (let i = 0; i < e.length; i++) {
    var button = document.createElement("button");
    button.textContent = "SLIDE" + " " + (i + 1);
    button.addEventListener("click", buttonClicked(i));
    e[i].appendChild(button);
  }
}

function buttonClicked(index) {
  return function () {
    alert(index + 1);
  };
}

createButton();

function init() {
  slideButton.forEach((btn, i) => {
    btn.style.left = i * 100 + "%";
  });

  slideButton[0].classList.add("active");

}

init();


function nextSlide() {
  if (currentSlide >= numberofButton - 1) {
    goToSlide(0);
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
}

function prevSlide() {
  if (currentSlide <= 0) {
    goToSlide(numberofButton - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
}

function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;
}
