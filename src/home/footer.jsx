import React from 'react';
import {Link,Switch ,Route,Redirect, BrowserRouter as Router} from 'react-router-dom';




  class Footer extends React.Component {
    constructor() {
      super();
  
      this.state = {
        is_visible: false
      };
    }
    
    componentDidMount() {
      var scrollComponent = this;
      document.addEventListener("scroll", function(e) {
        scrollComponent.toggleVisibility();
      });
    }

    toggleVisibility() {
      if (window.pageYOffset > 300) {
        this.setState({
          is_visible: true
        });
      } else {
        this.setState({
          is_visible: false
        });
      }
    }
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }



  render()

  {

    const { is_visible } = this.state;
  return (
    <>

      <section className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-lg-4">
            <div className="row footer-top-29">
              <div className="footer-list-29 col-lg-4">
                <ul>
                  <h6 className="footer-title-29">Resourses</h6>

                  <li><a href="#team">Blog</a></li>
                  <li><a href="#insta">Case Studies</a></li>
                  <li><a href="#tiling">Portfolio</a></li>


                </ul>
                <div className="main-social-footer-29 mt-4">
                  <h6 className="footer-title-29">Get in touch</h6>

                  <a href="https://www.facebook.com/mobatiatechnology/" className="facebook"><span className="fa fa-facebook"></span></a>
                  <a href="https://twitter.com/mobatia?lang=en" className="twitter"><span className="fa fa-twitter"></span></a>
                  <a href="https://www.instagram.com/mobatia_technology/" className="instagram"><span className="fa fa-instagram"></span></a>
                  <a href="https://www.linkedin.com/company/mobatia" className="linkedin"><span className="fa fa-linkedin"></span></a>
                  <a href="https://in.pinterest.com/mobatia/in" className="pinterest"><span className="fa fa-pinterest"></span></a>
                 
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-4 footer-list-29 footer-2 mt-lg-0 mt-5">

                
              </div>
              <div className="col-lg-3 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-5">

                <ul>
                  <h6 className="footer-title-29">Popular Services</h6>
                  <li><Link to="/android">Android App Development</Link></li>
                  <li><Link to="/ios">IOS App Development</Link></li>
                  <li><a href="#tiling">Web App Development</a></li>
                  <li><a href="#careers">Build Contracts</a></li>
                  <li><a href="#help">WordPress Development</a></li>
                  <li><a href="#help">PHP Development</a></li>


                </ul>



              </div>
              <div className="col-lg-3 col-md-6 col-sm-8 footer-list-29 footer-1 mt-lg-0 mt-5">

                <ul>
                  <h6 className="footer-title-29">Support</h6>

                  <li><Link to="/contact">Contact</Link></li>
                  <li><a href="#insta">Privacy Policy</a></li>
                  <li><a href="#tiling">Terms & Conditions</a></li>


                </ul>

              </div>
              <div className="col-lg-12 footer-list-29 footer-4 mt-5">
                {/* <div className="column1 align-self">
                  <h6 className="footer-title-29 mb-1">Subscribe to our Newsletter </h6>
                  <p>Enter your email and receive the latest news from us.</p>
                </div> */}
                <div className="column1">
                  <form action="#" className="subscribe" method="post">
                    <input type="email" name="email" placeholder="Your Email Address" required="" />
                    <button><span className="fa fa-paper-plane-o pr-1"></span></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-footer-29-main w3l-copyright">
        <div className="container">
          <div className="bottom-copies">
            <p className="copy-footer-29 text-center">© 2020 All rights reserved by mobatia Technology Pvt Ltd </p>
          </div>
        </div>
       
      
        {is_visible && (
          <button id="movetop" title="Go to top" onClick={() => this.scrollToTop()}>
               <span class="fa fa-angle-up"></span>
          </button>
        )}
  
  <div id="rg-book">
              <Link to="/contact" target="_self"><h5>Get a Quote</h5></Link>
              </div>

      </section>

    
    </>
  )
}
  }
export default Footer;