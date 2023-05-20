var swiper = new Swiper('.trusted-by-swiper',{
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