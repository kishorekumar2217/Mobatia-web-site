import React from 'react';

const Common2 = (props) => {
    return (
        <section class="w3l-grids-3 py-5">
        <div class="container py-md-5 py-3">
          <div class="row bottom-ab-grids align-items-center">
    
            <div class="col-lg-6 bottom-ab-left ">
              <h6 class="sub-titlehny">Some More Features</h6>
              <h3 class="hny-title">An inspired approach to quality {props.name} </h3>
              <p class="my-3"> {props.details}</p>
            </div>
            <div class="col-lg-6 bottom-ab-right mt-lg-0 mt-3 pl-lg-4">
              <p>{props.details1}</p>
              <p class="mt-3">{props.details2}</p>
            </div>
    
          </div>
          <div class="row bottom_grids pt-md-3 text-left ">
            <div class="col-lg-4 col-md-6 mt-5 ">
              <div class="grid-block">
                <a href="blog-single.html" class="d-block p-lg-4 p-3 text-justify">
                  <span class="fa fa-building-o" aria-hidden="true"></span>
                  <h4 class="my-3">{props.feature1}</h4>
                  <p class="">{props.fdetails1} </p>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-5">
              <div class="grid-block">
                <a href="blog-single.html" class="d-block p-lg-4 p-3 text-justify">
                  <span class="fa fa-american-sign-language-interpreting" aria-hidden="true"></span>
                  <h4 class="my-3">{props.feature2}</h4>
                  <p class="">{props.fdetails2} </p>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-5">
              <div class="grid-block">
                <a href="blog-single.html" class="d-block p-lg-4 p-3 text-justify">
                  <span class="fa fa-tint" aria-hidden="true"></span>
                  <h4 class="my-3">{props.feature3}</h4>
                 
                  <p class="">{props.fdetails3} </p>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-5">
              <div class="grid-block">
                <a href="blog-single.html" class="d-block p-lg-4 p-3 text-justify">
                  <span class="fa fa-cubes" aria-hidden="true"></span>
                  <h4 class="my-3">{props.feature4}</h4>
                    <p class="">{props.fdetails4}</p>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-5">
              <div class="grid-block">
                <a href="blog-single.html" class="d-block p-lg-4 p-3 text-justify">
                  <span class="fa fa-building-o" aria-hidden="true"></span>
                  <h4 class="my-3">{props.feature5}</h4>
                  <p class="">{props.fdetails5} </p>
                </a>
              </div>
            </div>
           
          </div>
        </div>
      </section>
     
    );
};

export default Common2;