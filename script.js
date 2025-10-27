// ----------------------------------
// 1. CUENTA REGRESIVA
// ----------------------------------
const weddingDate = new Date("December 6, 2025 11:00:00").getTime();

const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (document.getElementById("days")) {
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
  }

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML =
      "<p style='font-size: 1.5em; color: var(--color-gold);'>¡Llegó el gran día! ¡Nos casamos!</p>";
  }
}, 1000);

// ----------------------------------
// 2. CARRUSEL DE IMÁGENES
// ----------------------------------
let slideIndex = 0;
const track = document.querySelector('.carousel-track');
const totalSlides = document.querySelectorAll('.carousel-slide').length;

function showSlides() {
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;

  if (track) track.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
}

window.moveSlide = function (n) {
  slideIndex += n;
  showSlides();
}

showSlides();
