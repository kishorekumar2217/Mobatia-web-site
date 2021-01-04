import React from 'react';

const Client = () => {
    return (
        <div>
            <section class="w3l-testimonials py-5" id="testimonials">
     
      <div class="container py-md-4 mb-md-0 mb-md-5 mb-4">
          <div class="heading text-center mx-auto">
              <h3 class="hny-title text-center mb-5">What Our Clients Say! </h3>
          </div>
          <div class="owl-testimonial owl-carousel owl-theme">
              <div class="item">
                  <div class="slider-info">
                      <div class="img-circle">
                          <img src="assets/images/c1.jpg" class="img-fluid rounded" alt="client image"/>
                      </div>
                      <div class="">
                          <span class="fa fa-quote-left mr-2"></span>
                          <div class="message">It is important to remember that there are no 
                          overnight successes. You will need to be dedicated, single-minded,
                           and there is no substitute to hard work</div>

                          <div class="name">- Mukesh Dhirubhai</div>
                          <div class="desp">Jio ,India</div>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="slider-info">
                      <div class="img-circle">
                          <img src="assets/images/c2.jpg" class="img-fluid rounded" alt="client image"/>
                      </div>
                      <div class="">
                          <span class="fa fa-quote-left mr-2"></span>
                          <div class="message">It's really hard to design products by focus groups. A lot of times, 
                          people don't know what they want until you show it to them.</div>
                          <div class="name">- Steve Jobs</div>
                          <div class="desp">Apple ,Usa</div>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="slider-info">
                      <div class="img-circle">
                          <img src="assets/images/c3.jpg" class="img-fluid rounded" alt="client image"/>
                      </div>
                      <div class="message-info">
                          <span class="fa fa-quote-left mr-2"></span>
                          <div class="message">I think a simple rule of business is, if you do the things that are easier first, 
                          then you can actually make a lot of progress.</div>
                          <div class="name">- Mark Zuckerberg</div>
                          <div class="desp">Facebook ,Usa</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
  </section>
        </div>
    );
};

export default Client;