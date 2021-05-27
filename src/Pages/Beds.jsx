import React from 'react';
import firebase from 'firebase';
import {useEffect , useState} from 'react'


const db = firebase.database();
const Beds= (props) => {
const [data, setdata] = useState([]);

  useEffect(() => {
    const dataref =db.ref(props.stateName+"Data")
    dataref.once('value',async(snapshot)=>{
      let data = await snapshot.val()
       setdata(data)
      console.log(data);
    })
  }, [])


  return (
    <>
<h1>bed facility</h1>
{data.filter(element => element.city == "Patna" ).map( (element,index) => <li key={index}>abx1.{element.city}</li> )}
    </>
  )
};


export default Beds