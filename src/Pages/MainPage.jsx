import React from 'react';
import { Link } from "react-router-dom";
//import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Button from '@material-ui/core/Button';
const Main = () => {
  return (
    <>
      <div style={styles.main}>
        <h1>RESOURCES</h1>
        <div style={styles.buttonBox}>
          <ul>
            <Button variant="contained" ><Link to="/Amb">Ambulance</Link></Button>
            <Button variant="contained" ><Link to="/Beds">Beds</Link></Button>
            <Button variant="contained" > <Link to="/Guide">Guide</Link></Button>
            <Button variant="contained" > <Link to="/Ngo">Ngo</Link></Button>
            <Button variant="contained" > <Link to="/Medi">Medicines</Link></Button>
            <Button variant="contained" ><Link to="/OxyCans">Oxycans</Link></Button>
            <Button variant="contained" > <Link to="/OxyCOnc">Oxyconc</Link></Button>
            <Button variant="contained" ><Link to="/OxyRefil">OxyRefil</Link></Button>
            <Button variant="contained" > <Link to="/OxyCyl">OxyCyl</Link></Button>
          </ul>
        </div>
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
  buttonBox:{
    display: 'flex',
    flexDirection: 'column',
    /* flex-wrap: wrap; */
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
  },
};
export default Main