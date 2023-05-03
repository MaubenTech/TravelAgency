$(document).ready(()=> {

    

    // $('.fa-bars').click(()=> {
    //     $('.explore-side-menu').toggleClass("burger-toggle");
    //     // $('.explore-side-menu').css("justify-content", "center");
    // })

    let clickActive = false;

    $('.top-half-content').click(()=> {
        if(!clickActive) {
            if(!$('.explore-side-menu').hasClass("burger-toggle"))
                $('.explore-side-menu').addClass("burger-toggle");
            clickActive = true;
        }
        else {
            $('.explore-side-menu').removeClass("burger-toggle");
            clickActive = false;
        }
    })

    $('.side-menu-items').mouseover(()=> {
        if(!clickActive)
            $('.explore-side-menu').toggleClass("burger-toggle");
    }).mouseout(()=> {
        if(!clickActive)
            $('.explore-side-menu').removeClass("burger-toggle");
    });
})

document.getElementsByTagName('img').alt = "";