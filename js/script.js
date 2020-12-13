//$(document).ready(function(){
//    $(".owl-carousel").owlCarousel({
//        autoplay:true,
//        autoplaytimeout:2000, 
//        margin:10,
//        loop:true,
//        autoplayHoverPause:true,
//        responsive:{
//            0:{
//                items:3,
//                nav:true
//            },
//            600:{
//                items:4,
//                nav:true
//            },
//            1000:{
//                items:5,
//                nav:true
//            }
//        }
//    });
//  });
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})