function createModal(data) {

    let modal = document.getElementById('modal-slideshow');
    for (let i = 0; i < data.length; i++) {
        // let swiperSlide = document.createElement('div');
        // swiperSlide.classList.add('swiper-slide');
        // let swiperImage = document.createElement('img');
        // swiperImage.src = data[i].image;
        // $(swiperImage).css({ "object-fit": "cover" });
        // swiperSlide.appendChild(swiperImage);
        // slideshowContainer.appendChild(swiperSlide);
    }
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