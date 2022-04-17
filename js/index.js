console.log("My index.js file is loaded correctly. Nay? Yay! :)");

$(document).ready(function(){
  $(".out").click(function(){
    $("p").fadeOut();
  });
  $(".in").click(function(){
    $("p").fadeIn();
  });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

$(document).ready(function(){
  $(".animate").click(function(){
    // $(".imgAnimate").animate({right: '30%'});
    $(".imgAnimate").animate({left: '30%'});
    $(".imgAnimate").animate({left: '0%'});
  });
});