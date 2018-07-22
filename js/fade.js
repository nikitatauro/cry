// CODE taken from https://codepen.io/anon/pen/QmggWZ


$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });
