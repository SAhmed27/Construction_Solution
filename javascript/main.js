
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



    // const faders = document.querySelector(".fade-in");
    // const appearOptions={
    //     threshold:1,
    //     rootMargin:"0px 0px -100px 0px"
    // };

    // const appearOnScroll = new  IntersectionObserver(function(entries,appearOnScroll){
    //     entries.forEach(entry=>{
    //         if(!entry.isIntersecting){
    //             return;
    //         }else{
    //             entry.target.classList.add("appear");
    //             appearOnScroll.unobserve(entry.target);
    //         }
    //     });
    // },appearOptions);

    // faders.forEach(fader => {
    //         appearOnScroll.observe(fader);
    //     });
    //   var swiper = new Swiper(".mySwiperdemo", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     slidesPerGroup: 3,
    //     loop: true,
    //     loopFillGroupWithBlank: true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   });