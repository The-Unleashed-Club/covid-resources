import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import States from './components/states'
//import * as ReactBootStrap from "react-bootstrap";
//import Nav from './components/NavBar';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Main from '../src/Pages/MainPage';
import Amb from '../src/Pages/Amb';
import Beds from '../src/Pages/Beds';
import Guide from '../src/Pages/Guide';
import Medi from '../src/Pages/Medi';
import OxyCans from '../src/Pages/OxyCans';
import OxyRefil from '../src/Pages/OxyRefil';
import Ngo from '../src/Pages/Ngo';
import OxyCyl from '../src/Pages/OxyCyl';
import OxyConc from '../src/Pages/OxyConc';


const App = () => {
  return (
    <>
      <Header  />
      
    
      < BrowserRouter >
      <div>
        
         <Switch>
            <Route exact path="/" component={States} />
            <Route  path="/Main" component={Main} />
          
            <Route  path="/Amb" component={Amb} />
            <Route  path="/Beds" component={Beds} />
            <Route  path="/Guide" component={Guide} />
            <Route  path="/Medi" component={Medi} />
            <Route  path="/Ngo" component={Ngo} />
            <Route  path="/OxyCans" component={OxyCans} />
            <Route  path="/OxyConc" component={OxyConc} />
            <Route  path="/OxyRefil" component={OxyRefil} />
            <Route  path="/OxyCyl" component={OxyCyl} />
         </Switch>
      </div>
   </ BrowserRouter >
      
      <Footer />



    </>
  )
};


export default App