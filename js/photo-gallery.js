const photoJson = '/js/photo-gallery.json';
console.log(photoJson);

fetch(photoJson, {
    method: 'GET',
    headers: {
        'Accept' : 'application/json',
    },
}).then((response) => {
    return response.json()
}).then((response) => {
    console.log(response);
    displayPhotos(response);
}).catch(error => console.log(error));


console.log(document.getElementById('gallery-list'))

function displayPhotos(data){
    var photoList = document.getElementById('gallery-list');
    console.log(photoList);
    for(var i = 0; i < data.length; i++){
        console.log(data[i])
        var li = document.createElement('li');
        var figure = document.createElement('figure');
        li.appendChild(figure);
        console.log(figure);
        var img = document.createElement('img');
        figure.appendChild(img)
        img.classList.add('photo');
        li.innerHTML = 
        `
            <figure>
                <img src="${data[i].image}" alt="" class="photo"/>
            </figure>
        `;

        photoList.appendChild(li);
    }
}