import React, { useState} from 'react';

import ForwardIcon from '@material-ui/icons/Forward';
import Ambulance from './Ambulance';
import Beds from './Beds';
import Medicine from './Medicine';
import Oxygen from './Oxygen';
import OxygenCylinders from './OxygenCylinders';
import OxygenRefiling from './OxygenRefiling'
import BloodBanks from './BloodBanks';
import TestingCenters from './TestingCenters';
import FoodDistribution from './FoodDistribution';
import HomeCare from './Homecare';
import PlasmaDonors from './PlasmaDonors';
import Others from './Others';

//map function for indivisual leads passing data 


const Main = (props) => {

  //define the Value with the data which is coming from button click
  //const Value = props.location.MainProps.titleName;
  const Value = props.location.MainProps == undefined ? "" : props.location.MainProps.titleName

  
  const [buttonId, setButton] = useState(0)
  //const { data } = useContext(appContext)

  const handleClick = (Id) => {
    setButton(Id);
  }

  return (
    <div style={styles.main}>
     

        <h1 style={styles.head}>RESOURCES<ForwardIcon /></h1>

        <div style={styles.buttonBox}>
          <input className={buttonId === 1 ? "button1" :
            "button1"} onClick={() => handleClick(1)} value="Ambulance"
            type="button" style={styles.btn} />
          <input className={buttonId === 2 ? "button2" :
            "button1"} onClick={() => handleClick(2)} value="Beds"
            type="button" style={styles.btn} />
          <input className={buttonId === 3 ? "button3" :
            "button1"} onClick={() => handleClick(3)} value="Medicines"
            type="button" style={styles.btn} />
          {/* <input className={buttonId === 4 ? "button4" :
            "button1"} onClick={() => handleClick(4)} value="Oxygen Cans"
            type="button" style={styles.btn} /> */}
          <input className={buttonId === 5 ? "button5" :
            "button1"} onClick={() => handleClick(5)} value="Oxygen"
            type="button" style={styles.btn} />
          <input className={buttonId === 6 ? "button6" :
            "button1"} onClick={() => handleClick(6)} value="Oxygen Cylinders"
            type="button" style={styles.btn} />
          <input className={buttonId === 7 ? "button7" :
            "button1"} onClick={() => handleClick(7)} value="Oxygen Refiling"
            type="button" style={styles.btn} />
            <input className={buttonId === 8 ? "button8" :
          "button1"} onClick={() => handleClick(8)} value="Testing Centers"
          type="button" style={styles.btn} />

        <input className={buttonId === 9 ? "button8" :
          "button1"} onClick={() => handleClick(9)} value="Plasm Donors"
          type="button" style={styles.btn} />
        <input className={buttonId === 10 ? "button8" :
          "button1"} onClick={() => handleClick(10)} value="Blood
            Banks "
          type="button" style={styles.btn} />
        <input className={buttonId === 11 ? "button8" :
          "button1"} onClick={() => handleClick(11)} value="Home Care"
          type="button" style={styles.btn} />
        <input className={buttonId === 12 ? "button8" :
          "button1"} onClick={() => handleClick(12)} value="Food Distribution"
          type="button" style={styles.btn} />
  <input className={buttonId === 13 ? "button8" :
          "button1"} onClick={() => handleClick(13)} value="Others"
          type="button" style={styles.btn} />


        </div>
        {/*map the data with uppar define function, value which is coming from imgMediaCard button  */}
        {buttonId === 1 && <Ambulance stateName={Value} />} 
        {buttonId === 2 && <Beds stateName={Value} />}
        {buttonId === 3 && <Medicine stateName={Value}/>}
        {/* {buttonId === 4 && <OxygenCans stateName={Value}/>} */}
        {buttonId === 5 && <Oxygen stateName={Value}/>}
        {buttonId === 6 && <OxygenCylinders stateName={Value}/>}
        {buttonId === 7 && <OxygenRefiling stateName={Value}/>}
        {buttonId === 8 && <TestingCenters stateName={Value} />}
      {buttonId === 9 && <PlasmaDonors stateName={Value} />}
      {buttonId === 10 && <BloodBanks stateName={Value} />}
      {buttonId === 11 && <HomeCare stateName={Value} />}
      {buttonId === 12 && <FoodDistribution stateName={Value} />}
      {buttonId === 13 && <Others stateName={Value} />}

{console.log(Value)}
      </div>
  
  );
}



const styles = {

  main: {
   // margin:'1%',
    backgroundColor: '#F0FFFF',
  },


  head: {
   marginLeft:'1%',
    fontSize: '30px',
    fontFamily: 'Poppins',
  },

  
  buttonBox: {
   //display: 'flex',
  flexDirection: 'row',
   // marginLeft: '20%',

  },

  btn: {
    backgroundColor: '#34c759',
    color: '#FFFFFF',
    padding: '7px',
    margin: '1%',
    fontSize: '20px',
    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderRadius: '5px',
    borderColor:'#FFFFFF',
    fontFamily: 'Poppins',

  },


};
export default Main