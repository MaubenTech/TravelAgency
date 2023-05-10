class Footer extends  HTMLElement{
    constructor(){
        super();
    }

    // connectedCallback(){
    //     const shadowRoot = this.attachShadow({mode: 'open'});
    //     shadowRoot.appendChild(footerTemplate.content)
    // }

    connectedCallback(){
        this.innerHTML = 
            `
                <footer id="footer" class="footer">
                    <div class="footer-container">
                        <div class="footer-menu-item">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Countries</a></li>
                                <li><a href="#">Regions</a></li>
                                <li><a href="#">Cities</a></li>
                            </ul>
                        </div>
                        <div class="footer-menu-item">
                            <h3>Contact</h3>
                            <ul>
                                <li><a href="#">Help/FAQ</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Advertise with us</a></li>
                                <li><a href="#">Customer Care</a></li>
                            </ul>
                        </div>
                        <div class="footer-menu-item">
                            <h3>Policies</h3>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">General Conditions</a></li>
                                <li><a href="#">Who we are</a></li>
                            </ul>
                        </div>
                    
                    </div>
                </footer>
            `
        ;
    }
}


customElements.define('my-footer', Footer);