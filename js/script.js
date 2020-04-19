$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        navClass: ['slider-left', 'slider-right'],
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:2
            }
        }
    })
});