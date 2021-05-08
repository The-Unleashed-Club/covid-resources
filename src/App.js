import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
//import States from './components/states';
import States from './components/States'
//import * as ReactBootStrap from "react-bootstrap";
import Nav from './components/NavBar';
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <States />
      <Footer />



    </>
  )
};


export default App