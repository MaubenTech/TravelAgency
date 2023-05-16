const modal = document.getElementById('modal-slideshow');
const photoJson = '/js/photo-gallery.json';
// console.log(photoJson);

function displayPhotos(data){
    var photoList = document.getElementById('gallery-list');
    // console.log(photoList);
    console.log(data.length);
    for(var i = 0; i < data.length; i++){
        // console.log(data[i])
        var li = document.createElement('li');
        var figure = document.createElement('figure');
        li.appendChild(figure);
        // console.log(figure);
        var img = document.createElement('img');
        img.classList.add('photo');
        img.src = data[i].image;
        figure.appendChild(img)
        // console.log(img);
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
    addListeners(response);
}).catch(error => console.log(error));


function addListeners(data) {
    const images = Array.from(document.getElementsByClassName('photo'));
    console.log(images.length);
    console.log(document.getElementById('swiper-wrapper'));

    images.forEach((image)=> {
        image.addEventListener("click", function(event) {
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            if(modal.computedStyleMap().get('display') == "flex"){
                console.log("gotcha");
                var slideshowContainer = document.getElementById('swiper-wrapper');
                var swiperSlide = document.createElement('div');
                swiperSlide.classList.add('swiper-slide');
                var swiperImage = document.createElement('img');
                swiperImage.src = event.currentTarget.src;
                swiperSlide.appendChild(swiperImage);
                console.log("Added: " + swiperImage.src);
                slideshowContainer.appendChild(swiperSlide);
                
                for(var p = 0; p < data.length; p++){
                    console.log("Data p image: " + data[p].image);
                    console.log("CurrentImage src: " + event.currentTarget.src);
                    if(event.currentTarget.src.includes(data[p].image))
                    continue;
                    swiperSlide = document.createElement('div');
                    swiperSlide.classList.add('swiper-slide');
                    swiperImage = document.createElement('img');
                    swiperImage.src = data[p].image;
                    swiperSlide.appendChild(swiperImage);
                    console.log("Added: " + swiperImage.src);
                    slideshowContainer.appendChild(swiperSlide);
                    $(swiperImage).css({"object-fit" : "cover"})
                }
            }else{
                console.log('ah');
            }
        })
    })
}

var closeButton = document.getElementsByClassName('close-slideshow')[0];
closeButton.onclick = function(){
    modal.style.display = "none";
    
    var slideshowContainer = document.getElementById('swiper-wrapper');
    slideshowContainer.innerHTML = '';
    console.log(slideshowContainer);
}

    


