//import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from './Header';

const Nav = () => {
  return (
    <>
    <Header/>
      <div style={styles.Nav}>
      <Link style={styles.btn} to="/home">Home</Link>
        <Link style={styles.btn} to="/About">About Us</Link>
        <Link style={styles.btn} to="/Blog">Blog</Link>
        <Link to={{ pathname: "https://forms.gle/Qg5jbCjdapEsWGo19" }} 
target="_blank" style={styles.btn} >Volunteer</Link>

      </div>
    </>
  )
};

const styles = {
  Nav: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#34c759',

  },
  btn: {
    backgroundColor: '#F0FFFF',
    color: '#000000',
    padding: '7px',
    margin: '1%',
    fontSize: '20px',
    //borderStyle: 'solid',
    //borderWidth: '1px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontFamily: 'Poppins',

  },
};
export default Nav
