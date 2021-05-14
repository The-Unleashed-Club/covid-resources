import React from 'react';
import ImgMediaCard from './ImgMediaCard';
import StateData from './StateData';
import AndraPradeshData from '../StatesLeads/AndraPradesh'
//import AndhraPradesh from '../images/AndraPradesh.jpg'

function CardData(val) {
	return(
		
		<ImgMediaCard Key={val.id} 
		imgSrc={val.img} 
		title={val.stateName}
	  />
	);
}
console.log(AndraPradeshData[1]);


const States = (props) => {
	return (
		<div style={styles.items}>
		{StateData.map(CardData)} 
		</div>
	)
}

const styles ={
  items:{
	display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
	alignItems: 'center',
    justifyContent: 'center',
  }

};

export default States