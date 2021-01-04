
import React from 'react';
import { Menu } from './Menu';
import {Link,Switch ,Route,Redirect, BrowserRouter as Router} from 'react-router-dom';






const Header = () => {
  
  return (

 <Router>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark stroke">
            <h1><Link className="navbar-brand">
              <span className="sub-log">Mo</span>batia
    </Link></h1>


            <button className=" navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
              data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>

            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className=" ">
                {
                  Menu.map((menu, index) => (
                    menu.fixMenu ? (
                      <React.Fragment key={index}>
                        <li className="nav-item active">
                          <Link activeClassName="menu_active" exact 
           className="nav-link active"
            aria-current="page" to="/   " ><h4 className="nav"> {menu.name}</h4></Link >
                        </li>
                      </React.Fragment>
                    ) : (
                        <React.Fragment key={index}>
                          <li className="nav-item">
                            <a a activeClassName="menu_active" className="nav-link active"
                             type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false"><h4 className="nav">
                                {menu.name}</h4></a >
                            <ul className="sub-menu children dropdown-menu">
                              {

                                menu.childrens.map((child, cIndex) => (
                                  <ul  clasName=" dropdown-menu">
                                    <li key={cIndex} nav-link dropdown-toggle>
                                      <div className="container">
                                      <a  className="dropdown-item" data-hover="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false" to="" ><h5 className="nav">{child.name}</h5></a >
                                        < a className="dropdown-item" data-hover="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false" to="">{child.a1}</a >
                                        </div>
                                    </li>
                                  </ul>
                                ))
                              }
                            </ul>

                          </li>


                       
                                        
              </React.Fragment>
                                        
           )


  ))
                        }
                        
                    </ul>
                    
                    </div>

          </nav>
         
           
           
           
      
        </div>
        
        
    </header>
  



</Router>
  );
}

export default Header;







