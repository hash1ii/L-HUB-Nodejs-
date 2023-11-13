import "css/style.css";
import "css/bootstrap.min.css"
import "css/bootstrap.min.css.map"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React, { useEffect, useState } from 'react';

import hero1 from "./images/hero_bg.jpg"
import img1 from "./images/img_1.jpg"
import img2 from "./images/img_2.jpg" 
import img3 from "./images/img_3.jpg" 
import img4 from "./images/img_4.jpg"
import img5 from "./images/img_1_horizontal.jpg" 
import img6 from "./images/img_2_horizontal.jpg" 
import img7 from "./images/img_3_horizontal.jpg" 
import img8 from "./images/person_1.jpg"
import img9 from "./images/person_2.jpg"
import img10 from "./images/person_3.jpg"
import { get } from "jquery";
import axios from "axios";
import engimg from "./images/english icon.png"
import chem from "./images/methane.gif"
import lang from "./images/language-diversity.gif"
import geo from "./images/globe.gif"
import physics from "./images/physics.gif"
import history from "./images/war.gif"
import bio from "./images/dna.gif"
import maths from "./images/maths.gif"
import { Carousel } from 'react-responsive-carousel';
function Home() {
  const [msg,setMsg]=useState([]);
  const [msg2,setMsg2]=useState([]);

  const subjectImages = {
    english:lang,
    chemistry:chem,
    hindi:lang,
    malayalam:lang,
    geography:geo,
    history:history,
    physics:physics,
    maths:maths,
    biology:bio,
   };
useEffect(()=>{
    getTopic();
    getData();
},[])
const getTopic =async ()=>{
  try {
    const response = await axios.get('http://localhost:8000/users/listtopic')
setMsg(response.data.element)
  }catch(e) {
  console.error(e)
}
  }

  const getData = async () => {
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = token;
  
      const response = await axios.get('http://localhost:8000/admin/listsubject');
      console.log(response);
      setMsg2(response.data);
    } catch (error) {
      console.log(error);
      if(error.response.status === 401) {
        window.location.href = "/authentication/sign-in"
      }
    }
  };



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
                  <a href="/home">
                    <strong>L-HUB</strong>
                  </a>
                </div>
              </div>
              <div className="col-9  text-right">
                <span className="d-inline-block d-lg-none">
                  <a href="#" className=" site-menu-toggle js-menu-toggle py-5 ">
                    <span className="icon-menu h3 text-black" />
                  </a>
                </span>
                <nav
                  className="site-navigation text-right ml-auto d-none d-lg-block"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav ml-auto ">
                    <li className="active">
                      <a href="/home" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/tutorial" className="nav-link">
                        Tutorials
                      </a>
                    </li>
                    <li>
                      <a href="/testimonials" className="nav-link">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="nav-link">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="nav-link">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div
          className="site-section-cover overlay"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-10 text-center">
                <h1>
                  THE <strong>HUB</strong> OF <strong>TUTORIALS</strong>
                </h1>
              </div>
            </div>
          </div>
        </div>


        <div className="site-section bg-light pb-0">
          <div className="container">
            <div className="row align-items-stretch overlap">
              {msg.slice(0, 1).map((item) => (
                <div className="col-lg-8" key={item.id}>
                  <div className="box h-100">
                    <div className="d-flex align-items-center">
                      <div className="img">
                        <img src={`http://localhost:8000/uploads/${item.image}`}  className="img-fluid" alt="Image" />
                      </div>
                      <div className="text">
                        <a href="#" className="category">
                          TUTORIAL {/* Assuming subject is a property of the item object */}
                        </a>
                        <h1>
                          <a href="#" className="tutorialsub">{item.subject}</a>
                        </h1>
                        <h3>
                          <a href="#">{item.topic}</a>
                        </h3>
                        <p className="body">
                        {item.description}
                        </p>
                        <p className="mb-0">
                          <span className="brand-react h5" />
                          <span className="brand-javascript h5" />
                        </p>
                        {/* <p className="meta">
                          <span className="mr-2 mb-2">1hr 24m</span>
                          <span className="mr-2 mb-2">Advanced</span>
                          <span className="mr-2 mb-2">Jun 18, 2020</span>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
                ))}


              <div className="col-lg-4"  >
                <div className="box small h-100" >
                {msg.slice(0, 4).map((item) => (
                  <div className="d-flex align-items-center mb-2"key={item.id} >
                    <div className="img">
                      <img src={`http://localhost:8000/uploads/${item.image}`}  className="img-fluid" alt="Image" />
                    </div>
                    <div className="text">
                      <a href="#" className="category">
                        Tutorial
                      </a>
                      <h3>
                        <a href="#">{item.topic}</a>
                      </h3>
                    </div>
                  </div>
             ))}
                </div> 
              </div>
            </div>
          </div>
        </div>
       
        <div className="site-section justify-content-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="heading mb-4">
                  <span className="caption">Tutorial Courses</span>
                  <h2> CHOOSE COURSE</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-stretch justify-content-center">
  <Carousel
    showArrows={false}
    showThumbs={true}
    emulateTouch={false}
    infiniteLoop={true}
    selectedItem={0}
    dynamicHeight={false}
    centerMode={true}
    centerSlidePercentage={100}
    showStatus={false} 

  >
    {msg2.reduce((accumulator, item, index) => {
      if (index % 3 === 0) {
        accumulator.push(
          <div className="row justify-content-between" key={index}>
            {msg2.slice(index, index + 3).map((subjectItem) => (
             <div className="col-lg-3  mb-5 " key={subjectItem.id}>
                <a href="#" className="course">
                  <img
                    src={subjectImages[subjectItem.subject.toLowerCase()]}
                    alt={subjectItem.subject}
                    style={{
                      width: '100%',
                    }}
                  />
                  <h3 className="mt-3">{subjectItem.subject}</h3>
                </a>
              </div>
            ))}
          </div>
        );
      }
      return accumulator;
    }, [])}
  </Carousel>
          </div>
          </div>
        </div>
      


        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="heading mb-4 justify-content-center">
                  <span className="caption">LATEST</span>
                  <h2>TUTORIALS</h2>
                </div>
              </div>
              <div className="col-lg-8">

                <div className="d-flex tutorial-item mb-4">
                  <div className="img-wrap">
                    <a href="#">
                      <img src={img1} alt="Image" className="img-fluid" />
                    </a>
                  </div>
                  <div>
                    <h3>
                      <a href="#">Learning React Native</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe
                      numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!
                    </p>
                    <p className="mb-0">
                      <span className="brand-react h5" />
                      <span className="brand-javascript h5" />
                    </p>
                    <p className="meta">
                      <span className="mr-2 mb-2">1hr 24m</span>
                      <span className="mr-2 mb-2">Advanced</span>
                      <span className="mr-2 mb-2">Jun 18, 2020</span>
                    </p>
                    <p>
                      <a href="/tutorialsingle" className="btn btn-primary custom-btn">
                        View
                      </a>
                    </p>
                  </div>
                </div>

                
                <div className="d-flex tutorial-item mb-4">
                  <div className="img-wrap">
                    <a href="#">
                      <img src={img2}alt="Image" className="img-fluid" />
                    </a>
                  </div>
                  <div>
                    <h3>
                      <a href="#">Learning Angular 101</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe
                      numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!
                    </p>
                    <p className="mb-0">
                      <span className="brand-angular h5" />
                      <span className="brand-javascript h5" />
                    </p>
                    <p className="meta">
                      <span className="mr-2 mb-2">1hr 24m</span>
                      <span className="mr-2 mb-2">Advanced</span>
                      <span className="mr-2 mb-2">Jun 18, 2020</span>
                    </p>
                    <p>
                      <a href="/tutorialsingle" className="btn btn-primary custom-btn">
                        View
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex tutorial-item mb-4">
                  <div className="img-wrap">
                    <a href="#">
                      <img src={img3}alt="Image" className="img-fluid" />
                    </a>
                  </div>
                  <div>
                    <h3>
                      <a href="#">Learning Photoshop</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe
                      numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!
                    </p>
                    <p className="mb-0">
                      <span className="brand-adobephotoshop h5" />
                    </p>
                    <p className="meta">
                      <span className="mr-2 mb-2">1hr 24m</span>
                      <span className="mr-2 mb-2">Advanced</span>
                      <span className="mr-2 mb-2">Jun 18, 2020</span>
                    </p>
                    <p>
                      <a href="/tutorialsingle" className="btn btn-primary custom-btn">
                        View
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex tutorial-item mb-4">
                  <div className="img-wrap">
                    <a href="#">
                      <img src={img4} alt="Image" className="img-fluid" />
                    </a>
                  </div>
                  <div>
                    <h3>
                      <a href="#">Advance Illustrator</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe
                      numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!
                    </p>
                    <p className="mb-0">
                      <span className="brand-adobeillustrator h5" />
                    </p>
                    <p className="meta">
                      <span className="mr-2 mb-2">1hr 24m</span>
                      <span className="mr-2 mb-2">Advanced</span>
                      <span className="mr-2 mb-2">Jun 18, 2020</span>
                    </p>
                    <p>
                      <a href="/tutorialsingle" className="btn btn-primary custom-btn">
                        View
                      </a>
                    </p>
                  </div>
                </div>
                {/* <div className="custom-pagination">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <span>1</span>
                      </a>
                    </li>
                    <li>
                      <span>2</span>
                    </li>
                    <li>
                      <a href="#">
                        <span>3</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>4</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>5</span>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              {/* <div className="col-lg-4">
                <div className="box-side mb-3">
                  <a href="#">
                    <img src={img5}alt="Image" className="img-fluid" />
                  </a>
                  <h3>
                    <a href="#">Learning React Native</a>
                  </h3>
                </div>
                <div className="box-side mb-3">
                  <a href="#">
                    <img src={img6}alt="Image" className="img-fluid" />
                  </a>
                  <h3>
                    <a href="#">Learning React Native</a>
                  </h3>
                </div>
                <div className="box-side">
                  <a href="#">
                    <img src={img7}alt="Image" className="img-fluid" />
                  </a>
                  <h3>
                    <a href="#">Learning React Native</a>
                  </h3>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center mb-5">
                <div className="heading">
                  <span className="caption">Testimonials</span>
                  <h2>Student Reviews</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="testimonial-2">
                  <h3 className="h5">Excellent Teacher!</h3>
                  <div>
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star-o text-warning" />
                  </div>
                  <blockquote className="mb-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt
                      eveniet veniam. Ipsam, nam, voluptatum
                    </p>
                  </blockquote>
                  <div className="d-flex v-card align-items-center">
                    <img src={img8} alt="Image" className="img-fluid mr-3" />
                    <div className="author-name">
                      <span className="d-block">Mike Fisher</span>
                      <span>Owner, Ford</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="testimonial-2">
                  <h3 className="h5">Best Video Tutorial!</h3>
                  <div>
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star-o text-warning" />
                  </div>
                  <blockquote className="mb-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt
                      eveniet veniam. Ipsam, nam, voluptatum
                    </p>
                  </blockquote>
                  <div className="d-flex v-card align-items-center">
                    <img src= {img9}alt="Image" className="img-fluid mr-3" />
                    <div className="author-name">
                      <span className="d-block">Jean Stanley</span>
                      <span>Traveler</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="testimonial-2">
                  <h3 className="h5">Easy to Understand!</h3>
                  <div>
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star-o text-warning" />
                  </div>
                  <blockquote className="mb-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt
                      eveniet veniam. Ipsam, nam, voluptatum
                    </p>
                  </blockquote>
                  <div className="d-flex v-card align-items-center">
                    <img src= {img10}alt="Image" className="img-fluid mr-3" />
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
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts.{" "}
                </p>
                <ul className="list-unstyled social">
                  <li>
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8 ml-auto">
                <div className="row">
                  <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Quick Links</h2>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Terms of Service</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Resources</h2>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Terms of Service</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Support</h2>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Terms of Service</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3">
                    <h2 className="footer-heading mb-4">Company</h2>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Terms of Service</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
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
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="icon-heart text-danger" aria-hidden="true" /> by
                    {/* <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
