// const card1 = document.querySelector('.card1');
// const card2 = document.querySelector('.card2');
// const orderNow = document.querySelector('.order');





// card1.addEventListener('mouseover', function(e) {
//   console.log('hover');
//   orderNow.classList.add('translate-y-[-100%]');
// });


// card1.addEventListener('mouseleave', function(e) {
//   orderNow.classList.remove('translate-y-[-100%]');
// });


// card2.addEventListener('mouseover', function(e) {
//   console.log('hover');
//   orderNow.classList.add('translate-y-[-100%]');
// });


// card2.addEventListener('mouseleave', function(e) {
//   orderNow.classList.remove('translate-y-[-100%]');
// });


const nav = document.querySelector(".navigation");

window.addEventListener("scroll", function (e) {
  nav.classList.add('backdrop-blur-sm','bg-black/[.75]', window.scrollY > 0);

  if (!window.scrollY > 0) {
    nav.classList.remove('bg-black/[.75]','backdrop-blur-sm', window.scrollY < 0);
  }


})









const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot mr-[1.5rem] bg-black " data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
console.log('clicked');

      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const prevSlide = function () {
        console.log('clicked');

      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
  
      activateDot(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();
  

