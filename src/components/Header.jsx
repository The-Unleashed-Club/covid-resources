import React from 'react';
import './style.css';


const Header = () => {
    return (
        <div style={styles.box}>
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