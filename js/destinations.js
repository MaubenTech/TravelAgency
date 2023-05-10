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

console.log(destinationUrl)

fetch(destinationUrl, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
}).then((response)=> {
    return response.json();
}).then((response)=> {
    console.log(response);
    //getting the first three objects in the array;
    let slicedResponse = response.slice(0, 3);
    console.log(slicedResponse.length);
    displayJsonData(response)
}).catch((error)=> {
    console.log(error);
})



function displayJsonData(data){
    var places = document.getElementById('places-container');
    let slicedData = data.slice(0, 6);
    for(var i = 0; i < slicedData.length; i++){
        console.log(slicedData[i].countryDetails);
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
                    '<h3>' + slicedData[i].country + '</h3>'
                    '<span>' + slicedData[i].countryDetails + '</span>'
                '</div>'
            '</div>'
    
        places.appendChild(place)
    }
}

requestBooking = document.getElementById('requestBooking');
requestBooking.click(()=> {
    
})

origin = document.getElementById('origin');
$(origin).click(()=> {

})