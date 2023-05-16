const modal = document.getElementById('modal-slideshow');
const photoJson = '/js/photo-gallery.json';
console.log(photoJson);

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
        img.src = data[i].image;
        figure.appendChild(img)
        console.log(img);
        // li.innerHTML = 
        // `
        //     <figure>
        //         <img src="${data[i].image}"/>
        //     </figure>
        // `;

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

window.onload = function(){
    const images = document.getElementsByClassName('photo');

    var slideshow = document.getElementById('slideshow');

    

    for(var i = 0; i < images.length; i++){
        console.log(images[i].src);
        if(images[i].addEventListener("click", function(){
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            console.log("modal");
            if(modal.computedStyleMap().get('display') == "flex"){
                console.log("gotcha");
                var slideshowContainer = document.getElementById('swiper-wrapper');
                var swiperSlide = document.createElement('div');
                swiperSlide.classList.add('swiper-slide');
                var swiperImage = document.createElement('img');
                swiperImage.src = this.src;
                console.log(swiperImage.src);
                console.log(swiperImage);
                swiperSlide.appendChild(swiperImage);
                slideshowContainer.appendChild(swiperSlide);
                $(swiperImage).css({"object-fit" : "contain"})
            }else{
                console.log('ah')
            }
        }))
        console.log(images.length)
    } 
   
}

var closeButton = document.getElementsByClassName('close-slideshow')[0];
closeButton.onclick = function(){
    modal.style.display = "none";
}

    


