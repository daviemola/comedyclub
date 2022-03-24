(function ($) {
  "use strict";
  // Navbar Menu JS
  $(".scroll-btn, .navbar .navbar-nav li a").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 65,
        },
        1500
      );
    e.preventDefault();
  });
  $(".navbar .navbar-nav li a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Header Sticky, Go To Top JS JS
  $(window).on("scroll", function () {
    // Header Sticky JS
    if ($(this).scrollTop() > 150) {
      $(".navbar").addClass("is-sticky");
    } else {
      $(".navbar").removeClass("is-sticky");
    }

    // Go To Top JS
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
  });

  // Menu Icon JS
  $(".menu-icon").on("click", function () {
    console.log("menu open");
    $(this).toggleClass("active");
  });

  // Click JS
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });

  // Preloader JS
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });
  ``;

  // 17. WOW Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  // Datepicker
  $(function () {
    $("#basic").daterangepicker();
  });
})(jQuery);
