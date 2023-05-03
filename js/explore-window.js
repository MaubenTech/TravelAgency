$(document).ready(()=> {

    

    // $('.fa-bars').click(()=> {
    //     $('.explore-side-menu').toggleClass("burger-toggle");
    //     // $('.explore-side-menu').css("justify-content", "center");
    // })
    $('.side-menu-items').mouseover(()=> {
        $('.explore-side-menu').toggleClass("burger-toggle");  
    }).mouseout(()=> {
        $('.explore-side-menu').removeClass("burger-toggle");
    })
})

document.getElementsByTagName('img').alt = "";