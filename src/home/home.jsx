

import React from 'react';
import Header from '../contact/header';
import Slider from './slider';
import Gride from './gride';
import Faq from './faq';
import Project from './project';
import State from './states';
import Banner from '../contact/innerbanner';
import Bottom from './bottom';
import Footer from './footer';
// import Dark from './Dark';











function Main() {
  return (
    <div >
     <Header/>

     <Slider/>
      
     <Gride/>
     <Faq/>
     <Project/>
    
     <Footer/>
     {/* <Dark/> */}

    </div>
  );
}

export default Main;
