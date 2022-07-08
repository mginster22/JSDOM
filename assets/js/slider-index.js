"use strict";
const imagesDB = [
  "http://pngimg.com/uploads/samoyed_dog/samoyed_dog_PNG10.png",
  "http://pngimg.com/uploads/samoyed_dog/samoyed_dog_PNG8.png",
  "http://pngimg.com/uploads/samoyed_dog/samoyed_dog_PNG31.png",
  "http://pngimg.com/uploads/samoyed_dog/samoyed_dog_PNG3.png",
];
const [prevBtn, nextBtn] = document.querySelectorAll(".slider-containers button");
const img = document.querySelector(".slider-containers>.slide>img");

const slider = new Slider(imagesDB);

const createSlideBtnHunler = (direction) => () => {
  slider.currentIndex = slider[direction === "next" ? "next" : "prev"];
  updateView();
};

nextBtn.addEventListener("click", createSlideBtnHunler("next"));
prevBtn.addEventListener("click", createSlideBtnHunler("prev"));

function updateView() {
  img.setAttribute("src", slider.currentSlide);
}
updateView();
