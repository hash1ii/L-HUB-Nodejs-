
import "css/style.css";
import "css/bootstrap.min.css"
import "css/bootstrap.min.css.map"

import hero1 from "./images/hero_bg.jpg"


function Contact() {
    return(
<div>
  <div className="site-wrap" id="home-section">
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle" />
        </div>
      </div>
      <div className="site-mobile-menu-body" />
    </div>
    <header className="site-navbar light site-navbar-target" role="banner">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-3">
            <div className="site-logo">
              <a href="/home"><strong>Tutor</strong></a>
            </div>
          </div>
          <div className="col-9  text-right">
            <span className="d-inline-block d-lg-none"><a href="#" className=" site-menu-toggle js-menu-toggle py-5 "><span className="icon-menu h3 text-black" /></a></span>
            <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
              <ul className="site-menu main-menu js-clone-nav ml-auto ">
                <li><a href="/home" className="nav-link">Home</a></li>
                <li><a href="/tutorial" className="nav-link">Tutorials</a></li>
                <li><a href="/testimonials" className="nav-link">Testimonials</a></li>
                <li><a href="/blog" className="nav-link">Blog</a></li>
                <li><a href="/about" className="nav-link">About</a></li>
                <li className="active"><a href="/contact" className="nav-link">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div className="site-section-cover overlay" style={{ backgroundImage: `url(${hero1})` }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10 text-center">
            <h1><strong>Contact Us</strong></h1>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section bg-light" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5">
            <form action="#" method="post">
              <div className="form-group row">
                <div className="col-md-6 mb-4 mb-lg-0">
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="Email address" />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <textarea name id className="form-control" placeholder="Write your message." cols={30} rows={10} defaultValue={""} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 mr-auto">
                  <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" defaultValue="Send Message" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 ml-auto">
            <div className="bg-white p-3 p-md-5">
              <h3 className="text-black mb-4">Contact Info</h3>
              <ul className="list-unstyled footer-link">
                <li className="d-block mb-3">
                  <span className="d-block text-black">Address:</span>
                  <span>34 Street Name, City Name Here, United States</span></li>
                <li className="d-block mb-3"><span className="d-block text-black">Phone:</span><span>+1 242 4942 290</span></li>
                <li className="d-block mb-3"><span className="d-block text-black">Email:</span><span>info@yourdomain.com</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h2 className="footer-heading mb-4">About Us</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            <ul className="list-unstyled social">
              <li><a href="#"><span className="icon-facebook" /></a></li>
              <li><a href="#"><span className="icon-instagram" /></a></li>
              <li><a href="#"><span className="icon-twitter" /></a></li>
              <li><a href="#"><span className="icon-linkedin" /></a></li>
            </ul>
          </div>
          <div className="col-lg-8 ml-auto">
            <div className="row">
              <div className="col-lg-3">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h2 className="footer-heading mb-4">Resources</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h2 className="footer-heading mb-4">Support</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h2 className="footer-heading mb-4">Company</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a >Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
    )
}
export default Contact;