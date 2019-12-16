$(function() {
  var targetOffset = $("#science_behind").offset().top;

  var $w = $(window).scroll(function() {
    if ($w.scrollTop() > targetOffset) {
      console.log("reached");
      $("#sb1").addClass("animated slideInRight");
      $("#sb2").addClass("animated slideInLeft");
      $("#sb3").addClass("animated slideInDown");
      $("#sb4").addClass("animated slideInLeft");
      $("#sb5").addClass("animated slideInRight");
      $("#sb7").addClass("animated slideInUp");
    } else {
      // ...
    }
  });
});
