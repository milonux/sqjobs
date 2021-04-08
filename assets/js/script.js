jQuery(document).ready(function() {
    "use strict";

    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > 160) {
    //         $('.site-header').addClass('header-bg');
    //     } else {
    //         $('.site-header').removeClass('header-bg');
    //     }
    // });
    // $('.site-header').on('click', '.menu-button', function() {
    //     $(this).closest('body').toggleClass('menu-is-close').toggleClass('menu-is-open');
    // });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 160) {
            $('.site-navbar').addClass('s-navbar-bg');
        } else {
            $('.site-navbar').removeClass('s-navbar-bg');
        }
    });
    $('.site-navbar').on('click', '.menu-button', function() {
        $(this).closest('body').toggleClass('menu-is-close').toggleClass('menu-is-open');
    });
});
