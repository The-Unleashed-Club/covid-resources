import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import ForwardIcon from '@material-ui/icons/Forward';
//import Amb from './Amb';
import Beds from './Beds';
import Medi from './Medi';
import OxyCans from './OxyCans';
import OxyConc from './OxyConc';
import OxyCyl from './OxyCyl';
import OxyRefil from './OxyRefil';
//import appContext from '../context/AppContext';
//import StateLeads from '../components/StateLeads'
import OutlinedCard from '../components/OutlinedCard'

//db
const db = firebase.database();

//map function for indivisual leads passing data 

function CardData(val,index) {
    return (

        <OutlinedCard key={index}
        city={val.city}
            nameOfFacility={val.nameOfFacility}
            address={val.address}
            contact={val.contact}
            avalability={val.avalability}
            price={val.price}
            comments={val.comments}
            VerficationDataTime={val.VerficationDataTime}
        />
    );
}


const Main = (props) => {




 

  //define the Value with the data which is coming from button click
  const Value = props.location.MainProps.titleName;
  
  

  const [buttonId, setButton] = useState(0)
  //const { data } = useContext(appContext)

  const handleClick = (Id) => {
    setButton(Id);
  }

  return (
    <div style={styles.main}>
      <div>

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
          <input className={buttonId === 4 ? "button4" :
            "button1"} onClick={() => handleClick(4)} value="Oxygen Cans"
            type="button" style={styles.btn} />
          <input className={buttonId === 5 ? "button5" :
            "button1"} onClick={() => handleClick(5)} value="Oxygen Concentrators"
            type="button" style={styles.btn} />
          <input className={buttonId === 6 ? "button6" :
            "button1"} onClick={() => handleClick(6)} value="Oxygen Cylinders"
            type="button" style={styles.btn} />
          <input className={buttonId === 7 ? "button7" :
            "button1"} onClick={() => handleClick(7)} value="Oxygen Refiling"
            type="button" style={styles.btn} />

        </div>
        {/*{console.log(Value)}*/}
        {/*map the data with uppar define function, value which is coming from imgMediaCard button  */}
        {buttonId === 1 &&  <div style={styles.items}>
            {Value.map(CardData)}
        </div>}
        {buttonId === 2 && <Beds stateName={Value} />}
        {buttonId === 3 && <Medi />}
        {buttonId === 4 && <OxyCans />}
        {buttonId === 5 && <OxyConc />}
        {buttonId === 6 && <OxyCyl />}
        {buttonId === 7 && <OxyRefil />}

{console.log(Value)}
      </div>
    </div>
  );
}



const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '1%',

  },
  head: {
    fontSize: '30px',

  },
  buttonBox: {

    display: 'flex',
    flexDirection: 'row',
    marginLeft: '20%',

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

  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0ffff',
    paddingBottom:'3%',
}

};
export default Main