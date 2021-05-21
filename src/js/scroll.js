'use strict';

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('back_to_top-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back_to_top-show');
  }
}

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  // if (window.pageYOffset > 0) {
  //   window.scrollBy(0, -80);

  // setTimeout(backToTop, 0);
  // }
}

const goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

export default trackScroll;

//---------------------------------------------------------
// function scrollTo(to, duration = 700) {
//   const element = document.scrollingElement || document.documentElement,
//     start = element.scrollTop,
//     change = to - start,
//     startDate = +new Date(),
//     // t = current time
//     // b = start value
//     // c = change in value
//     // d = duration
//     easeInOutQuad = function (t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return (c / 2) * t * t + b;
//       t--;
//       return (-c / 2) * (t * (t - 2) - 1) + b;
//     },
//     animateScroll = function () {
//       const currentDate = +new Date();
//       const currentTime = currentDate - startDate;
//       element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
//       if (currentTime < duration) {
//         requestAnimationFrame(animateScroll);
//       } else {
//         element.scrollTop = to;
//       }
//     };
//   animateScroll();
// }

// document.addEventListener('DOMContentLoaded', function () {
//   let btn = document.querySelector('#toTop');
//   window.addEventListener('scroll', function () {
//     // Если прокрутили дальше 599px, показываем кнопку
//     if (pageYOffset > 100) {
//       btn.classList.add('show');
//       // Иначе прячем
//     } else {
//       btn.classList.remove('show');
//     }
//   });

//   // При клике прокручиываем на самый верх
//   btn.onclick = function (click) {
//     click.preventDefault();
//     scrollTo(0, 400);
//   };
// });

// export default scrollTo;
