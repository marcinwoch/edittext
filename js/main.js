$(document).ready(function() {
  /*-----------------------------
    NAVBAR-MENU
  -------------------------------*/

  if ($('.btn').on('click', function(){
    if($(this).hasClass('dark')){
      $('.set_img').attr('src', 'img/settings_d.png');
    } else {
      $('.set_img').attr('src', 'img/settings.png');
    }
  }));

  $(this).mouseup(function(e) {
    var menuSettings = $('#menu-settings');
    var iconSettings = $('.icon-settings');
    if(!menuSettings.is(e.target) && menuSettings.has(e.target).length === 0 && iconSettings.has(e.target).length === 0) {
      menuSettings.fadeOut(500);
      iconSettings.removeClass('active');
    }
  });

  $('.icon-settings').click(function(){
    $(this).toggleClass('active');
    $('#menu-settings').fadeToggle(500);
    $('.icon-menu').removeClass('active');
    $('#about').fadeOut(500);
  });

  $('.icon-menu').click(function(){
    $(this).toggleClass('active');
    $('#about').fadeToggle(500);
    $('.icon-settings').removeClass('active');
    $('#menu-settings').fadeOut(500);
  });

  /*-----------------------------
    MENU SETTINGS - SLIDER
  -------------------------------*/
  //start f. changeFontSize - zmiana wielkości czcionki w zależności od szerokości ekranu

  function changeFontSize(currentValue){
    $( "#font_value" ).val(currentValue + "px");
    $('.general-text p').css({
      "font-size": currentValue
    });
  };

  function fontSizeDetection(){
    if ($(document).width() < 768) {
      $("#slider-font").slider({
        range: "min",
        value: 18,
        min: 16,
        max: 22,
        step: 2,
        slide: function(event, ui){
          changeFontSize(ui.value)
        }
      });
      $("#font_value").val( $("#slider-font").slider( "value" ) + "px" );
    } else {
      $("#slider-font").slider({
        range: "min",
        value: 22,
        min: 16,
        max: 32,
        step: 2,
        slide: function(event, ui){
          changeFontSize(ui.value)
        }
      });
      $("#font_value").val( $("#slider-font").slider( "value" ) + "px" );
    }
  }

  fontSizeDetection();

  //koniec f. changeFontSize
  //-----------------------------------------------------------------
  //start .f changeContentWidth

  function changeContentWidth(currentValue){
    $( "#width_value" ).val(currentValue + "px");
    $('.container').css({
      "padding-left": currentValue,
      "padding-right": currentValue
    });
  }

  function widthDetection(){
    if ($(document).width() >= 768 && $(document).width() < 1024 ) {
      $("#slider-width").slider({
        range: "min",
        value: 100,
        min: 100,
        max: 300,
        step: 1,
        slide: function(event, ui){
          changeContentWidth(ui.value)
        }
      });
      $("#width_value").val( $("#slider-width").slider( "value" ) + "px" );
    } else if ($(document).width() >= 1024 ) {
      $("#slider-width").slider({
        range: "min",
        value: 200,
        min: 200,
        max: 400,
        step: 1,
        slide: function(event, ui){
          changeContentWidth(ui.value)
        }
      });
      $("#width_value").val( $("#slider-width").slider( "value" ) + "px" );
    }
  }

  widthDetection();

  $(window).resize(function(){
    widthDetection();
  });


  //koniec f. changeContentWidth
  //-----------------------------------------------------------------

  // start .f changeStyle

  $('#style-1').click(function () {
    $('body').removeClass('styledark');
    $('.navbar').removeClass('light');
  });

  $('#style-2').click(function () {
    $('body').addClass('styledark');
    $('.navbar').addClass('light');
  });

  /*-----------------------------
    RESIZE TEXTAREA
  -------------------------------*/
  $('#convert-btn').hide();

  $('#users-text').focus(function() {
    $(this).animate({
      height: "200"
    }, 500);
    $('#convert-btn').fadeIn(500);
  });

  $('#users-text').focusout(function() {
    $('#users-text').animate({
      height: "58"
    }, 500);
    if ($(this).val().length === 0) {
      $('#convert-btn').fadeOut(300);
    }
  });

  $('#convert-btn').click(function() {
    $('#users-text').animate({
      height: "58"
    }, 500);
    $(this).fadeOut(300);
  });

});

/*-----------------------------
  PASTE TEXT FUNCTION
-------------------------------*/
function pasteText() {
    var x = document.getElementById('users-text').value;
    x = x.replace(/\r?\n/g, '<br />');
    document.getElementById('content-text').innerHTML = x;
    document.getElementById('users-text').value = "";
}
