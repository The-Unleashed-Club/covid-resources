import React from 'react'


<box>hii</box>
const Footer = () => {
    return (
        <>
            <div style={styles.box}>
            
            <p style={styles.text}>@DISCLAIMER : This project is highly crowdsourced and collaborative in nature. 
Therefore, we can not and do not guarantee the veracity of the information provided here, and hence due diligence by the user is strongly advised.</p>
</div>
        </>
    )
};

const styles = {
    box: {
        // padding: '80px 60px',
        // padding: '80px 60px',
        display: 'flex',
        justifyContent: 'center',
        background: '#34c759',
        
        bottom: '0',
        width: '100%',
        position: 'fixed',

    },
    text: {
        padding: '0.25%',
        textAlign: 'center',
        fontSize: 'xx-small',
        fontFamily: 'Poppins',
        color:'#f0ffff',

    },
};

export default Footer