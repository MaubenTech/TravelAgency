var preloader = document.getElementById('preloader');
var other = document.getElementsByClassName('other')[0];
console.log(other);
// other.style.display = 'none';
var body = document.getElementsByTagName("body")[0];

window.addEventListener("load", () => {

    setTimeout(setPreloaderInactive, 0);

    function setPreloaderInactive() {
        preloader.classList.add("inactive");
        body.style.overflow = 'visible'
    }

    
    
    // preloader.addEventListener("transitionend", () => {
    //     document.body.removeChild("preloader")
    // })

    $.getScript('/js/footer.js');

    // var heroSection = document.getElementsByClassName('hero')[0];
    // heroSection.classList.add('active');


    const mauritius = document.getElementsByClassName("mauritius");
    const singapore = document.getElementsByClassName("singapore");
    const egypt = document.getElementsByClassName("egypt");
    const london = document.getElementsByClassName("london");
    const southAfrica = document.getElementsByClassName("south-africa");

    function destinationOverlay(element) {
        // console.log(element);
        $(element).css("height", "0%");
        $(element).css("transition", "height 0.5s ease-in-out");

    }

    function reverseDestinationOverlay(element) {
        $(element).css("height", "100%");
        $(element).css("transition", "height 0.5s ease-in-out");
    }
    mauritius[0].addEventListener("mouseover", () => {
        destinationOverlay(".mauritius-overlay")
    })
    mauritius[0].addEventListener("mouseout", () => {
        reverseDestinationOverlay(".mauritius-overlay");
    })
    singapore[0].addEventListener("mouseover", () => {
        destinationOverlay(".singapore-overlay")
    })
    singapore[0].addEventListener("mouseout", () => {
        reverseDestinationOverlay(".singapore-overlay")
    })
    egypt[0].addEventListener("mouseover", () => {
        destinationOverlay(".egypt-overlay")
    })
    egypt[0].addEventListener("mouseout", () => {
        reverseDestinationOverlay(".egypt-overlay")
    })

    london[0].addEventListener("mouseover", () => {
        destinationOverlay(".london-overlay")
    })
    london[0].addEventListener("mouseout", () => {
        reverseDestinationOverlay(".london-overlay");
    })
    southAfrica[0].addEventListener("mouseover", () => {
        destinationOverlay(".south-africa-overlay");
    })
    southAfrica[0].addEventListener("mouseout", () => {
        reverseDestinationOverlay(".south-africa-overlay")
    })
});

    $(document).ready(function () {


    })


    $('.carousel-title').css("bottom", "50%");
    $('.carousel-title').css("transition", "bottom 1.8s");
    $('.taking').css("bottom", "40%");
    $('.taking').css("transition", "bottom 2.4s");

    if ($(window).width() <= 768) {
        console.log("reduce");
        $('.carousel-title').css("bottom", "40%");
        $('.taking').css("bottom", "20%");
    };

    //calling the async function
    // getapi(api_url);

    $('.mainMenu ul').on('click', 'li', () => {
        $(this).addClass('active').siblings().removeClass('active');
    })


    var serviceCards = document.getElementsByClassName('service-card');
    var serviceCardsOverlays = document.getElementsByClassName('service-card-overlay');
    console.log(serviceCardsOverlays);
    var serviceCardArray = Array.from(serviceCards);
    var serviceCardsOverlaysArray = Array.from(serviceCardsOverlays);



    serviceCardArray.forEach((serviceCard) => {
        serviceCard.addEventListener("mouseenter", (event) => {
            event.target.lastElementChild.style.height = "0";
            event.target.lastElementChild.style.transition = "height 0.5s ease-in-out"
        })

        serviceCard.addEventListener("mouseleave", (event) => {
            event.target.lastElementChild.style.height = "90%";
            event.target.lastElementChild.style.transition = "height 0.5s ease-in-out";
        })
    })

    // var servicesContent = document.getElementsByClassName('services-content')[0];
    // var serviceContentCloned = servicesContent.cloneNode(true);
    // // servicesContent.appendChild(serviceContentCloned.childNodes);
    // console.log(serviceContentCloned.childNodes)
    // // $(windows).onload(function(){
    // //     $('.service-content').css({"translateX" : "200px"})
    // // })

    var checkedInput = document.getElementsByClassName('toggle-mMenu')[0];
    // console.log(checkedInput);
    checkedInput.addEventListener('change', function () {
        if (!this.checked) {
            // console.log("notchecked");
            $('.mobile-menu').css({
                // "display" : "none",
                "opacity": "0",
                "top": "0",
                "left": "0",
                "transition": "all 300ms ease",
                "z-index": "-2"
            })
        }
        else {
            $('.mobile-menu').css({
                "display": "flex",
                "width": "100%",
                "height": "50% !important",
                "top": "0",
                "left": "0",
                "padding-top": "10px",
                "padding-bottom": "20px",
                "transition": "all 300ms ease",
                "transform": "translateX(0)",
                "opacity": "1",
                "z-index": "1000"
            })
            // console.log("checked")
        }
    })





