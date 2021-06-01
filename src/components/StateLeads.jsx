import React from 'react';
import HaryanaData from '../StatesLeads/Haryana';
import OutlinedCard from './OutlinedCard'

function CardData(val) {
    return (
        <OutlinedCard city={val.city}
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
        backgroundColor: '#f0ffff',
        paddingBottom:'3%',
        fontFamily: 'Poppins',
    }

};

export default States