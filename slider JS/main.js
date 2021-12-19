// Get All Element
let images = Array.from(document.querySelectorAll(".image img"));
let slidesCount = images.length;
let currentSlide = 1;
let slidNummber = document.getElementById("nummber-of");
let nextButton = document.getElementById("Next");
let prevButton = document.getElementById("prevend");

// creat A Event click
nextButton.onclick = nextSlide;
prevButton.onclick = previous;

// creat A bubbles ul
let bubbles = document.createElement("ul");

// set A attribute for ul
bubbles.setAttribute("id", "pagination");

// creat A lis & append to ul
for (let i = 0; i < slidesCount; i++) {
  let lis = document.createElement("li");
  bubbles.appendChild(lis);
}
// set A ul to window
document.getElementById("bubbles").appendChild(bubbles);

// creat A li Array
liBubbles = Array.from(document.querySelectorAll("#pagination li"));

// turn on the checker function
theChecker();

// next function
function nextSlide() {
  if (currentSlide == slidesCount) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// previous function
function previous() {
  if (currentSlide == 1) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
// creat a checker function
function theChecker() {
  slidNummber.textContent = `slide # ${currentSlide} of ${slidesCount}`;
  // remove class activ
  removeAllClass();
  // set class activ
  images[currentSlide - 1].classList.add("activ");
  bubbles.children[currentSlide - 1].classList.add("activ");
}
// remove all active class
function removeAllClass() {
  images.forEach(function (img) {
    img.classList.remove("activ");
  });
  liBubbles.forEach(function (bubl) {
    bubl.classList.remove("activ");
  });
}
