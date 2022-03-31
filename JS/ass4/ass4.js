/*for (let i = 0; i < 5; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.addEventListener("click", buttonClicked(i));
  value.appendChild(button[i]);
}

function buttonClicked(index) {
  return function () {
    alert(index);
  };
}*/

function createButton(){
  var e = document.getElementsByClassName("showSlide")
  for(let i=0;i<e.length;i++)
    {
        var button = document.createElement("button");
        button.textContent = "SLIDE"+" "+(i+1);
        button.addEventListener("click",buttonClicked(i));
        e[i].appendChild(button);
    }
}
 
function buttonClicked(index) {
  return function () {
    alert(index+1);
  }
}

var slide_index = 1;

function nextSlide(n) {
  displaySlides((slide_index += n));
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

createButton();