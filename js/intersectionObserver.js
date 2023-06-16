const extraElements = '/html/destinations.html';
document.addEventListener("DOMContentLoaded", () => {
    let options = {
        root: null,
        // rootMargin: "0px 0px -300px 0px",
        rootMargin: "-300px 0px",
        // rootMargin: "0px",
        threshold: 0.002
    };

    let observer = new IntersectionObserver(intersectionEntLeaves, options);
    document.querySelectorAll('.what-egg-brings, .our-services, .previous-destinations-container, .next-holiday').forEach(elements => {
        observer.observe(elements); //observe all elements in the querySelectorAll.
        // console.log("observing", element);
    });
})

function intersectionEntLeaves(elements, observer) {
    //all elements that is observed by the observer.
    elements.forEach(element => {
        if (element.isIntersecting) {
            console.log("intersecting");
            // console.log(element)
            console.log(element.target);
            // console.log(element.time, element.intersectionRatio);
            // console.log(element.target.classList);
            element.target.classList.add('active');
            observer.unobserve(element.target)
        }
    })
}

