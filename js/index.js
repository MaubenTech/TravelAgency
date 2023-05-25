$(document).ready(function(){
    console.log('ready');
    $('.carousel-title').css("bottom", "220px")
    $('.carousel-title').css("transition","bottom 1.8s")
    $('.taking').css("bottom", "199px")
    $('.taking').css("transition", "bottom 2.4s")

    //calling the async function
    // getapi(api_url);

    $('.mainMenu ul').on('click', 'li', ()=> {
        $(this).addClass('active').siblings().removeClass('active');
    })
})



const mauritius = document.getElementsByClassName("mauritius");
const singapore = document.getElementsByClassName("singapore");
const egypt = document.getElementsByClassName("egypt");
const london = document.getElementsByClassName("london");
const southAfrica = document.getElementsByClassName("south-africa");

function destinationOverlay(element){
    console.log(element);
    $(element).css("height", "0%");
    $(element).css("transition", "height 0.5s ease-in-out");

}

function reverseDestinationOverlay(element){
    $(element).css("height", "100%");
    $(element).css("transition", "height 0.5s ease-in-out");
}
mauritius[0].addEventListener("mouseover", ()=> {
    destinationOverlay(".mauritius-overlay")
})
mauritius[0].addEventListener("mouseout", ()=> {
    reverseDestinationOverlay(".mauritius-overlay");
})
singapore[0].addEventListener("mouseover", ()=> {
    destinationOverlay(".singapore-overlay")
})
singapore[0].addEventListener("mouseout",()=> {
    reverseDestinationOverlay(".singapore-overlay")
})
egypt[0].addEventListener("mouseover", ()=> {
    destinationOverlay(".egypt-overlay")
})
egypt[0].addEventListener("mouseout", ()=> {
    reverseDestinationOverlay(".egypt-overlay")
})

london[0].addEventListener("mouseover", ()=> {
    destinationOverlay(".london-overlay")
})
london[0].addEventListener("mouseout", ()=> {
    reverseDestinationOverlay(".london-overlay");
})
southAfrica[0].addEventListener("mouseover", ()=> {
    destinationOverlay(".south-africa-overlay");
})
southAfrica[0].addEventListener("mouseout", ()=> {
    reverseDestinationOverlay(".south-africa-overlay")
})


$(windows).onload(function(){
    $('.service-content').css({"translateX" : "200px"})
})