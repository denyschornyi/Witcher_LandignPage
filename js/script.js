$(document).ready(function(){
    $('.burger').click(function(){
        $('.header-wrap').css('display', 'block');
    });
    $('.close').click(function(){
        $('.header-wrap').css('display', 'none');
    });

    $('.owl-carousel').owlCarousel({
        navClass: ['slider-left', 'slider-right'],
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1200:{
                items:2
            }
        }
    })
});