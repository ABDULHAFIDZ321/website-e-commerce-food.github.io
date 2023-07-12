var swiper = new Swiper(".slide-content-card-3", {
    slidesPerView: 3,
    spaceBetween: 50,
    sliderPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".slide-content-pizza", {
    slidesPerView: 3,
    spaceBetween: 50,
    sliderPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".slide-content-burger", {
    slidesPerView: 3,
    spaceBetween: 50,
    sliderPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".slide-content-salad", {
    slidesPerView: 3,
    spaceBetween: 50,
    sliderPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

const containerImageHero = document.querySelector('.container-img-hero');
const imageHero = document.querySelector('.image-hero'); 
const imageDown = document.querySelectorAll('.image-down');


containerImageHero.addEventListener('click',function(e){
    if(e.target.className == 'image-down'){
        imageHero.src = e.target.src;
        
    }
 });

