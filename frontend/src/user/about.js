import "css/style.css";
import "css/bootstrap.min.css"
import "css/bootstrap.min.css.map"
import hero1 from "./images/hero_bg.jpg"
import img8 from "./images/person_1.jpg"
import img9 from "./images/person_2.jpg"
import img10 from "./images/person_3.jpg"
import img11 from "./images/person_4.jpg"
import img12 from "./images/person_5.jpg"

function About() {
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
                <li className="active"><a href="/about" className="nav-link">About</a></li>
                <li><a href="/contact" className="nav-link">Contact</a></li>
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
            <h1><strong>About The Company</strong></h1>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
            <img src={hero1} alt="Image" className="img-fluid rounded" />
          </div>
          <div className="col-lg-4 mr-auto">
            <div className="heading mb-4">
              <span className="caption">About us</span>
              <h2>Our Company</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, repudiandae similique accusantium eius nulla quam laudantium sequi.</p>
            <p>Debitis voluptates corporis saepe molestias tenetur ab quae, quo earum commodi, laborum dolore, fuga aliquid delectus cum ipsa?</p>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5 section-2-title">
          <div className="col-md-6">
            <div className="heading mb-4">
              <span className="caption">The team</span>
              <h2>Meet Our Team</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              <img src={img8}alt="Image" className="img-fluid" />
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              <img src={img9} alt="Image" className="img-fluid" />
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              <img src={img10} alt="Image" className="img-fluid" />
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              <img src={img11} alt="Image" className="img-fluid" />
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              <img src={img12} alt="Image" className="img-fluid" />
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              <img src={img8} alt="Image" className="img-fluid" />
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src={hero1}alt="Image" className="img-fluid rounded" />
          </div>
          <div className="col-lg-4 ml-auto">
            <div className="heading mb-4">
              <span className="caption">Why Founded</span>
              <h2>Mission and Vision</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, repudiandae similique accusantium eius nulla quam laudantium sequi.</p>
            <p>Debitis voluptates corporis saepe molestias tenetur ab quae, quo earum commodi, laborum dolore, fuga aliquid delectus cum ipsa?</p>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section bg-primary py-5 cta">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-md-0">
            <h2 className="mb-0 text-white">What are you waiting for?</h2>
            <p className="mb-0 opa-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
          </div>
          <div className="col-lg-5 text-md-right">
            <a href="#" className="btn btn-primary btn-white">Enroll Now</a>
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
                Copyright © All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a>Colorlib</a>
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
export default About;
