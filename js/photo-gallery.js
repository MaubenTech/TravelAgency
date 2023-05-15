const photoJson = '/js/photo-gallery.json';
console.log(photoJson);

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
        img.classList.add('photo');
        figure.appendChild(img)
        console.log(img);
        li.innerHTML = 
        `
            <figure>
                <img src="${data[i].image}"/>
            </figure>
        `;

        photoList.appendChild(li);
    }
};

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



