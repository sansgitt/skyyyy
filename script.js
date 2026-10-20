const slider = document.getElementById("imageSlider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("sliderDots");

let currentSlide = 0;
let autoplayInterval;
let touchStartX = 0;
let touchEndX = 0;

const autoplayDelay = 4000;

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoplay();
    });

    dotsContainer.appendChild(dot);
  });
}

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });

  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = index;
  updateSlides();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, autoplayDelay);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoplay();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoplay();
});

slider.addEventListener("mouseenter", stopAutoplay);
slider.addEventListener("mouseleave", startAutoplay);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextSlide();
    resetAutoplay();
  }

  if (event.key === "ArrowLeft") {
    prevSlide();
    resetAutoplay();
  }
});

slider.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

slider.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > 50) {
    prevSlide();
    resetAutoplay();
  }

  if (swipeDistance < -50) {
    nextSlide();
    resetAutoplay();
  }
}

createDots();
startAutoplay();