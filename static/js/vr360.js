$(document).ready(function () {

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $("header").removeClass("transparent").addClass("white");
/*       $(".navbar-brand img:nth-child(1)").addClass("hidden_img");
      $(".navbar-brand img:nth-child(2)").removeClass("hidden_img"); */
    } else {
      $("header").removeClass("white").addClass("transparent");
/*       $(".navbar-brand img:nth-child(2)").addClass("hidden_img");
      $(".navbar-brand img:nth-child(1)").removeClass("hidden_img"); */
    }
  }); 

  $('.photo360').magnificPopup({
  type: 'iframe',
  src: $(this).attr("href")
});
  $('.video360').magnificPopup({
  type: 'iframe',
  src: $(this).attr("href")
});

  $("#post_toggler").click(function () {
    $(".sandwich i").toggleClass("hidden");
    $(".nav_main").toggleClass("hidden");
  });

  $(".top_mnu ul a").click(function () {
    $(".sandwich i").toggleClass("hidden");
    $(".top_mnu").fadeOut(600);
  });

  $(".nav_main").click(function () {
    $(".sandwich i").toggleClass("hidden");
    $(".nav_main").toggleClass("hidden");
  });

  $(".logo").click(function () {
    if ($(".toggle_mnu").is(":visible")) {
      if ($(".nav_main").is(":visible")) {
        $(".sandwich i").toggleClass("hidden");
        $(".nav_main").toggleClass("hidden");
      };
    };
  });
});
