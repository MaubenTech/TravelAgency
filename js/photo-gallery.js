const modal = document.getElementById('modal-slideshow');
const photoJson = '/js/photo-gallery.json';
// console.log(photoJson);

function displayPhotos(data) {
    var photoList = document.getElementById('gallery-list');
    // console.log(photoList);
    console.log(data.length);
    for (var i = 0; i < data.length; i++) {
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

let slideshowContainer = document.getElementById('swiper-wrapper');

fetch(photoJson, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
}).then((response) => {
    return response.json();
}).then((response) => {
    console.log(response);
    displayPhotos(response);
    createModal(response);
    addListeners(response);
}).catch(error => console.log(error));

function createModal(data) {
    for (let i = 0; i < data.length; i++) {
        let swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        let swiperImage = document.createElement('img');
        swiperImage.src = data[i].image;
        $(swiperImage).css({ "object-fit": "cover" });
        swiperSlide.appendChild(swiperImage);
        slideshowContainer.appendChild(swiperSlide);
    }
    console.log("Slide show container:.... ");
    console.log(slideshowContainer);
}

const clickHandler = (event, data) => {

    swiper.initialSlide = 0;
    swiper.activeIndex = 0;
    swiper.realIndex = 0;
    swiper.slideTo(0, 0, false);
    swiper.update();
    modal.style.display = "flex";
    // swiper.initialSlide = slideIndex;
    // swiper.activeIndex = swiper.initialSlide;
    // swiper.updateActiveIndex(swiper.initialSlide);

}

function addListeners(data) {
    const images = Array.from(document.getElementsByClassName('photo'));
    // console.log(images.length);
    // console.log(document.getElementById('swiper-wrapper'));

    images.forEach((image) => {
        image.addEventListener("click", (ev) => clickHandler(ev, data));
    })
}

var closeButton = document.getElementsByClassName('close-slideshow')[0];
closeButton.onclick = function () {
    modal.style.display = "none";

    // swiper.initialSlide = 0;
    // swiper.activeIndex = 0;
    // swiper.realIndex = 0;
    // swiper.slideTo(0, 0, false);
    // swiper.update();
}