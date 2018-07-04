$(document).ready(function() {
    for (i = 1; i <= 3; i++) {
        $("#hero-" + i).animate({opacity: '1.0'});
    }

    // Initiate the wowjs
    new WOW().init();


    //fade or slide backtotop and navbar1 on scrolling

    $(window).scroll(function () {
        if ($(this).scrollTop() < 150) {
            $('.backtotop').fadeOut("slow");
            $('#navigation1').removeClass('active',500);
        }
        else {
            $('.backtotop').fadeIn("slow");
            $('#navigation1').addClass('active',500);


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
            scrollTop: $(id).offset().top - 50}, 1500,'easeInOutQuint');
        return false;

    });
        $('.scroller').click(function(){
            $('html, body').animate({
                scrollTop: $('#about').offset().top - 50}, 1500, 'easeInOutQuint');
            return false;

        });

    $('#formbutton').click(function(){
        var letters = /^[a-zA-Z\s]+$/;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var email=$('#email');
        var  bool = true;

        for(i=1;i<=3;i++){
            var x = $('#txt'+i)
            if(x.val().match(letters)){
                if(x.hasClass('red')){
                    x.removeClass('red')
                }
                x.addClass('green');
                bool = bool && true;
            }
            else{
                if(x.hasClass('green')){
                    x.removeClass('green')
                }
                x.addClass('red');
                bool = bool && false;
            }
        }
        if(email.val().match(re)){
            if(email.hasClass('red')){
                email.removeClass('red')
            }
            email.addClass('green');
            bool = bool && true;
        }
        else{
            if(email.hasClass('green')){
                email.removeClass('green')
            }
            email.addClass('red');
            bool = bool && false;
        }
        if(bool===true){
            $('.response').fadeIn(500);

        }
        else{
            $('.response').fadeOut(500);
        }
        bool = bool && false;

    });





});