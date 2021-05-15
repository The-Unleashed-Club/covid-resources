//import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div style={styles.Nav}>
        <Link style={styles.btn} to="/About">About Us</Link>
        <Link style={styles.btn} to="/Blog">Blog</Link>
        <Link style={styles.btn} to="/Donate">Donate</Link>
        <Link style={styles.btn} to="/Leads">Submit Verified Leads</Link>
      </div>
    </>
  )
};

const styles = {
  Nav: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#808080',

  },
  btn: {
    backgroundColor: '#FFFF00',
    color: '#808080',
    paddingLeft: '0.5%',
    paddingRight: '0.5%',
    paddingTop: '0.2%',
    paddingBottom: '0.2%',
    margin: '1%',
    fontSize: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5px',
    textDecoration: 'none',

  },
};
export default Nav
