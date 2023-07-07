$(document).ready(function () {
//slider
  $('.datak').slick({
    setting-name: setting-value
  });
  //scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new WOW().init();
});
