import React from 'react';
import { Link } from 'react-router-dom';

const Androidbanner = (props) => {
    return (
     
        <section class="w3l-services3">
        <div class="new-block">
          <div class="container py-5">
            <div class="middle-section py-lg-5 py-4">
              <div class="section-width">
                <h3 class="hny-title two">Android App Development</h3>
              </div>
              <div class="link-list-menu">
                <p class="mb-sm-5 mb-4">At Mobatia we develop high-performance mobile apps intended to enhance customers’ brand value.
                We at Mobatia are keen on 100% clean, quality-assured code.</p>
                  <Link class="btn btn-style btn-white" to="/contact"> Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Androidbanner;