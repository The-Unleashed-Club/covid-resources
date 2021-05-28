import React from 'react';
import firebase from 'firebase';
import {useEffect , useState} from 'react';
import OutlinedCard from '../components/OutlinedCard'


const db = firebase.database();
const OxygenConcentrators= (props) => {
const [data, setdata] = useState([]);

//filter(element => element.city === "Patna" )
//filter(element => element.city !== "0" && element.city >="Patna" )


useEffect(() => {
  const dataref =db.ref(props.stateName+"Data")
  dataref.once('value',async(snapshot)=>{
    let data = await snapshot.val()
     setdata(data == null ? [] : data)
    console.log(data);
  })
}, [])

return (
  <>
<h1>Oxygen Concentrators facility</h1>
{data.filter(element => element.resourcesName == "Oxygen Concentrators" ).map( (element,index) => <div style={styles.items}>
<OutlinedCard city={element.city}
resourcesName={element.resourcesName}
          nameOfFacility={element.nameOfFacility}
          address={element.address}
          contact={element.contact}
          avalability={element.avalability}
          price={element.price}
          comments={element.comments}
          VerficationDataTime={element.VerficationDataTime}
      />
</div>)}
</>
)
}

const styles = {
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

export default OxygenConcentrators