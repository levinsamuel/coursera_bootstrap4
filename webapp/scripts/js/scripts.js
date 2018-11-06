$(document).ready(function(){

  $('#LoginModal').on('shown.bs.modal', function(){

  });
  $('#LoginButton').click(function(){
    $('#LoginModal').modal('show');
  });
  $('#ReserveButton').click(function(){
    $('#ReservationsModal').modal('show');
  });

  $('#mycarousel').carousel({interval:2000});
  $('#carousel-button').click(function(){
    console.log('carousel button');
    if ($('#carousel-button').children('span').hasClass('fa-pause')) {
      $('#mycarousel').carousel('pause');
      $('#carousel-button').children('span').removeClass('fa-pause');
      $('#carousel-button').children('span').addClass('fa-play');
    } else if ($('#carousel-button').children('span').hasClass('fa-play')) {
      $('#mycarousel').carousel('cycle');
      $('#carousel-button').children('span').removeClass('fa-play');
      $('#carousel-button').children('span').addClass('fa-pause');
    }
  });

  var navE = $('#navbar');
  // console.log("nav element: ", navE);
  // console.log("carousel element", $('#mycarousel'));
  // for (var o in navE) {
  //   if (typeof o == "function") {
  //     console.log("Function of nav element: " + o);
  //   }
  // }
  navE.load('./templates/nav.html');
  $('#logintemplate').load('./templates/login.html');
});
