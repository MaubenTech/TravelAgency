requestBooking = $('#requestBooking');
requestBooking.click(()=> {
    $('body').css({"height":"100vh", "overflow": "hidden"});
    $('section:not(.form-section), .header').css({"filter": "blur(5px)", "pointer-events": "none"});
    $('.form-section').css({"display": "flex"});
})

function turnCancelButtontoGood(element){
    console.log(element);
    var $this = $(element).parent();
    $this.toggleClass('canceled');
    return false;
}


$('.exit-button-container').on('click', function(event) {
    event.preventDefault();
    turnCancelButtontoGood(".exit-button");
    $('section:not(.form-section), .header').css({"pointer-events": "initial"});
    if($(this).hasClass('canceled')){
        setTimeout(()=> {
            $('body').css({"overflow" : "visible"})
            $('.form-section').css({"display": "none", "transition" : "all 1s ease-in-out"})
            $('section:not(.form-section), .header').css({"filter" : "none"});
            event.currentTarget.classList.remove('canceled');
        }, 500)
        console.log(event.currentTarget.parentElement);
    }
})