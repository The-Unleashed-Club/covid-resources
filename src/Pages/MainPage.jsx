import React from 'react';

import { Link } from "react-router-dom";
//import { Route, BrowserRouter, Switch } from 'react-router-dom'
//import HaryanaData from '../StatesLeads/Haryana';
import Screen2 from '../screens/Screen2'

//<button onClick={<Screen2/>}><Link to="/Amb">Ambulance</Link></button>
const Main = () => {
  return (
    <>
      <div style={styles.main}>
        <h1>RESOURCES</h1>
        <ul>
          <button onClick={<Screen2 />}><Link to="/Amb">Ambulance</Link></button>
          <li> <Link to="/Beds">Beds</Link></li>
          <li> <Link to="/Guide">Guide</Link></li>
          <li> <Link to="/Ngo">Ngo</Link></li>
          <li> <Link to="/Medi">Medicines</Link></li>
          <li> <Link to="/OxyCans">Oxycans</Link></li>
          <li> <Link to="/OxyCOnc">Oxyconc</Link></li>
          <li> <Link to="/OxyRefil">OxyRefil</Link></li>
          <li> <Link to="/OxyCyl">OxyCyl</Link></li>
        </ul>
      </div>
    </>
  )
};
const styles = {
  main: {
    padding: '2%',
    marginTop: '1%',
    marginBottom: '1%',
  },

};
export default Main