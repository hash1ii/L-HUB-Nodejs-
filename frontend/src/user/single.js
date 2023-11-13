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
import img8 from "./images/person_1.jpg"
import img9 from "./images/person_2.jpg"
import img10 from "./images/person_3.jpg"
import img11 from "./images/person_4.jpg"
import img12 from "./images/person_5.jpg"

function Single(){
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
                <li><a href="/tutorials" className="nav-link">Tutorials</a></li>
                <li><a href="/testimonials" className="nav-link">Testimonials</a></li>
                <li className="/active"><a href="blog" className="nav-link">Blog</a></li>
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
            <h1><strong>Single Blog Posts Title</strong></h1>
            <div className="pb-4 get"><strong className="text-white">Posted on May 22, 2020 • By Admin</strong></div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 blog-content">
            <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <blockquote><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></blockquote>
            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <blockquote><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></blockquote>
            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
            <div className="pt-5">
              <p>Categories:  <a href="#">Design</a>, <a href="#">Events</a>  Tags: <a href="#">#html</a>, <a href="#">#trends</a></p>
            </div>
            <div className="pt-5">
              <h3 className="mb-5">6 Comments</h3>
              <ul className="comment-list">
                <li className="comment">
                  <div className="vcard bio">
                    <img src={img9} alt="Free Website Template by Free-Template.co" />
                  </div>
                  <div className="comment-body">
                    <h3>Jacob Smith</h3>
                    <div className="meta">January 9, 2018 at 2:21pm</div>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                    <p><a href="#" className="reply">Reply</a></p>
                  </div>
                </li>
                <li className="comment">
                  <div className="vcard bio">
                    <img src={img10} alt="Free Website Template by Free-Template.co" />
                  </div>
                  <div className="comment-body">
                    <h3>Chris Meyer</h3>
                    <div className="meta">January 9, 2018 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><a href="#" className="reply">Reply</a></p>
                  </div>
                  <ul className="children">
                    <li className="comment">
                      <div className="vcard bio">
                        <img src={img12} alt="Free Website Template by Free-Template.co" />
                      </div>
                      <div className="comment-body">
                        <h3>Chintan Patel</h3>
                        <div className="meta">January 9, 2018 at 2:21pm</div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p><a href="#" className="reply">Reply</a></p>
                      </div>
                      <ul className="children">
                        <li className="comment">
                          <div className="vcard bio">
                            <img src={img8} alt="Free Website Template by Free-Template.co" />
                          </div>
                          <div className="comment-body">
                            <h3>Jean Doe</h3>
                            <div className="meta">January 9, 2018 at 2:21pm</div>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <p><a href="#" className="reply">Reply</a></p>
                          </div>
                          <ul className="children">
                            <li className="comment">
                              <div className="vcard bio">
                                <img src={img11} alt="Free Website Template by Free-Template.co" />
                              </div>
                              <div className="comment-body">
                                <h3>Ben Afflick</h3>
                                <div className="meta">January 9, 2018 at 2:21pm</div>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                <p><a href="#" className="reply">Reply</a></p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="comment">
                  <div className="vcard bio">
                    <img src={img8}alt="Free Website Template by Free-Template.co" />
                  </div>
                  <div className="comment-body">
                    <h3>Jean Doe</h3>
                    <div className="meta">January 9, 2018 at 2:21pm</div>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    <p><a href="#" className="reply">Reply</a></p>
                  </div>
                </li>
              </ul>
              {/* END comment-list */}
              <div className="comment-form-wrap pt-5">
                <h3 className="mb-5">Leave a comment</h3>
                <form action="#" className>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="url" className="form-control" id="website" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name id="message" cols={30} rows={10} className="form-control" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Post Comment" className="btn btn-primary btn-md text-white" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 sidebar">
            <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon fa fa-search" />
                  <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                </div>
              </form>
            </div>
            <div className="sidebar-box">
              <div className="categories">
                <h3>Categories</h3>
                <li><a href="#">Creatives <span>(12)</span></a></li>
                <li><a href="#">News <span>(22)</span></a></li>
                <li><a href="#">Design <span>(37)</span></a></li>
                <li><a href="#">HTML <span>(42)</span></a></li>
                <li><a href="#">Web Development <span>(14)</span></a></li>
              </div>
            </div>
            <div className="sidebar-box">
              <img src={img8} alt="Free Website Template by Free-Template.co" className="img-fluid mb-4 w-50 rounded-circle" />
              <h3 className="text-black">About The Author</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <p><a href="#" className="btn btn-primary btn-md text-white">Read More</a></p>
            </div>
            <div className="sidebar-box">
              <h3 className="text-black">Paragraph</h3>
              <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
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
export default Single;
