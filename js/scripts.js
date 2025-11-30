document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('downloadCvBtn');

  downloadBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Path to your CV file relative to index.html
    const fileUrl = 'Jasbar-Alberca-Legaspina-Resume.pdf';
    const fileName = 'Jasbar_Legaspina_Resume.pdf'; // File name for download

    // Create temporary link and trigger download
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});


//***Scroll Behavior *******/
 window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {navbar.classList.remove('scrolled');}});
    //***Scroll Behavior *******/


    /**Navbar */
     let lastScrollTop = 0;
  const navbar = document.querySelector('.custom-navbar');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide navbar when scrolling down
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.style.transform = 'translateY(-100%)';
      navbar.style.transition = 'transform 0.4s ease';
    } 
    // Show navbar when scrolling up
    else {
      navbar.style.transform = 'translateY(0)';
      navbar.style.transition = 'transform 0.4s ease';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  //******Navbar */


   // Animate About Me image and text separately
  const fadeElements = document.querySelectorAll('.fade-in-left, .fade-in-right');

  function handleFadeIn() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleFadeIn);
  handleFadeIn();
  
   // Animate About Me image and text separately

   // CArousel for mobile and Tablet version//
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

if (track && nextBtn && prevBtn) {
  let slides = Array.from(track.children);

  // Clone first and last for seamless looping
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.prepend(lastClone);

  let index = 1; // start at first original slide
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * index}px)`;

  function moveToSlide(idx) {
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${slideWidth * idx}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index >= slides.length) return; // safety
    index++;
    moveToSlide(index);
  });

  prevBtn.addEventListener('click', () => {
    if (index <= 0) return; // safety
    index--;
    moveToSlide(index);
  });

  // Looping: reset position instantly after transition if at cloned slide
  track.addEventListener('transitionend', () => {
    slides = Array.from(track.children); // update slides including clones
    if (slides[index].isSameNode(firstClone)) {
      track.style.transition = 'none';
      index = 1;
      track.style.transform = `translateX(-${slideWidth * index}px)`;
    }
    if (slides[index].isSameNode(lastClone)) {
      track.style.transition = 'none';
      index = slides.length - 2;
      track.style.transform = `translateX(-${slideWidth * index}px)`;
    }
  });
}
// CArousel for mobile and Tablet version//
//Carousel//
document.querySelectorAll('.tablet-carousel-container').forEach(container => {
  const track = container.querySelector('.carousel-track');
  const nextBtn = container.querySelector('.next-btn');
  const prevBtn = container.querySelector('.prev-btn');

  const slides = Array.from(track.children);
  const style = getComputedStyle(slides[0]);
  const slideWidth = slides[0].offsetWidth + parseFloat(style.marginRight);

  // Optional stagger for Photography
  if (container.closest('#photography')) {
    track.style.marginLeft = '10%';
  }

  // Helper function to move slides visually
  function slideNext() {
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${slideWidth}px)`;

    track.addEventListener('transitionend', function handler() {
      track.style.transition = 'none';
      // Move first slide to the end
      track.appendChild(track.firstElementChild);
      track.style.transform = 'translateX(0)';
      track.removeEventListener('transitionend', handler);
    });
  }

  function slidePrev() {
    track.style.transition = 'none';
    // Move last slide to the front
    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.style.transform = `translateX(-${slideWidth}px)`;

    // Allow transition to slide to 0
    requestAnimationFrame(() => {
      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = 'translateX(0)';
    });
  }

  nextBtn.addEventListener('click', slideNext);
  prevBtn.addEventListener('click', slidePrev);
});

//****Scroll animation for service */
document.addEventListener("scroll", () => {
  document.querySelectorAll('.fade-in-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

//**Testimonials */
$(document).ready(function(){
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    center: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 700,
    responsiveClass: true,
    nav: false,
    dots: true,
    responsive:{
      0:{ items:1, stagePadding:40 },
      768:{ items:1.3, stagePadding:100 },
      1200:{ items:1.6, stagePadding:150 }
    }
  });
});