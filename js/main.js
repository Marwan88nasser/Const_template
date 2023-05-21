var swiper = new Swiper('.trusted-by-swiper', {
  a11y: false,
  freeMode: true,
  noSwiping: true,
  noSwipingClass: 'trusted-by-swiper',
  speed: 25000,
  loop: true,
  autoplay: {
    delay: 0.5,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { /* when window >=0px - webflow mobile landscape/portriat */
      spaceBetween: 16,
    },
    480: { /* when window >=0px - webflow mobile landscape/portriat */
      spaceBetween: 16,
    },
    767: { /* when window >= 767px - webflow tablet */
      spaceBetween: 20,

    },
    992: { /* when window >= 988px - webflow desktop */
      spaceBetween: 25,
      slidesPerView: "auto",

    }
  },
});

// Start WorK filter
let navFilters = document.querySelectorAll('.nav-filter .nav-item .nav-link');
let boxImages = document.querySelectorAll('.boxes-gallery .box');

navFilters.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Remover All Active CLass
    navFilters.forEach(btn => {
      btn.classList.remove('active');
    })
    // Set Active CLass On Target Element
    e.target.classList.add('active')
    // Manage Images
    boxImages.forEach(box => {
      box.style.opacity = 0;
      box.style.visibility = "hidden";
      box.style.transform= "scale(0)";
      setTimeout(() => {
        box.style.display = "none";
      }, 300);
    })
    let targetData = document.querySelectorAll(e.target.dataset.cat);
    targetData.forEach(el => {
      el.style.opacity = 1;
      el.style.visibility = "visible";
      el.style.transform= "scale(1)";
      setTimeout(() => {
        el.style.display= "block";
      }, 300);
      
    })
  })
})
