class Form extends HTMLElement{
    constructor(){
        super();
    }


    connectedCallback(){
        this.innerHTML =
        `
            <section class="form-section">
                <!-- <div class="blur"></div> -->
                <form class="booking-form" id="booking-form" method="post">
                    <div class="left-pane">
                        <img src="/images/Eg global.jpg" alt="">
                    </div>
                    <div class="right-pane">
                        <div class="exit-form-container">
                            <div class="exit-button-container">
                                <button class="exit-button">
                                    <i class="mark x"></i>
                                    <i class="mark xx"></i>
                                </button>
                            </div>
                        </div>
                        <div class="details-container">
                            <div class="detail-identifier">
                                <label for="fname">Full Name:</label>
                            </div>
                            <div class="detail">
                                <div class="detail-icon-container">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <input type="text" name="fname" id="fname" placeholder="Full Name">
                            </div>
                        </div>
                        <div class="details-container">
                            <div class="detail-identifier">
                                <label for="email">E-mail:</label>
                            </div>
                            <div class="detail">
                                <div class="detail-icon-container">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <input type="email" name="email" id="email" placeholder="E-mail">
                            </div>
                        </div>
                        <div class="details-container">
                            <div class="detail-identifier">
                                <label for="phone-number">Phone:</label>
                            </div>
                            <div class="detail">
                                <div class="detail-icon-container">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <input type="tel" name="phone-number" id="phone-number" placeholder="Phone Number">
                            </div>
                        </div>
                        <div class="details-container">
                            <div class="detail-identifier">
                                <label for="">Gender: </label>
                            </div>
                            <div class="detail" id="gender-detail">
                                <div class="male-detail">
                                    <label for="male-radio">Male</label>
                                    <input type="radio" name="gender" id="male-radio">
                                </div>
                                <div class="female-detail">
                                    <label for="female-radio">Female</label>
                                <input type="radio" name="gender" id="female-radio">    
                                </div>
                            </div>
                        </div>
                        <div class="details-container">
                            <div class="detail-identifier">
                                <label for="enquiries">Enquiries: </label>
                            </div>
                            <div class="detail" id="custom-select-detail">
                                <div class="custom-select" style="width: 250px;">
                                    <select name="form-options" id="form-options">
                                        <option value="What are you enquiring about? ">What are you enquiring about?</option>
                                        <option value="Moving To A Whole New Country">Moving To A Whole New Country</option>
                                        <option value="Travel Enquiries">Travel Enquiries</option>
                                        <option value="Visa Enquiries">Visa Enquiries</option>
                                        <option value="Price Enquiries">Price Enquiries</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="submit">
                            <form action="" method="post">
                                <input type="submit" value="Submit" class="form-submit-btn">
                            </form>
                        </div>
                    </div>
                </form>
            </section>
        `
    }
}

customElements.define("my-form", Form)

var customSelect = document.getElementsByClassName('custom-select');
// console.log(customSelect);
// console.log(customSelect.length);

