import React from 'react';
import ImgMediaCard from './ImgMediaCard';
import StateCardData from './StateCardData';
//import AndraPradeshData from '../StatesLeads/AndraPradesh'
//import AndhraPradesh from '../images/AndraPradesh.jpg'

function CardData(val,index) {
	//console.log(val.stateLeadsData)
	return(
		<ImgMediaCard key={index} 
		imgSrc={val.img} 
		title={val.stateName}
		StateLeadsIndividualData ={val.stateLeadsData}
		stName={val.Title}
	  />  
	);
}
//console.log(AndraPradeshData[1]);



const States = (props) => {
	return (
		<div style={styles.items}>
		{StateCardData.map(CardData)}
		
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
	backgroundColor: '#F0FFFF',
	paddingBottom: '3%',
  }

};

export default States