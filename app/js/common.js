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

    $('.slider-wrapper').owlCarousel({
        loop:true,
        //margin:10,
        nav:true,
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
    })
});
