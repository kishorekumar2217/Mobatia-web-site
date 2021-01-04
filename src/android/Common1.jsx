import React from 'react';

const Common1 = (props) => {
    return (
        <section class="w3l-services2" id="services">
        <div id="cwp23-block" class="py-5">
          <div class="container py-lg-5">
    
            <div class="row cwp23-content mt-lg-5 mt-4">
              <div class="col-lg-6 cwp23-img">
                <h6 class="sub-titlehny">{props.Services} </h6>
                <h3 class="hny-title">{props.name} </h3>
                <p class="mt-4 text-justify">{props.intro}



                {/* <ul>
<h5><i className="icon-leaf"></i> ­User friendly mobile applications</h5>
<h5><span class="icon-users">Multi Lingual Support</span></h5>
<h5><span class="icon-road-sign">Secure Android Mobile Applications</span></h5>
</ul> */}
    
                </p>
                <p class="mt-4 text-justify">{props.intro1}</p>
               
              </div>
              
              <div class="col-lg-6 cwp23-text align-self mt-lg-0 mt-5 pl-lg-5">
                <div class="cwp23-text-cols text-justify">
                  <div class="column">
                    <span class="fa fa-clock-o" aria-hidden="true"></span>
                    <a href="services.html">{props.ser1}</a>
                    <p>{props.serde1}</p>
                  </div>
                  <div class="column">
                    <span class="fa fa-cogs" aria-hidden="true"></span>
                    <a href="services.html">{props.ser2}</a>
                    <p>{props.serde2}</p>
                  </div>
                  <div class="column">
                    <span class="fa fa-mars" aria-hidden="true"></span>
                    <a href="services.html">
                    {props.ser3}</a>
                    <p>{props.serde3} </p>
                  </div>
                  <div class="column">
                    <span class="fa fa-user" aria-hidden="true"></span>
                    <a href="services.html">{props.ser4}</a>
                    <p>{props.serde4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    );
};

export default Common1;