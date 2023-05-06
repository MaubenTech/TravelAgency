//getting destinations data from database
//api url
// const api_url = "http://localhost:3000/api/destinations";


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


const destinationUrl = '../js/destinations.json'

fetch(destinationUrl).then((response)=> {
    return response.json();
}).then((response)=> {
    console.log(response)
    displayJsonData(response)
}).catch((error)=> {
    console.log(error);
})

function displayJsonData(data){
    var places = document.getElementById('places-container');
    for(var i = 0; i < data.length; i++){
        var place = document.createElement('div');
        place.classList.add('places');
        place.innerHTML = 
            // '<img class="destination-image" src="' + data[i].image + '" alt="">' +
            // '<h4 class="destination">' + data[i].country + '</h4>'
            '<div class="places"> ' + 
                '<div class="place-image sweden"> ' + 
                    '<img class="explore-place-image" src="' + data[i].image + '"alt="">' + 
                '</div>' + 
                '<div class="country">' + 
                    '<h3>' + data[i].country + '</h3>'
                    '<span>' + data[i].countryDetails + '</span>'
                '</div>'
            '</div>'
    
        places.appendChild(place)
    }
}