// CODE taken from https://codepen.io/anon/pen/QmggWZ


$(window).scroll(function(){
    $(".fade").css("opacity", 1 - $(window).scrollTop() / 500);
  });
