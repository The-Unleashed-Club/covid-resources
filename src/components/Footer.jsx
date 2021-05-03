import React from 'react'


<box>hii</box>
const Footer = () => {
    return (
        <div style={styles.box}>
            <h1 style={styles.head}>copyRight</h1>,
        </div>
    )
};

const styles ={
    box: {
       // padding: '80px 60px',
        background: 'black',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
    },
    head:{
        color:'#808080'
    }

};

export default Footer