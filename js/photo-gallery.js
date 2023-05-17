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

let jsonResponse;

fetch(photoJson, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
}).then((response) => {
    return response.json()
}).then((response) => {
    console.log(response);
    jsonResponse = response;
    displayPhotos(response);
    addListeners(response);
}).catch(error => console.log(error));

const func = (event, data) => {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    if (modal.computedStyleMap().get('display') == "flex") {
        console.log("gotcha");
        var slideshowContainer = document.getElementById('swiper-wrapper');

        // var swiperSlide = document.createElement('div');
        // swiperSlide.classList.add('swiper-slide');
        // var swiperImage = document.createElement('img');
        // swiperImage.src = event.currentTarget.src;
        // swiperSlide.appendChild(swiperImage);
        // swiperSlide.setAttribute("data-swiper-slide-index", 2);
        // slideshowContainer.appendChild(swiperSlide);
        // console.log(swiperImage);
        let counter = 0;
        for (var p = 0; p < data.length; p++) {
            counter++;
            console.log("Data p image: " + data[p].image);
            console.log("CurrentImage src: " + event.currentTarget.src);
            let swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide');
            let swiperImage = document.createElement('img');
            swiperImage.src = data[p].image;
            swiperSlide.appendChild(swiperImage);
            console.log(swiperImage);
            $(swiperImage).css({ "object-fit": "cover" });
            if (event.currentTarget.src.includes(data[p].image)) {
                swiperSlide.setAttribute("data-swiper-slide-index", 0);
                addAttr(0, data.length, swiperSlide);
                slideshowContainer.appendChild(swiperSlide);
                counter--;
                continue;
            }
            swiperSlide.setAttribute("data-swiper-slide-index", counter);
            addAttr(counter, data.length, swiperSlide);
            slideshowContainer.appendChild(swiperSlide);
        }
    } else {
        console.log('ah');
    }
}

function addListeners(data) {
    const images = Array.from(document.getElementsByClassName('photo'));
    console.log(images.length);
    console.log(document.getElementById('swiper-wrapper'));

    images.forEach((image) => {
        image.addEventListener("click", (ev) => func(ev, data));
    })
}

var closeButton = document.getElementsByClassName('close-slideshow')[0];
closeButton.onclick = function () {
    modal.style.display = "none";
    
    modal.removeChild(document.getElementById("slideshow"));

    let slideshow = document.createElement("div");
    slideshow.id = "slideshow";
    slideshow.classList.add("slideshow", "swiper");



    let slideshowContainer = document.createElement('div');
    slideshowContainer.id = "swiper-wrapper";
    slideshowContainer.classList.add("swiper-wrapper");

    slideshow.appendChild(slideshowContainer);

    modal.appendChild(slideshow);


    console.log(slideshowContainer);
    // addListeners(jsonResponse);
}


function addAttr(sliderIndex, sliderLength, element) {
    element.setAttribute("role", "group");
    element.setAttribute("aria-label", `${sliderIndex+1} / ${sliderLength}`);
}