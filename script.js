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

const toogle =document.querySelector('.menu-toogle');
const span1 =document.querySelector('.span-1');
const span2 =document.querySelector('.span-2');
const span3 =document.querySelector('.span-3');
const navMenu=document.querySelector('.ul-navbar');

toogle.addEventListener('click',function () {
  span1.classList.toggle('span-1-active');
  span2.classList.toggle('span-2-active');
  span3.classList.toggle('span-3-active');

})