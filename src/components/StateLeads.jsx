import React from 'react';
//import ImgMediaCard from './ImgMediaCard';
//import StateData from './StateData';
//import AndraPradeshData from '../StatesLeads/AndraPradesh';
//import ArunachalPradeshData from '../StatesLeads/ArunachalPradesh';
import HaryanaData from '../StatesLeads/Haryana';

import OutlinedCard from './OutlinedCard'

function CardData(val) {
    return (
        <OutlinedCard 
        key={val.id}
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
console.log();


const States = (props) => {
    return (
        <div style={styles.items}>
            {HaryanaData.map(CardData)}
        </div>
    )
}

const styles = {
    items: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    }

};

export default States