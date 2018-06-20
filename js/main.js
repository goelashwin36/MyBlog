$(document).ready(function() {

    for (i = 1; i <= 3; i++) {
        $("#hero-" + i).animate({opacity: '1.0'});
        console.log('hero');
    }

    // Initiate the wowjs
    new WOW().init();


    //fade or slide backtotop and navbar1 on scrolling

    $(window).scroll(function () {
        if ($(this).scrollTop() < 150) {
            $('.backtotop').fadeOut("slow");
            $('#navigation1').removeClass('active',1000);
        }
        else {
            $('.backtotop').fadeIn("slow");
            $('#navigation1').addClass('active',1000);


        }
        return false;
    });
    //Backtotop smooth scrolling

    $('.backtotop').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutQuint');
        return false;
    });
    //Smooth scrlling to hash links
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top}, 1500,'easeInOutQuint');
        return false;

    });








});