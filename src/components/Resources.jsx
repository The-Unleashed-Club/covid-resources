import React from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Oxy from './Oxy';
import Ngo from './Ngo';
import Ambulance from './Ambulance';
import rscrc from './Rscrc';



const Res = () => {
  return (
   < BrowserRouter >
      <div>
        
         <Switch>
            <Route exact path="/" component={rscrc} />
            <Route exact path="/Oxy" component={Oxy} />
            <Route exact path="/Ambulance" component={Ambulance} />
            <Route exact path="/Ngo" component={Ngo} />
            
         </Switch>
      </div>
   </ BrowserRouter >

       
  )
};


export default Res