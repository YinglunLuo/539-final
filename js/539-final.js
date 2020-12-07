$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('header').css('background-position', 'left ' + ((scrolledY)) + 'px');
  });
  
  