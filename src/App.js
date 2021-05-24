import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer';
import States from './components/states';

import Nav from './components/NavBar';
import About from '../src/NavPages/About';
import Blog from '../src/NavPages/Blog';
import Donate from '../src/NavPages/Donate';
import Leads from '../src/NavPages/Leads';


import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Main from '../src/Pages/MainPage';

//import Screen2 from './screens/Screen2'

//context api

import AppState from './context/AppState'


const App = () => {
  return (
    <>
      <Header />
      < BrowserRouter >
        <Nav />
        <div>
          <AppState>
          
            <Switch>
              <Route exact path="/" component={States} />
              <Route path="/Main" component={Main} />

              <Route path="/About" component={About} />
              <Route path="/Blog" component={Blog} />
              <Route path="/Donate" component={Donate} />
              <Route path="/Leads" component={Leads} />
            </Switch>

          </AppState>
        </div>
      </ BrowserRouter >

      <Footer />



    </>
  )
};


export default App