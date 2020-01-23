$(function () {
  "use strict";
  initSlideShows();
});

function initSlideShows() {
  var slideShows = $('.slider-container>div');

  slideShows.each(function (ind, elem) {
    var slideShowClassName  = elem.className,
        slideshowDashNumber = slideShowClassName.match(/cycle-slideshow-\d$/) ? slideShowClassName.match(/\d/)[0] : null;

    if(slideshowDashNumber) {
      var backWardButtonClassName = '.arrow-backward-' + slideshowDashNumber,
          forwardButtonClassName  = '.arrow-forward-' + slideshowDashNumber,
          innerSlideshowName      = '.inner-cycle-slideshow-' + slideshowDashNumber;

      $(elem).cycle();
      $(innerSlideshowName).cycle();
      $(innerSlideshowName).cycle('pause');

      $(backWardButtonClassName).on('click', function (ev) {
        ev.preventDefault();
        $('.' + slideShowClassName).cycle('prev');
        $(innerSlideshowName).cycle('prev');
      });

      $(forwardButtonClassName).on('click', function (ev) {
        ev.preventDefault();
        $('.' + slideShowClassName).cycle('next');
        $(innerSlideshowName).cycle('next');
      });
    }
  });
}
//   // Find slideshows
//   var slideShows = $('.slider-container>div');
// ​
//   slideShows.each(function (ind, elem) {
// ​
//     var slideShowClassName = elem.className;
//     var slideshowDashNumber = slideShowClassName.match(/cycle-slideshow-\d$/) ? slideShowClassName.match(/\d/)[0] : null;
// ​
//     // If it is there any slideshow parent
//     if (slideshowDashNumber) {
// ​
//       var backWardButtonClassName = '.arrow-backward-' + slideshowDashNumber;
//       var forwardButtonClassName = '.arrow-forward-' + slideshowDashNumber;
//       var innerSlideshowName = '.inner-cycle-slideshow-' + slideshowDashNumber;
// ​
//       $(elem).cycle();
//       $(innerSlideshowName).cycle();
// ​
//       $(backWardButtonClassName).on('click', function (ev) {
//         ev.preventDefault();
//         $('.' + slideShowClassName).cycle('prev');
//         $(innerSlideshowName).cycle('prev');
//       });
// ​
//       $(forwardButtonClassName).on('click', function (ev) {
//         ev.preventDefault();
//         $('.' + slideShowClassName).cycle('next');
//         $(innerSlideshowName).cycle('next');
//       });
// ​
//     } 
// ​
//   });