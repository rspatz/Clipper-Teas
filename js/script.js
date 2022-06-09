// Mobile Nav Functionality
const primaryNav = document.querySelector('.nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

// Carousel
var slidePosition = 1;
SlideShow(slidePosition);

// Forward/Back Controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  Image Controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName('container');

  if (n > slides.length) {
    slidePosition = 1;
  }

  if (n < 1) {
    slidePosition = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slidePosition - 1].style.display = 'block';
}
