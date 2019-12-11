$(function(){
  $('#testomonial2').hide();
  $('#testomonial3').hide();
  $('#testomonial4').hide();
  $('#testomonial5').hide();

  var test1 = $('#test_control_1').on('click', function(){
    $('#testomonial1').show();
    $('#testomonial2').hide();
    $('#testomonial3').hide();
    $('#testomonial4').hide();
    $('#testomonial5').hide();
    $('#test_control_1').addClass('tactive');
    $('#test_control_2').removeClass('tactive');
    $('#test_control_3').removeClass('tactive');
    $('#test_control_4').removeClass('tactive');
    $('#test_control_5').removeClass('tactive');
  });

  var test2 = $('#test_control_2').on('click', function(){
    $('#testomonial1').hide();
    $('#testomonial2').show();
    $('#testomonial3').hide();
    $('#testomonial4').hide();
    $('#testomonial5').hide();
    $('#test_control_1').removeClass('tactive');
    $('#test_control_2').addClass('tactive');
    $('#test_control_3').removeClass('tactive');
    $('#test_control_4').removeClass('tactive');
    $('#test_control_5').removeClass('tactive');
  });

  var test3 = $('#test_control_3').on('click', function(){
    $('#testomonial1').hide();
    $('#testomonial2').hide();
    $('#testomonial3').show();
    $('#testomonial4').hide();
    $('#testomonial5').hide();
    $('#test_control_1').removeClass('tactive');
    $('#test_control_2').removeClass('tactive');
    $('#test_control_3').addClass('tactive');
    $('#test_control_4').removeClass('tactive');
    $('#test_control_5').removeClass('tactive');
  });

  var test4 = $('#test_control_4').on('click', function(){
    $('#testomonial1').hide();
    $('#testomonial2').hide();
    $('#testomonial3').hide();
    $('#testomonial4').show();
    $('#testomonial5').hide();
    $('#test_control_1').removeClass('tactive');
    $('#test_control_2').removeClass('tactive');
    $('#test_control_3').removeClass('tactive');
    $('#test_control_4').addClass('tactive');
    $('#test_control_5').removeClass('tactive');
  });

  var test5 = $('#test_control_5').on('click', function(){
    $('#testomonial1').hide();
    $('#testomonial2').hide();
    $('#testomonial3').hide();
    $('#testomonial4').hide();
    $('#testomonial5').show();
    $('#test_control_1').removeClass('tactive');
    $('#test_control_2').removeClass('tactive');
    $('#test_control_3').removeClass('tactive');
    $('#test_control_4').removeClass('tactive');
    $('#test_control_5').addClass('tactive');
  });

  for(var x=0; x<5; x++){
    setInterval(function() {
      console.log(x);
    }, 3000);
  }

  $("#menu-toggle").click(function(e) {
      console.log('clicked');
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
  $("#remove-toggle").click(function(e){
      e.preventDefault();
      $("#wrapper").removeClass("toggled");
  });
  $('#iphone').show();
  $('#iphone1').hide();
  $('#iphone2').hide();
  $('#iphone3').hide();
  $('#iphone4').hide();

  $('#card1').mouseenter(function(){
    $('#iphone1').show();
    $('#iphone2').hide();
    $('#iphone3').hide();
    $('#iphone4').hide();
    $('#iphone').hide();
  })

  $('#card1').mouseleave(function () {
    $('#iphone').show();
    $('#iphone1').hide();
    $('#iphone2').hide();
    $('#iphone3').hide();
    $('#iphone4').hide();
  }).mouseleave();

  $('#card2').mouseenter(function(){
    $('#iphone1').hide();
    $('#iphone2').show();
    $('#iphone3').hide();
    $('#iphone4').hide();
    $('#iphone').hide();
  })

  $('#card2').mouseleave(function () {
    $('#iphone').show();
    $('#iphone1').hide();
    $('#iphone2').hide();
    $('#iphone3').hide();
    $('#iphone4').hide();
  }).mouseleave();

  $('#card3').mouseenter(function(){
    $('#iphone1').hide();
    $('#iphone2').hide();
    $('#iphone3').show();
    $('#iphone4').hide();
    $('#iphone').hide();
  })

  $('#card3').mouseleave(function () {
    $('#iphone').show();
    $('#iphone1').hide();
    $('#iphone2').hide();
    $('#iphone3').hide();
    $('#iphone4').hide();
  }).mouseleave();

  $('#card4').mouseenter(function(){
    $('#iphone1').hide();
    $('#iphone2').hide();
    $('#iphone3').hide();
    $('#iphone4').show();
    $('#iphone').hide();
  })

  $('#card4').mouseleave(function () {
    $('#iphone').show();
    $('#iphone1').hide();
    $('#iphone2').hide();
    $('#iphone3').hide();
    $('#iphone4').hide();
  }).mouseleave();

  $('#read_more_btn').on('click', function(){
    console.log('clicked');
    $.scrollTo($('#web_about'), { duration: 0});
  });

  var targetOffset = $("#science_behind").offset().top;

  var $w = $(window).scroll(function(){
      if ( $w.scrollTop() > targetOffset ) {   
          console.log('reached');
          $('#sb1').addClass('animated slideInRight');
          $('#sb2').addClass('animated slideInLeft');
          $('#sb3').addClass('animated slideInDown');
          $('#sb4').addClass('animated slideInLeft');
          $('#sb5').addClass('animated slideInRight');
          $('#sb7').addClass('animated slideInUp');
      } else {
        // ...
      }
  });
})