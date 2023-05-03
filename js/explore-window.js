$(document).ready(()=> {

    

    $('.fa-bars').click(()=> {
        $('.explore-side-menu').toggleClass("burger-toggle");
        // $('.explore-side-menu').css("justify-content", "center");
    })
    $('.item').mouseover(()=> {
        $('.explore-side-menu').toggleClass("burger-toggle");  
    })
})

document.getElementsByTagName('img').alt = "";