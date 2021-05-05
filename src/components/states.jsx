import React from 'react';
import ImgMediaCard from './ImgMediaCard';
import StateData from './StateData'

function CardData(val) {
	return(
		<ImgMediaCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LOOVTfMubEU94Z6VadJlMsQcqts0oqiw1A&usqp=CAU" 
		title={val.stateName}
	  />
	);
}



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