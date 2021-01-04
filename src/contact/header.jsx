import React from 'react';
import { Link, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import img from './moblog.jpg';

class Header extends React.Component {


  render() {

    return (

      <header id="site-header" class="fixed-top">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark stroke">
            
            <Link class="navbar-brand"to="/">
              <img src={img} title="Your logo" />
            </Link>


            <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
              data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span class="navbar-toggler-icon fa icon-close fa-times"></span>

            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mx-lg-auto">

                <li class="nav-item">
                  <Link className="nav-link" to="/" >Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
                {/* <li class="nav-item">
              <a class="nav-link" href="services.html">Services</a>
            </li> */}
                <li class="nav-item dropdown">
                  <a class="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">  Products  </a>
                  <ul class="dropdown-menu fade-up">
                    <li><Link class="dropdown-item" to="/mobicare"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-half" viewBox="0 0 16 16">
                      <path d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg> mobiCare</Link></li>
                    <li><a class="dropdown-item" href="#"> mobiSchool </a></li>
                    <li><a class="dropdown-item" href="#"> mobiRealto</a></li>
                  </ul>
                </li>


                <li class="nav-item dropdown has-megamenu">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Services </a>
                  <div class="dropdown-menu megamenu" role="menu">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="col-megamenu">
                          <h6 class="title"><center>MOBILE APP DEVELOPMENT</center></h6>
                          <br/>
                          <ul class="dropdown-submenu clearfix">

                            <li><Link class="dropdown-item" to="/android">
                              <span><i class="fa fa-android" aria-hidden="true"></i>
                              </span>   Android App Development</Link></li>



                            <li><Link class="dropdown-item" to="/ios">
                              <span><i class="fa fa-apple" aria-hidden="true"></i> </span>
               IOS App Development</Link></li>


                            <li><Link class="dropdown-item" to="/mobicare">
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                              </svg> </span>
                                  Web App Development</Link></li>



                          </ul>

                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="col-megamenu">
                          <h6 class="title"><center>MOBILE APP DESIGN</center></h6>
                          <br/>
                          <ul class="list-unstyled">
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="col-megamenu">
                          <h6 class="title"><center>CLOUD SERVICES</center></h6>
                          <br/>
                          <ul class="list-unstyled">
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="col-megamenu">
                          <h6 class="title">Title Menu Four</h6>
                          <br/>
                          <ul class="list-unstyled">
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                            <li><a href="#">Custom Menu</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="nav-item active">
                  <Link class="nav-link" to="contact">Contact</Link>
                </li>
                <li class="top-quote ml-lg-4 mt-lg-0 mt-3">
                  <Link to="/contact" class="btn btn-style btn-primary">Get a Quote</Link>
                </li>

                <li class="top-quote ml-lg-4 mt-lg-0 mt-3">
                <h1><Link class="navbar-brand" to="/">  
          <span class="sub-log">Mo</span>batia
        </Link></h1>
        </li>
              </ul>
            </div>




          </nav>
        </div>
        {/* <div class="container">

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-trigger="#main_nav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse" id="main_nav">

<div class="offcanvas-header mt-3">  
	<button class="btn btn-outline-danger btn-close float-right"> &times Close </button>
	<h5 class="py-2 text-white">Main navbar</h5>
</div>

<ul class="navbar-nav">
	<li class="nav-item active"> <a class="nav-link" href="#">Home </a> </li>
	<li class="nav-item"><a class="nav-link" href="#"> About </a></li>
	<li class="nav-item"><a class="nav-link" href="#"> Services </a></li>
	<li class="nav-item dropdown">
		<a class="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">  More items  </a>
	    <ul class="dropdown-menu">
		  <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
		  <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
	    </ul>
	</li>
</ul>

<ul class="navbar-nav ml-auto">
	<li class="nav-item"><a class="nav-link" href="#"> Menu item </a></li>
	<li class="nav-item"><a class="nav-link" href="#"> Menu item </a></li>
	<li class="nav-item dropdown">
		<a class="nav-link  dropdown-toggle" href="#" data-toggle="dropdown"> Dropdown right </a>
	    <ul class="dropdown-menu dropdown-menu-right">
		  <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
		  <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
	    </ul>
	</li>
</ul>
  </div> 
</nav>



</div> */}

      </header>



    );
  }
}
export default Header;