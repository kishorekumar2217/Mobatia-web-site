import React from 'react';
import Banner from './innerbanner';
import Client from './client';
import Qulity from './qulity';
import Firstdiv from './firstdiv';
// import Featur from './featurs';
import  Seconddiv from  './seconddiv';
import Team from './team';
import Header from '../contact/header'
import Footer from '../home/footer';




const About = () => {
    return (
        <>
          <Header/>

          <Banner/>
          
          <Firstdiv/>
          <Seconddiv/>
          {/* <Featur/> */}
          <Team/>
          <Qulity/>
          <Client/>
          <Footer/>



        </>
    );
};

export default About;