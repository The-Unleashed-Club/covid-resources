import React from 'react';

const About= () => {
  return (
    <>
     
<h1 style={styles.head}>About us</h1>
<p style={styles.box}>We’re a group of students, trying to do our bit to help people fight against the Corona Virus Crisis, that has had a devastating effect on our country. 
This is a small project which has been made possible by dint of sheer hard work of the volunteers who were working round the clock in collecting, verifying and facilitating leads in order to help the people of our country who were being faced with the most egregious of circumstances. We would also like to thank all the people working for Covid Resources and All Hands Meet, that helped us collate the data, and we laud their hardwork. Also, we would like to thank our tech team (Kasak, Warisha and Mayank) who did their part by developing this website in order to help facilitate the leads. 
But, we do realise that, due to the unprecedented circumstances and shortage of the resources, the leads may turn obsolete, even in a fraction of seconds, and without a doubt, this project is highly crowdsourced and collaborative in nature. 
Therefore, we can not and do not guarantee the veracity of the information provided here, and hence due diligence by the user is strongly advised. But what we do hope, is that anyone you’re finding this information for, gets fine as soon as possible. 
<br/>
Thank you, 
<br/>
Sunidhi and Donika</p>

    </>
  )
};
const styles ={
  box: {
    padding: '2%',
    textAlign: 'center',
    fontSize: 'medium',
    fontFamily: 'Poppins',
  
  },
  head:{
    paddingLeft: '2%',
    paddingTop: '1%',
      color:'#808080',
      fontFamily: 'Poppins', 
  }

};


export default About