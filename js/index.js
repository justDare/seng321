var header = $('#nav-holder');
var nav_toggled = false
var scroll;

$(window).scroll(function () {
  scroll = $(window).scrollTop();
  if (scroll > 50) {
    header.css({'background-color':'#e8e8e8f2', 'border-bottom':'1px solid #d4d4d4'});
  } else {
    header.css({'background-color':'transparent', 'border-bottom':'none'});
  }
});