for(i = 0; i < customSelect.length; i++){
    selectMenu = customSelect[i].getElementsByTagName('select')[0];
    // console.log(selectMenu);

    selectM = selectMenu.length
    // console.log(selectM);

    selectedOption = document.createElement('div');
    selectedOption.setAttribute("class", "select-selected");
    // console.log(selectedOption);

    selectedOption.innerHTML = selectMenu.options[selectMenu.selectedIndex].innerHTML;
    // console.log(selectedOption);

    customSelect[i].appendChild(selectedOption);
    // console.log(customSelect[i].appendChild(selectedOption));

    optionList = document.createElement("div");
    optionList.setAttribute("class", "select-items select-hide");
    // console.log(optionList);

    for(j = 1; j < selectMenu.length; j++){
        eachOption = document.createElement("div");
        eachOption.innerHTML = selectMenu.options[j].innerHTML;
        // console.log(eachOption);

        eachOption.addEventListener("click", function(event){
            //when an option is clicked, update the original selected box and the
            //selected item
            clickedItem = this.parentNode.parentNode.getElementsByTagName('select')[0];
            eachOptionPreviousSibling = this.parentNode.previousSibling
            for(i = 0; i < clickedItem.length; i++){
                if(clickedItem.options[i].innerHTML == this.innerHTML){
                    clickedItem.selectedIndex = i;
                    eachOptionPreviousSibling.innerHTML = this.innerHTML;
                    sameAsSelected = this.parentNode.getElementsByClassName("same-as-seleted");
                    for(k = 0; k < sameAsSelected.length; k++){
                        sameAsSelected[k].removeAttribute('class');
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            eachOptionPreviousSibling.click();
        });
        optionList.appendChild(eachOption);
    }
    customSelect[i].appendChild(optionList);
    selectedOption.addEventListener("click", function(event) {
        //when the select option is clicked, close others and open/close the
        //current selected option
        event.stopPropagation();
        closeAllSelect(this);

        // console.log(selectedOption)
        // console.log(this.nextSibling)

        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(element){
    var numberOfItems = []
    itemsToSelect = document.getElementsByClassName("select-items");
    selectedItem = document.getElementsByClassName("select-selected");

    for(i = 0; i < selectedItem.length; i++){
        if(element == selectedItem[i]){
            numberOfItems.push(i);
        }
        else{
            selectedItem[i].classList.remove("select-arrow-active");
        }
    }

    for(i = 0; i < itemsToSelect.length; i++){
        if(numberOfItems.indexOf(i)){
            itemsToSelect[i].classList.add("select-hide");
        }
    }
    // console.log(element)
}

//click outside the box, the following should happen

var bookingForm = document.getElementById("booking-form")
// console.log(bookingForm);
bookingForm.addEventListener("click", closeAllSelect);






function sendEmail(){

    var fullNameField = document.getElementById('fname').value;
    var emailField = document.getElementById('email').value;
    var phoneField = document.getElementById('phone-number').value;
    var enquiryField = document.getElementById('form-options').value;




    const emailBody = 
        `
            Hi, <b>${fullNameField}</b>,
            Your enquiries have been submitted successfully, we would 
            contact you shortly regarding how to go about your process.
            <br/>
            <br/>
            Here are your details, please reply to this email if there is
            anything you would like to contact us about.

            <br/>
            <br/>

            Name: ${fullNameField},<br/>
            Email: ${emailField},<br/>
            Phone Number: ${phoneField},<br/>
            Enquiry: ${enquiryField}
            <br/>
            <br/>
            Thank you for Travelling with us! <br/>
            <span>&copy;</span> <b>EgGlobal</b>
        `
            ;

    recipientEmail = document.getElementById("email").value;
    Email.send({
        SecureToken: "9bf98f2b-894d-48d5-87e7-03e2182c7310",
        To: recipientEmail,
        From: "maubentech@gmail.com",
        Subject: "Your Enquiries For Traveling With us at Eg Global Services",
        Body: emailBody,
    })
    .then((message)=> {
        var customM = "We Will contact you shortly"
        confirmationPopup(message, customM);
        var formSection = document.getElementsByClassName('booking-form')[0];
        formSection.style.filter = "blur(20px)"
    })
}

function confirmationPopup(message, customMessage){
    var popupContainer = document.getElementsByClassName('form-section')[0];
    var popUp = document.createElement("div");
    popUp.classList.add("form-popup-body")
    popUp.innerHTML = 
    `   
        <div class="form-popup">
            <div class="message-area">${message}</div>
            <button class="exit-form-area-button">OK</button>
        </div>
    `
    popupContainer.appendChild(popUp);

    var closePopup = document.getElementsByClassName('exit-form-area-button')[0];
    
    closePopup.addEventListener('click', ()=> {
        location.reload();
    })
}

submitForm = document.getElementsByClassName('form-submit-btn')[0];
submitForm.addEventListener("click", (event)=> {
    event.preventDefault();
    sendEmail();
})

function newsletter(){

    var recipientEmail = document.getElementById('newsletter-field');

    Email.send({
        SecureToken: "9bf98f2b-894d-48d5-87e7-03e2182c7310",
        To: recipientEmail,
        From: "maubentech@gmail.com",
        Subject: "Welcome to our newsletter",
        Body: emailBody,
    })
    .then((message)=> {
        var newsletterStatus = "We Will contact you shortly";
        newsletterPopup();
    })

    function newsletterPopup(message, newsletterStatus){
        var popupContainer = document.getElementsByClassName('form-section')[0];
        var popUp = document.createElement("div");
        popUp.classList.add("form-popup-body")
        popUp.innerHTML = 
        `   
            <div class="form-popup">
                <div class="message-area">${message}</div>
                <button class="exit-form-area-button">OK</button>
            </div>
        `
        popupContainer.appendChild(popUp);
    }
}

var submitNewsletterButton = document.getElementById('submit-newsletter-application');
submitNewsletterButton.addEventListener('click', function(event){
    event.preventDefault();
    newsletter();
})

