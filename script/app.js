// placing main nav links on seperate layers to reduce reflow time on hover animation

const header = document.getElementsByTagName("header")[0];
const headNavListItems = document.querySelectorAll("a.head-nav-ul-a");

header.addEventListener("mouseenter", function () {
  headNavListItems.forEach(function (item) {
    item.classList.add("separate-layer");
  });
});

header.addEventListener("mouseleave", function () {
  headNavListItems.forEach(function (item) {
    item.classList.remove("separate-layer");
  });
});

// animation on scroll

const imgAnimRock = document.getElementsByClassName("img-anim-rock")[0];
const imgAnimBg = document.getElementsByClassName("img-anim-bg")[0];

function myScroll() {
  let animMargin = 0.011 * window.pageYOffset;
  if (animMargin <= 3.4) {
    imgAnimBg.style.marginTop = animMargin + "%";
    imgAnimRock.style.marginTop = animMargin / 2.7 + "%";
  } else {
    imgAnimBg.style.marginTop = "3.4%";
    imgAnimRock.style.marginTop = "1.25%";
  }
};

let lastTime = Date.now();

function throttle() {
  let now = Date.now();
  if (now - lastTime >= 90) {
    myScroll();
    lastTime = now;
  }
};

document.addEventListener("scroll", throttle);