import React from 'react';
import './style.css';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


const Header = () => {
    return (
        <div style={styles.box}>
        <LocalHospitalIcon fontSize="large" style={{ color: '#f0ffff' }}/>
            <h1 style={styles.head}>Recover India </h1>

        </div>
    )
};

const styles ={
    box: {
        position:'sticky',
        display: 'flex',
        justifyContent: 'center',
        background: '#34c759',
        padding: '1%',
       
    },
    head:{
        color:'#f0ffff',
        fontFamily: 'Poppins',
        fontSize: '27px',
    }

};

export default Header