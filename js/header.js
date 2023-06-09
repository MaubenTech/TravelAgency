class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
        `
            <div class="header">
                <nav>
                    <div class="nav">
                        <div class="logo">
                            <img src="/images/Eg global.jpg" alt="">
                        </div>
                        <div class="mainMenu">
                            <ul>
                                <li><a href="/index.html">Home</a></li>
                                <li><a href="/html/about-us.html">About Us</a></li>
                                <li><a href="/html/photo-gallery.html">Photo Gallery</a></li>
                                <li><a href="/html/destinations.html">Destinations</a></li>
                            </ul>
                        </div>
                        <div class="account">
                            <!-- <div class="signIn">
                                <a href="" class="signInBtn">Sign In</a>
                            </div> -->
                            <div class="signUp">
                                <button id="requestBooking" class="signUpBtn">
                                    REQUEST A BOOKING
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="mobile-menu-hamburger" >

                    <input type="checkbox" hidden class="toggle-mMenu"/>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="mobile-menu">
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/html/about-us.html">About Us</a></li>
                    <li><a href="/html/photo-gallery.html">Photo Gallery</a></li>
                    <li><a href="/html/destinations.html">Destinations</a></li>
                </ul>
            </div>
            <div class="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1070 65" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        `;
    }
}

customElements.define('my-header', Header)