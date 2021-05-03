import React from 'react'



const Header = () => {
    return (
        <div style={styles.box}>
            <h1 style={styles.head}>Recover India project</h1>,
        </div>
    )
};

const styles ={
    box: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        background: '#FFFF00',
    },
    head:{
        color:'#808080'
    }

};

export default Header