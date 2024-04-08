$(document).ready(function() {
    $('.section1__burger img').click(function(){
        $('.section1__menuMob').css('right', '0px');
    });

    $('.section1__close img').click(function(){
        $('.section1__menuMob').css('right', '-250px');
    });
});