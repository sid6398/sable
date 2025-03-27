// var swiper = new Swiper('.swiper-container', {
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     autoplay: {
//         delay: 1000,
//         disableOnInteraction: true,
//     },
//     slidesPerView: "2",
//     spaceBetween: 8,
// });

$(document).ready(function(){
    $('.testimonial-carousel').slick({
        infinite: true,
        slidesToShow: 2, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false, 
        dots: false, 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1 
                }
            }
        ]
    });
});





gsap.to(".card1", {
    rotationY: 25,   // More noticeable tilt
    rotationX: 15,
    y: -20,          // More floating height
    duration: 2.5,   // Slow & smooth
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});


gsap.to(".card2", {
    rotationY: 360,
    duration: 5,
    repeat: -1,
    ease: "linear"
});

gsap.to(".card3", {
    x: "80vw",
    rotationY: 360, 
    rotationX: 180,
    duration: 4, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut"
  });
  
  
  
  
  
