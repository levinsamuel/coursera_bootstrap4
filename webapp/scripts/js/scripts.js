
$(document).ready(function(){

  $('#navbar').load('./templates/nav.html', function() {

    $('#logintemplate').load('./templates/login.html', function() {

      console.log("loaded nav bar and modal");
      $('#LoginButton').click(function() {
        $('#LoginModal').modal('show');
      });
      console.log("Added button function");
    });

    var path = window.location.pathname;
    path = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
    console.log(path);

    document.getElementById('navitem' + path).classList.add('active');
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
});

var navlink = function(page) {

  console.log("received click, go to page: ", page);
  if (page) {
    window.location.replace(page);
  }
}
