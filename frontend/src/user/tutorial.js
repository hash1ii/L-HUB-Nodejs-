import React from 'react'
import "css/style.css";
import "css/bootstrap.min.css"
import "css/bootstrap.min.css.map"


import hero1 from "./images/hero_bg.jpg"
import img1 from "./images/img_1.jpg"
import img2 from "./images/img_2.jpg" 
import img3 from "./images/img_3.jpg" 
import img4 from "./images/img_4.jpg"
import img5 from "./images/img_1_horizontal.jpg" 
import img6 from "./images/img_2_horizontal.jpg" 
import img7 from "./images/img_3_horizontal.jpg" 

function tutorial() {
  return (
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
                  <li className="active"><a href="/tutorial" className="nav-link">Tutorials</a></li>
                  <li><a href="/testimonials" className="nav-link">Testimonials</a></li>
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
              <h1>Our <strong>Tutorials</strong></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading mb-4">
                <span className="caption">Tutorial Courses</span>
                <h2>Choose Course</h2>
              </div>
            </div>  
          </div>
          <div className="row align-items-stretch">
            <div className="col-lg-2">
              <a href="#" className="course">
                <span className="wrap-icon brand-adobeillustrator" />
                <h3>Illustrator</h3>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="#" className="course">
                <span className="wrap-icon brand-adobephotoshop" />
                <h3>Photoshop</h3>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="#" className="course">
                <span className="wrap-icon brand-angular" />
                <h3>Angular</h3>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="#" className="course">
                <span className="wrap-icon brand-javascript" />
                <h3>JavaScript</h3>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="#" className="course">
                <span className="wrap-icon brand-react" />
                <h3>React</h3>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="#" className="course">
                <span className="wrap-icon brand-vue-dot-js" />
                <h3>Vue</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section bg-light">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <form action="#" className="d-flex search-form">
                <span className="icon-" />
                <input type="search" className="form-control mr-2" placeholder="Search subjects" />
                <input type="submit" className="btn btn-primary px-4" defaultValue="Search" />
              </form>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="d-inline-flex align-items-center ml-auto">
                <span className="mr-4">Share:</span>
                <a href="#" className="mx-2 social-item"><span className="icon-facebook" /></a>
                <a href="#" className="mx-2 social-item"><span className="icon-twitter" /></a>
                <a href="#" className="mx-2 social-item"><span className="icon-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="heading mb-4">
                <span className="caption">Latest</span>
                <h2>Tutorials</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex tutorial-item mb-4">
                <div className="img-wrap">
                  <a href="#"><img src={img1} alt="Image" className="img-fluid" /></a>
                </div>
                <div>
                  <h3><a href="#">Learning React Native</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!</p>
                  <p className="mb-0">
                    <span className="brand-react h5" />
                    <span className="brand-javascript h5" />
                  </p>
                  <p className="meta">
                    <span className="mr-2 mb-2">1hr 24m</span>
                    <span className="mr-2 mb-2">Advanced</span>
                    <span className="mr-2 mb-2">Jun 18, 2020</span>
                  </p>
                  <p><a href="#" className="btn btn-primary custom-btn">Enroll</a></p>
                </div>
              </div>
              <div className="d-flex tutorial-item mb-4">
                <div className="img-wrap">
                  <a href="#"><img src={img2} alt="Image" className="img-fluid" /></a>
                </div>
                <div>
                  <h3><a href="#">Learning Angular 101</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!</p>
                  <p className="mb-0">
                    <span className="brand-angular h5" />
                    <span className="brand-javascript h5" />
                  </p>
                  <p className="meta">
                    <span className="mr-2 mb-2">1hr 24m</span>
                    <span className="mr-2 mb-2">Advanced</span>
                    <span className="mr-2 mb-2">Jun 18, 2020</span>
                  </p>
                  <p><a href="#" className="btn btn-primary custom-btn">Enroll</a></p>
                </div>
              </div>
              <div className="d-flex tutorial-item mb-4">
                <div className="img-wrap">
                  <a href="#"><img src={img3} alt="Image" className="img-fluid" /></a>
                </div>
                <div>
                  <h3><a href="#">Learning Photoshop</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!</p>
                  <p className="mb-0">
                    <span className="brand-adobephotoshop h5" />
                  </p>
                  <p className="meta">
                    <span className="mr-2 mb-2">1hr 24m</span>
                    <span className="mr-2 mb-2">Advanced</span>
                    <span className="mr-2 mb-2">Jun 18, 2020</span>
                  </p>
                  <p><a href="#" className="btn btn-primary custom-btn">Enroll</a></p>
                </div>
              </div>
              <div className="d-flex tutorial-item mb-4">
                <div className="img-wrap">
                  <a href="#"><img src={img4} alt="Image" className="img-fluid" /></a>
                </div>
                <div>
                  <h3><a href="#">Advance Illustrator</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!</p>
                  <p className="mb-0">
                    <span className="brand-adobeillustrator h5" />
                  </p>
                  <p className="meta">
                    <span className="mr-2 mb-2">1hr 24m</span>
                    <span className="mr-2 mb-2">Advanced</span>
                    <span className="mr-2 mb-2">Jun 18, 2020</span>
                  </p>
                  <p><a href="#" className="btn btn-primary custom-btn">Enroll</a></p>
                </div>
              </div>
              <div className="custom-pagination">
                <ul className="list-unstyled">
                  <li><a href="#"><span>1</span></a></li>
                  <li><span>2</span></li>
                  <li><a href="#"><span>3</span></a></li>
                  <li><a href="#"><span>4</span></a></li>
                  <li><a href="#"><span>5</span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-side mb-3">
                <a href="#"><img src={img5} alt="Image" className="img-fluid" /></a>
                <h3><a href="#">Learning React Native</a></h3>
              </div>  
              <div className="box-side mb-3">
                <a href="#"><img src={img6}alt="Image" className="img-fluid" /></a>
                <h3><a href="#">Learning React Native</a></h3>
              </div>  
              <div className="box-side">
                <a href="#"><img src={img7}alt="Image" className="img-fluid" /></a>
                <h3><a href="#">Learning React Native</a></h3>
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
                  Copyright © All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by 
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

export default tutorial


