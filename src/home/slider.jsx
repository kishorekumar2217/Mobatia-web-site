import React from 'react';
import {Link,Switch ,Route,Redirect, BrowserRouter as Router} from 'react-router-dom';


const Slider =()=>{
    return(
        <>

<section class="w3l-main-slider" id="home">
    <div class="companies20-content">
    <div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">


      
  <div class="carousel-inner">
    
    <div class="carousel-item active">
    <div class="slider-info banner-view bg bg2">
    <div class="banner-info">
                <div class="container">
                  <div class="banner-info-bg">
                    <h5>Web And Mobile App Development  Company</h5>
                    <p class="mt-4 pr-lg-4">Mobatia's Application Development services use the power of latest technologies to make your application future-read </p>
                    <Link class="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" to="/about"> About Us</Link>
                    <Link class="btn btn-style btn-white mt-sm-5 mt-4" to="/contact"> Contact Us</Link>
                  </div>
               </div>
           </div>
      </div>
    </div>



    <div class="carousel-item">
    <div class="slider-info  banner-view banner-top1 bg bg2">
    <div class="banner-info">
                <div class="container">
                  <div class="banner-info-bg">
                    <h5>Provide Effective Software Solution</h5>
                    <p class="mt-4 pr-lg-4">Quality must be enforced, otherwise it won't happen. We programmers must be required to write tests, otherwise we won't do it. </p>
                    <a class="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="about.html"> About Us</a>
                    <Link class="btn btn-style btn-white mt-sm-5 mt-4" to="/contact"> Contact Us</Link>

                  </div>
                </div>
              </div>
  </div>
    </div>


    <div class="carousel-item">
    <div class="slider-info banner-view banner-top2 bg bg2">
    <div class="banner-info">
                <div class="container">
                  <div class="banner-info-bg">
                    <h5>Provide Effective Customer Service</h5>
                    <p class="mt-4 pr-lg-4">If you’re relentlessly focused on lowering cost, you’ll quickly become oblivious to opportunities to increase value. </p>
                    <a class="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="about.html"> About Us</a>
                    <Link class="btn btn-style btn-white mt-sm-5 mt-4" to="/contact"> Contact Us</Link>

                  </div>
                </div>
              </div>
      </div>
    </div>
  </div>
</div>
      <div class="arrow-downhny">
        <a href="#about" class="arrow-down text-center position-absolute">
          <span class="arrow-down-icon">
            <span class="fa fa-arrow-down"></span>
          </span>
        </a>
      </div>
    </div>
  </section>
        </>
    )
}
export default Slider;