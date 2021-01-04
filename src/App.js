

import React from 'react';

import Main from './home/home';
  // import Header from './home/header';
  // import Footer from './home/footer';
import Mobicare from './products/Mobicare';


import Contact from './contact/contact.jsx';
import About from './about/about.jsx';
import Android from './android/Android';
import Ios from './ios/Ios';

import { Link, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

// import Contact from './home/contact';









function App() {
  return (
    <Router>


      <Switch>
        <Route path='/contact'> <Contact /></Route>


        <Route path='/about'> <About /></Route>
        <Route path='/android'> < Android /> </Route>
        <Route path='/ios'> < Ios /> </Route>
        <Route path='/mobicare'><Mobicare /></Route>

        
        <Route  path='/'> <Main /></Route>




      </Switch>




    </Router>
  );
}

export default App;
