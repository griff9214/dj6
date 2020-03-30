$(function() {

    $("header").before("<div id='my-menu'>");
    $(".header-nav__list").clone().appendTo("#my-menu");
    $("#my-menu").find("*").attr("style", "");
    $("#my-menu").find("ul").removeClass();

    const menu = new Mmenu( "#my-menu",{
        extensions : [ 'pagedim-black', 'border-none'],
        navbar: {
            title: 'Меню'
        },
    } );
    const api = menu.API;
    api.bind("close:start", function () {
        $(".hamburger").removeClass("is-active");
    });

    api.bind("open:start", function () {
        $(".hamburger").addClass("is-active");
    });


    $('.hamburger').click(function (event) {
        api.open( $("#my-menu") );
        event.preventDefault();
    });

    let owl = $('.slider__canvas').owlCarousel({
        loop:true,
        //margin:10,
        nav:false,
        dots:true,
        autoHeight:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.slider__arrow-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.slider__arrow-prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

    $(".owl-item.active").find(".slide").addClass("active");
    owl.on('translated.owl.carousel', function(event) {
        $(".owl-item").not(".active").find(".slide").removeClass("active");
        $(".owl-item.active").find(".slide").addClass("active");
        console.log("drag");
    });

});
