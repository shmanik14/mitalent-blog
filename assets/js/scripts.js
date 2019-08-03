$(document).ready(function(){

  $("#addClass").click(function () {
    $('#qnimate').addClass('popup-box-on');
  });

  $("#removeClass").click(function () {
    $('#qnimate').removeClass('popup-box-on');
  });

      //slick home slider carousel
      $('.banner-carousel').slick({
        dots: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        arrows: false,
      });

      //slick home slider carousel
      $('.blog-slider').slick({
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        arrows: false,
      });

      //content slider carousel
      $('.content-gallery').slick({
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        arrows: false,
      });

      //similar-blogs carousel
      $('.similar-blogs').slick({
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3,
        slidesToScroll: 1,
      });

      /*START MENU JS*/   
        $(window).on('scroll', function(){
          if ( $(window).scrollTop() > 100 ) {
            $('.site-navigation, .header-white, .header-top-menu').addClass('navbar-fixed');
            $('.navbar-fixed').removeClass('header-top-menu');
          } else {
            $('.site-navigation, .header-top-menu').removeClass('navbar-fixed');
            $('.site-navigation, .header-top-menu').addClass('header-top-menu');
          }
        });       
      /*END MENU JS*/

      //mixitup
      var containerEl = document.querySelector('#profilelist');
      var mixer = mixitup(containerEl);

});