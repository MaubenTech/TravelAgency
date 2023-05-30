const modal = document.getElementById('modal-slideshow');
const photoJson = '/js/photo-gallery.json';



function displayPhotos(data) {
    var photoList = document.getElementById('gallery-list');
    for (var i = 0; i < data.length; i++) {

        var li = document.createElement('li');
        var figure = document.createElement('figure');
        li.appendChild(figure);
        var img = document.createElement('img');
        img.classList.add('photo');
        img.src = data[i].image;
        figure.appendChild(img)
        photoList.appendChild(li);
    }
};


fetch(photoJson, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
}).then((response) => {
    return response.json();
}).then((response) => {
    // console.log(response);
    displayPhotos(response);
    displayBigPhoto(response);
}).catch(error => console.log(error));

function displayBigPhoto(data){
    var photoWeb = document.getElementsByClassName('photo');
    console.log(photoWeb)

    var photos = Array.from(photoWeb);
    console.log(photos.length)
    var imageContainer = document.getElementsByClassName('image-container')[0];
    photos.forEach(photo => {
        photo.addEventListener('click', (event)=> {
            modal.style.display = "flex";
            var image = document.createElement('img');
            image.classList.add('big-photo');
            image.src = event.currentTarget.src;
            imageContainer.appendChild(image);
            modal.appendChild(imageContainer);
        })
    })

    window.addEventListener('click', (event)=> {
        if(event.target == modal){
            imageContainer.innerHTML = '';
            modal.style.display = "none";
        }
    })

    var closeButton = document.getElementsByClassName('close-slideshow')[0];
    closeButton.onclick = function () {
        imageContainer.innerHTML = '';
        modal.style.display = "none";
    }
}


