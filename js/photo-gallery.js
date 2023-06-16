const modal = document.getElementById('modal-slideshow');
const photoJson = '/js/photo-gallery.json';



const displayPhotos = (data) => {
    var photoList = document.getElementById('gallery-list');
    for (var i = 0; i < data.length; i++) {

        var li = document.createElement('li');
        var figure = document.createElement('figure');
        li.appendChild(figure);
        var img = document.createElement('img');
        img.classList.add('photo');
        img.setAttribute("loading", "lazy")
        img.src = data[i].image;
        figure.appendChild(img)
        photoList.appendChild(li);
    }
    almightyFunction();
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

function displayBigPhoto (){
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
    closeButton.addEventListener("click", () => {
        imageContainer.innerHTML = '';
        modal.style.display = "none";
    })
}

const paginationNumbers = document.getElementById("pagination-numbers");
const galleryList = document.getElementById("gallery-list");
const listItems = galleryList.querySelectorAll("li");
console.log(listItems);
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("prev-button");

const paginationLimit = 4;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;


const almightyFunction = () => {
    secondAlmightyFunction();
}

 const getPaginationNumbers = () => {
    for (let i = 1; i < pageCount; i++) {
        appendPageNumber(i);
    }
};



const setCurrentPage = (pageNumber) => {
    currentPage = pageNumber;

    handleActivePageNumber();
    handlePageButtonStatus();

    const previousRange = (pageNumber - 1) * paginationLimit;
    const currentRange = pageNumber * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= previousRange && index < currentRange) {
            item.classList.remove("hidden");
        }
    })
    console.log(listItems);
};

 const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach(button => {
        button.classList.remove("active");
        
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    })
}

 const handlePageButtonStatus = () => {
    if (currentPage === 1) {
        disableButton(previousButton);
    }
    else {
        enableButton(previousButton)
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    }
    else {
        enableButton(nextButton)
    }
}

const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
}

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
}

 const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page" + index);

    paginationNumbers.appendChild(pageNumber);
};

const secondAlmightyFunction = () => {
    getPaginationNumbers();
    setCurrentPage(1);

    previousButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    })

    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    })
    
    document.querySelectorAll(".pagination-number").forEach(button => {
        const pageIndex = Number(button.getAttribute("page-index"));
        
        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            })
        }
    })
}

