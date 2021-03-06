import React from 'react';
import { Link, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';


const Banner =() => {
    return (<>
        <div class="inner-banner">
        </div>
        <section class="w3l-breadcrumb">
          <div class="container">
            <ul class="breadcrumbs-custom-path">
              <li><Link  to="/">Home</Link></li>
              <li class="active"><span class="fa fa-arrow-right mx-2" aria-hidden="true"></span> About Us</li>
            </ul>
          </div>
        </section>
        </>
    );
};



export default Banner;