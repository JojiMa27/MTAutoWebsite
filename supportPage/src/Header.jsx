
function Header(){
    return(
        <header class="hero">
            

            <nav class="navbar">
                <div class="nav-container">

                    <a href="index.html" class="navbar-logo">MT Auto</a>
                    <button class="nav-toggle">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                        
                    <ul class="nav-items">
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/services.html">Services</a></li>
                        <li><a href="/support.html">Support</a></li>
                        <li><a href="/about.html" class="active">About</a></li>
                        <li><a href="/contact.html">Contact Us</a></li>
                    </ul>
                    
                </div>
            </nav>
            <img src="/images/shop.jpg" alt="auto shop picture" class="hero-img"/>
        </header>
    );
}

export default Header;