// function testWebP(callback) {

//   var webP = new Image();
//   webP.onload = webP.onerror = function() {
//     callback(webP.height == 2);
//   };
//   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function(support) {

//   if (support == true) {
//     document.querySelector('body').classList.add('webp');
//   } else {
//     document.querySelector('body').classList.add('no-webp');
//   }
// });

$(document).ready(function() {
  window.onscroll = function showHeader() {
    console.log(window.pageYOffset);
    // var header = document.querySelector('.header');
    if (window.pageYOffset > 200) {

      if ($(".header").hasClass("header__fixed")) {

      } else {
        $(".header").toggleClass("header__fixed");
      }

    } else {
      if ($(".header").hasClass("header__fixed")) {
        $(".header").toggleClass("header__fixed");
      }
    }
  }
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });



  // $('.information__item-counter').counterUp({
  //   delay: 10,
  //   time: 1000
  // });
  // $(".accordion__item-trigger").click(function(event) {
  //   $(this).toggleClass('active').next().slideToggle(300);
  // });
  // $("#nav_toggle").on("click", function(event) {
  //   event.preventDefault();

  //   $(this).toggleClass("active");
  //   $("#nav").toggleClass("active");
  // });
});