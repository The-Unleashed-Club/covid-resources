import React from 'react';
import { Link } from "react-router-dom";
//import { Route, BrowserRouter, Switch } from 'react-router-dom'
//import Button from '@material-ui/core/Button';
const Main = () => {
  return (
    <>
      <div style={styles.main}>
        <h1>RESOURCES</h1>
        <div style={styles.buttonBox}>
          <ul>
            <Link style={styles.btn} to="/Amb">Ambulance</Link>
            <Link style={styles.btn} to="/Beds">Beds</Link>
            <Link style={styles.btn} to="/Guide">Guide</Link>
            <Link style={styles.btn} to="/Ngo">Ngo</Link>
            <Link style={styles.btn} to="/Medi">Medicines</Link>
            <Link style={styles.btn} to="/OxyCans">Oxycans</Link>
            <Link style={styles.btn} to="/OxyCOnc">Oxyconc</Link>
            <Link style={styles.btn} to="/OxyRefil">OxyRefil</Link>
            <Link style={styles.btn} to="/OxyCyl">OxyCyl</Link>
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
    backgroundColor: '#f0ffff',
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'column',
    /* flex-wrap: wrap; */
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  btn: {
    backgroundColor: '#34c759',
    padding: '5px',
    margin: '1%',
    fontSize: '20px',
    borderRadius: '5px',
    textDecoration: 'none',
    color: '#ffffff',
    //borderStyle: 'solid',
    //borderWidth: '1px',
  },

};
export default Main