let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slider img');
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}
function nextSlide() {
  showSlide(slideIndex += 1);
}

// eslint-disable-next-line no-unused-vars
function prevSlide() {
  showSlide(slideIndex -= 1);
} 

// Auto slide
setInterval(() => {
  nextSlide();
}, 5000);