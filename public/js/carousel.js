const slides = document.getElementById("slides");
const prevButton = document.getElementById("arrow-prev");
const nextButton = document.getElementById("arrow-next");
const slideWidth = slides.clientWidth;

nextButton.addEventListener("click", () => {
  slides.scrollLeft += slideWidth;    
});

prevButton.addEventListener("click", () => {
  slides.scrollLeft -= slideWidth;
});