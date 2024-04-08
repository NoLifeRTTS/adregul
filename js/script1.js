$(document).ready(function() {
    $('.section1__burger img').click(function(){
        $('.section1__menuMob').css('right', '0px');
    });

    $('.section1__close img').click(function(){
        $('.section1__menuMob').css('right', '-250px');
    });

    $(".go1").click(function(event){
        event.preventDefault();
        $('.section1__menuMob').css('right', '-250px');
        let top = $('#sect2').offset().top;
         $("*").animate({scrollTop:top},1000);
    });

    $(".go2").click(function(event){
        event.preventDefault();
        $('.section1__menuMob').css('right', '-250px');
        let top = $('#sect3').offset().top;
         $("*").animate({scrollTop:top},1000);
    });

    $(".go3").click(function(event){
        event.preventDefault();
        $('.section1__menuMob').css('right', '-250px');
        let top = $('#sect4').offset().top;
         $("*").animate({scrollTop:top},1000);
    });

    $(".go4").click(function(event){
        event.preventDefault();
        $('.section1__menuMob').css('right', '-250px');
         let top = $('#sect5').offset().top;
         $("*").animate({scrollTop:top},1000);
    });
    
    $(window).scroll(function() {
        let top = ($('#sect4').offset().top) - 200;
        if ($(this).scrollTop() >= top) {
            $('.ball1').addClass('active');
            $('.ball3').addClass('active');
        }
        else {
            $('.ball1').removeClass('active');
            $('.ball3').removeClass('active');
        }
        if ($(this).scrollTop() >= (top + 200)) {
            $('.ball2').addClass('active');
            $('.ball4').addClass('active');
        }
        else {
            $('.ball2').removeClass('active');
            $('.ball4').removeClass('active');
        }
    });
    $('form').submit(function(e){
        e.preventDefault();
        let name = $('.name-inp').val();
        let email = $('.email-inp').val();
        let phone = $('.phone-inp').val();
        $.ajax({
            url: '/ajax/send/',
            method: 'post',
            data: {
                name: name,
                email: email,
                phone: phone,
            },
            statusCode: {
                200: function(xhr) {
                    $('.error .false').css('display', 'none');
                    $('.error .true').fadeIn();
                },
                422: function(xhr) {
                    let json = xhr.responseJSON;
                    $('.error .false').text(json.message);
                    $('.error .false').fadeIn();
                },
                500: function(xhr) {
                    let json = xhr.responseJSON;
                    $('.error .false').text(json.message);
                    $('.error .false').fadeIn();
                }
            }
        });
    });
});