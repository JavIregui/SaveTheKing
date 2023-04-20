const slides = document.getElementById("slides");
const prevButton = document.getElementById("arrow-prev");
const nextButton = document.getElementById("arrow-next");
const slideWidth = slides.clientWidth;

nextButton.addEventListener("click", () => {
  if(slides.scrollLeft == slideWidth * 2){
    slides.scrollLeft = 0; 
  }
  else{
    slides.scrollLeft += slideWidth;  
  }
});

prevButton.addEventListener("click", () => {
  if(slides.scrollLeft == 0){
    slides.scrollLeft = slideWidth * 2; 
  }
  else{
    slides.scrollLeft -= slideWidth;  
  }
  
});