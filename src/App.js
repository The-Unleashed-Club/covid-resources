/* eslint-disable no-unused-vars */
import React from 'react';

import Firebase from './Firebase/Firebase'

import Footer from './components/Footer';
import States from './components/states';

import Nav from './components/NavBar';
import About from '../src/NavPages/About';
import Blog from '../src/NavPages/Blog';



import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Main from '../src/Pages/MainPage';


import AppState from './context/AppState'



const App = () => {
  return (
    <>
      < BrowserRouter >
        <Nav />
        <div>
          <AppState>
          
            <Switch>
              <Route exact path="/" component={States} />
              <Route path="/Main" component={Main} />

              <Route path="/About" component={About} />
              <Route path="/Blog" component={Blog} />
            
            </Switch>

          </AppState>
        </div>
      </ BrowserRouter >

      <Footer />



    </>
  )
};


export default App