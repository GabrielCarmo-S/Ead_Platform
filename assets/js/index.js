$(document).ready(function () { 
  $('#teste').on('click', function () {
    $('.sidebar').toggleClass('active');
    $('.overlay').toggleClass('active');
  });
  
  $('.overlay').on('click', function () {
    $('.overlay').removeClass('active');
    $('.sidebar').removeClass('active');
  });
});