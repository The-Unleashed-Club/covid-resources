import React from 'react';
import './style.css';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


const Header = () => {
    return (
        <div style={styles.box}>
        <LocalHospitalIcon fontSize="large" style={{ color: '#808080' }}/>
            <h1 style={styles.head}>Recover India Project</h1>

        </div>
    )
};

const styles ={
    box: {
        position:'sticky',
         display: 'flex',
        justifyContent: 'center',
        background: '#FFE4E1',
        padding: '1%',
       
    },
    head:{
        color:'#00000',
    }

};

export default Header