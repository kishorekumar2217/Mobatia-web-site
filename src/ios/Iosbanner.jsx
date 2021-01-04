import React from 'react';
import { Link, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
  
const Iosbanner = (props) => {
    return (
     
        <section class="w3l-services3">
        <div class="new-block1">
          <div class="container py-5">
            <div class="middle-section py-lg-5 py-4">
              <div class="section-width">
                <h3 class="hny-title two">iOS App Development</h3>
              </div>
              <div class="link-list-menu">
              <h2> <p class="mb-sm-5 mb-4 text-justify">Our iOS applications which are developed using a robust set of technologies and utilities are unique and defect-free.
Innovation is our buzzword when it comes to iPhone development.</p></h2>
<Link class="btn btn-style btn-white" to="/contact"> Get a Quote</Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Iosbanner;