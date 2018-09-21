$(document).ready(function(){
    $('.parallax').parallax();
    setTimeout(function(){
        $('.banner-text').removeClass('animate');
    }, 100);

    // setTimeout(function(){
    //     $('.banner-text').animate({
    //         transform: "translateY(-2em)"
    //     });
    // }, 1000);

    $(window).scroll(function(){
        $('#vision, #mission').fadeIn(2000);
    });

}); 


// document.addEventListener('load', function(){
//     var el = document.getElementsByClassName("banner-text");
//     for (i=0; i<el.length; i++)
//         el[i].style.height = 100 +'px';
//     }
// )

