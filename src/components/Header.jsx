import React from 'react';
import './style.css';
//import MenuPopupState from './MenuPopupState'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const Header = () => {
    return (
        <div style={styles.box}>
        <LocalHospitalIcon fontSize="large" style={{ color: '#808080' }}/>
            <h1 style={styles.head}>Recover India project</h1>

        </div>
    )
};

const styles ={
    box: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: '#FFFF00',
        padding: '2%',
        marginBottom:'1%',
    },
    head:{
        color:'#808080'
    }

};

export default Header