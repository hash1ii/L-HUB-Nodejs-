import React from 'react'
import "css/style.css";
import "css/bootstrap.min.css"
import "css/bootstrap.min.css.map"


import hero1 from "./images/hero_bg.jpg"
import img1 from "./images/person_1.jpg"
import img2 from "./images/person_2.jpg" 
import img3 from "./images/person_3.jpg"  
import img4 from "./images/img_4.jpg"
import img5 from "./images/img_1_horizontal.jpg" 
import img6 from "./images/img_2_horizontal.jpg" 
import img7 from "./images/img_3_horizontal.jpg" 

function Testimonials(){
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
              <a href="index.html"><strong>Tutor</strong></a>
            </div>
          </div>
          <div className="col-9  text-right">
            <span className="d-inline-block d-lg-none"><a href="#" className=" site-menu-toggle js-menu-toggle py-5 "><span className="icon-menu h3 text-black" /></a></span>
            <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
              <ul className="site-menu main-menu js-clone-nav ml-auto ">
                <li><a href="/home" className="nav-link">Home</a></li>
                <li><a href="/tutorial" className="nav-link">Tutorials</a></li>
                <li className="active"><a href="/testimonials" className="nav-link">Testimonials</a></li>
                <li><a href="/blog" className="nav-link">Blog</a></li>
                <li><a href="/about" className="nav-link">About</a></li>
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
            <h1><strong>Testimonials</strong></h1>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="testimonial-2">
              <blockquote className="mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
              </blockquote>
              <div className="d-flex v-card align-items-center">
                <img src={img1} alt="Image" className="img-fluid mr-3" />
                <div className="author-name">
                  <span className="d-block">Mike Fisher</span>
                  <span>Owner, Ford</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="testimonial-2">
              <blockquote className="mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
              </blockquote>
              <div className="d-flex v-card align-items-center">
                <img src={img2} alt="Image" className="img-fluid mr-3" />
                <div className="author-name">
                  <span className="d-block">Jean Stanley</span>
                  <span>Traveler</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="testimonial-2">
              <blockquote className="mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
              </blockquote>
              <div className="d-flex v-card align-items-center">
                <img src={img3}alt="Image" className="img-fluid mr-3" />
                <div className="author-name">
                  <span className="d-block">Katie Rose</span>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="testimonial-2">
              <blockquote className="mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
              </blockquote>
              <div className="d-flex v-card align-items-center">
                <img src={img1} alt="Image" className="img-fluid mr-3" />
                <div className="author-name">
                  <span className="d-block">Mike Fisher</span>
                  <span>Owner, Ford</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="testimonial-2">
              <blockquote className="mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
              </blockquote>
              <div className="d-flex v-card align-items-center">
                <img src={img2} alt="Image" className="img-fluid mr-3" />
                <div className="author-name">
                  <span className="d-block">Jean Stanley</span>
                  <span>Traveler</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="testimonial-2">
              <blockquote className="mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
              </blockquote>
              <div className="d-flex v-card align-items-center">
                <img src={img3} alt="Image" className="img-fluid mr-3" />
                <div className="author-name">
                  <span className="d-block">Katie Rose</span>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="testimonial-2">
              <blockquote className="mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
              </blockquote>
              <div className="d-flex v-card align-items-center">
            <img src={img1} alt="Image" className="img-fluid mr-3" />
                <div className="author-name">
                  <span className="d-block">Mike Fisher</span>
                  <span>Owner, Ford</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="testimonial-2">
              <blockquote className="mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
              </blockquote>
              <div className="d-flex v-card align-items-center">
                <img src={img2} alt="Image" className="img-fluid mr-3" />
                <div className="author-name">
                  <span className="d-block">Jean Stanley</span>
                  <span>Traveler</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="testimonial-2">
              <blockquote className="mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
              </blockquote>
              <div className="d-flex v-card align-items-center">
                <img src={img3} alt="Image" className="img-fluid mr-3" />
                <div className="author-name">
                  <span className="d-block">Katie Rose</span>
                  <span>Customer</span>
                </div>
              </div>
            </div>
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
export default Testimonials;