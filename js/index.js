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

//getting destinations data from database
//api url
// const api_url = "http://localhost:3000/api/destinations";
const destinationUrl = '../js/destinations.json'

fetch(destinationUrl).then((response)=> {
    return response.json();
}).then((response)=> {
    console.log(response)
    displayJsonData(response)
}).catch((error)=> {
    console.log(error);
})

//defining async function
// async function getapi(url){
//     //storing response 
//     const response = await fetch(url);

//     //storing data from response in json
//     var data = await response.json();
//     console.log(data);
//     data.forEach(object => show(object))
// }


//function to define the innerHTML for Destinations section
// function show(data){
//     let destination = 
//     '  <div class="destination-card">' +
//             '<img class="destination-image" src="' + data.Image + 'alt="">'+
//             '<h4 class="destination">' + data.Country + '</h4>'+
//         '</div>'
//     $('.destinations').html(destination);
// }

// function displayJsonData(data){
//     var destinations = document.getElementById('travel-destinations');
//     for(var i = 0; i < data.length; i++){
//         var destination = document.createElement('div');
//         destination.classList.add('destination-card');
//         destination.innerHTML = 
//             '<img class="destination-image" src="' + data[i].image + '" alt="">' +
//             '<h4 class="destination">' + data[i].country + '</h4>'
    
//         destinations.appendChild(destination)
//     }
// }

const mauritius = document.getElementsByClassName("mauritius");
const singapore = document.getElementsByClassName("singapore");
const egypt = document.getElementsByClassName("egypt");
const london = document.getElementsByClassName("london");
const southAfrica = document.getElementsByClassName("south-africa");

function destinationOverlay(element){
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


