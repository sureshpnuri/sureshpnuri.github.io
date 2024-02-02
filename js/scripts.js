/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

//countdown
const dayDisplay = document.querySelector(".days .number");
const hourDisplay = document.querySelector(".hours .number");
const minuteDisplay = document.querySelector(".minutes .number");
const secondDisplay = document.querySelector(".seconds .number");

const countdownContainer = document.querySelector(".countdown-container");

const endDate = new Date("July 31 2024 17:00:00");
let saleEnded = false;

const updateTimer = () => {
  let currentDate = new Date();
  let difference = endDate.getTime() - currentDate.getTime();

  if (difference <= 1000) {
    saleEnded = true;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let newDay = Math.floor(difference / day);
  let newHour = Math.floor((difference % day) / hour);
  let newMiute = Math.floor((difference % hour) / minute);
  let newSecond = Math.floor((difference % minute) / second);

  dayDisplay.innerText = newDay < 10 ? "0" + newDay : newDay;
  hourDisplay.innerText = newHour < 10 ? "0" + newHour : newHour;
  minuteDisplay.innerText = newMiute < 10 ? "0" + newMiute : newMiute;
  secondDisplay.innerText = newSecond < 10 ? "0" + newSecond : newSecond;
};

setInterval(() => {
  if (!saleEnded) {
    updateTimer();
  } else {
    countdownContainer.style.display = "none";
  }
}, 1000);


//reviews carousel
window.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const nextButton = document.querySelector('.arrow.next');

  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
      slider.style.transform = `translateX(${-index * 100}%)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  function startAutoSlide() {
      intervalId = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
      clearInterval(intervalId);
  }

  nextButton.addEventListener('click', function () {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
  });

  // Initial slide show
  showSlide(currentIndex);

  // Start automatic slide change
  startAutoSlide();
});


  
  

  


  
  



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
