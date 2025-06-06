document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
  
      prevBtn.style.display = index === 0 ? "none" : "block";
      nextBtn.style.display = index === slides.length - 1 ? "none" : "block";
    }
  
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
      }
    });
  
    nextBtn.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
      }
    });
  
    showSlide(currentIndex);
  });
  