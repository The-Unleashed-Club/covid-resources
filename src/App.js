import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navmenu from './components/states';

const states=['Andhra Pradesh', 'Assam', 'Arunachal Pradesh', 'Bihar', 'Goa', 'Gujarat', 'Jammu and Kashmir', 'Jharkhand', 'West Bengal', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttaranchal', 'Uttar Pradesh', 'Haryana', 'Himachal Pradesh',  'Chhattisgarh'];
const App = () => {
  return (
    <>
      <Header />
      
      

	<Navmenu menuitems = {states} />,
	
 

      <Footer />
    </>
  )
};


export default App

