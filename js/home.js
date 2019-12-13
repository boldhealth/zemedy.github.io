$(function() {
  var testimonialIndex = 0;

  try {
    showTestimonialSlides();
  } catch {
    //
  }

  function currentSlide(n) {
    testimonialIndex = n;
    clearTimeout(window.slideTimer);
    showTestimonialSlides();
  }

  function showTestimonialSlides() {
    var i;
    var slides = document.getElementsByClassName("testimonial");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    testimonialIndex++;

    if (testimonialIndex > slides.length) {
      testimonialIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" tactive", "");
    }

    slides[testimonialIndex - 1].style.display = "block";
    dots[testimonialIndex - 1].className += " tactive";
    window.slideTimer = setTimeout(showTestimonialSlides, 6000);
  }

  $(".dot").on("click", function(e) {
    e.preventDefault();
    var position = $(this).attr("rel");
    currentSlide(position);
  });

  $("#menu-toggle").click(function(e) {
    console.log("clicked");
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $("#remove-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").removeClass("toggled");
  });

  $("#card1").mouseenter(function() {
    $("#iphone1").show();
    $("#iphone2").hide();
    $("#iphone3").hide();
    $("#iphone4").hide();
    $("#iphone").hide();
  });

  $("#card1")
    .mouseleave(function() {
      $("#iphone").show();
      $("#iphone1").hide();
      $("#iphone2").hide();
      $("#iphone3").hide();
      $("#iphone4").hide();
    })
    .mouseleave();

  $("#card2").mouseenter(function() {
    $("#iphone1").hide();
    $("#iphone2").show();
    $("#iphone3").hide();
    $("#iphone4").hide();
    $("#iphone").hide();
  });

  $("#card2")
    .mouseleave(function() {
      $("#iphone").show();
      $("#iphone1").hide();
      $("#iphone2").hide();
      $("#iphone3").hide();
      $("#iphone4").hide();
    })
    .mouseleave();

  $("#card3").mouseenter(function() {
    $("#iphone1").hide();
    $("#iphone2").hide();
    $("#iphone3").show();
    $("#iphone4").hide();
    $("#iphone").hide();
  });

  $("#card3")
    .mouseleave(function() {
      $("#iphone").show();
      $("#iphone1").hide();
      $("#iphone2").hide();
      $("#iphone3").hide();
      $("#iphone4").hide();
    })
    .mouseleave();

  $("#card4").mouseenter(function() {
    $("#iphone1").hide();
    $("#iphone2").hide();
    $("#iphone3").hide();
    $("#iphone4").show();
    $("#iphone").hide();
  });

  $("#card4")
    .mouseleave(function() {
      $("#iphone").show();
      $("#iphone1").hide();
      $("#iphone2").hide();
      $("#iphone3").hide();
      $("#iphone4").hide();
    })
    .mouseleave();

  $("#read_more_btn").on("click", function() {
    console.log("clicked");
    $.scrollTo($("#web_about"), { duration: 0 });
  });

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
