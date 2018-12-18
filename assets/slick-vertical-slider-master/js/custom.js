
function slickHeight() {
  var winWidth = $(window).width();
    if (winWidth > 7067) {
        var sliderHeight = $('.slick-slider').height();
        console.log(sliderHeight);
        $('#slick-pager .slick-pager').css('height', sliderHeight - 60);
    }
}
$( window ).resize(function() {
    slickHeight();
});
jQuery(document).ready(function($) {
   /* $('.slick-pager').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
       // arrows: false,
       // fade: true,
        autoplay: true,
        //adaptiveHeight: true,
        asNavFor: '.slick-pager'
         focusOnSelect: true,
        vertical: true,
    });*/
    $('.slick-pager').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
         autoplay: true,
        nextArrow: $('.pagerNavigation .bottom'),
        prevArrow: $('.pagerNavigation .top'),
        asNavFor: '.slick-pager',
        focusOnSelect: true,
        vertical: true,
        responsive: [{
            breakpoint: 0,
            settings: {
                vertical: false
            }
        }]
    });
    slickHeight();
});

