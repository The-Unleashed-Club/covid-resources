import React from 'react'


<box>hii</box>
const Footer = () => {
    return (
        <>
            <div style={styles.box}>
            <h1 style={styles.text}>@Disclaimer</h1>
            <p style={styles.text}>We realise that, due to the unprecedented circumstances and shortage of the resources, the leads may turn obsolete, even in a fraction of seconds, and without a doubt, this project is highly crowdsourced and collaborative in nature.
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
        background: 'black',
        bottom: '0',
        width: '100%',
        position: 'fixed',

    },
    text: {
        padding: '0.25%',
        textAlign: 'center',
        fontSize: 'xx-small',
        fontFamily: 'Poppins',
        color: '#808080',

    },
};

export default Footer