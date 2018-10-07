$(document).ready(function() {

    // Initiate the wowjs
    new WOW().init();

    //hero-text


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
    //Smooth scrolling to hash links
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - 65}, 1500,'easeInOutQuint');
        return false;

    });
        $('.scroller').click(function(){
            $('html, body').animate({
                scrollTop: $('#about').offset().top - 65}, 1500, 'easeInOutQuint');
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



    particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":640.9588744762158}},
            "color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":4}
            ,"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.41662326840954034,"random":false,
                "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4.005992965476349,"random":true,
                "anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":176.26369048095938,
                "color":"#ffffff","opacity":0.25638354979048633,"width":0.8011985930952699},"move":{"enable":true,"speed":6,"direction":"none",
                "random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
        "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},
                "resize":true},"modes":{"grab":{"distance":250,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,
                    "opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
        "retina_detect":true});});