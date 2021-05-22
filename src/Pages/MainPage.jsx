import React, { useState, Component } from 'react';
import ForwardIcon from '@material-ui/icons/Forward';

import Amb from './Amb';
import Beds from './Beds';
import Medi from './Medi';
import OxyConc from './OxyConc';
import OxyCans from './OxyCans';
import OxyCyl from './OxyCyl';
import OxyRefil from './OxyRefil';



class Main extends Component {
  constructor() {
    super();
    this.state = {
      buttonId: null
    }
    this.setButton = this.setButton.bind(this);
  }
  setButton(id) {
    this.setState({ buttonId: id });
  }
  render() {
    return (
      <div style={styles.main}>
        <div>
          
          <h1 style={styles.head}>RESOURCES<ForwardIcon/></h1>
          <div style={styles.buttonBox}>
            <input className={this.state.buttonId === 1 ? "button1" :
              "button1"} onClick={() => this.setButton(1)} value="Ambulance"
              type="button" ref="button" style={styles.btn} />
            <input className={this.state.buttonId === 2 ? "button2 " :
              "button2"} onClick={() => this.setButton(2)} value="Beds"
              ref="button1" type="button" style={styles.btn} />

            <input className={this.state.buttonId === 3 ? "button3 " :
              "button4"} onClick={() => this.setButton(3)} value="Medicines"
              ref="button1" type="button" style={styles.btn} />

            <input className={this.state.buttonId === 4 ? "button4 " :
              "button6"} onClick={() => this.setButton(4)} value="Oxygen cans"
              ref="button1" type="button" style={styles.btn} />
            <input className={this.state.buttonId === 5 ? "button5" :
              "button7"} onClick={() => this.setButton(5)} value="Oxygen Concentrator"
              ref="button1" type="button" style={styles.btn} />
            <input className={this.state.buttonId === 6 ? "button6" :
              "button8"} onClick={() => this.setButton(6)} value="Oxygen Cylinder"
              ref="button1" type="button" style={styles.btn} />
            <input className={this.state.buttonId === 7 ? "button7" :
              "button9"} onClick={() => this.setButton(7)} value="Oxygen Refiling"
              ref="button1" type="button" style={styles.btn} />
          </div>
          {this.state.buttonId === 1 && <Amb />}
          {this.state.buttonId === 2 && <Beds />}

          {this.state.buttonId === 3 && <Medi />}

          {this.state.buttonId ===4 && <OxyCans />}
          {this.state.buttonId === 5 && <OxyConc />}
          {this.state.buttonId === 6 && <OxyCyl />}
          {this.state.buttonId === 7 && <OxyRefil />}

        </div>
      </div>
    );
  }
}


const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '1%',

  },
  head: {
    fontSize: '30px',

  },
  buttonBox: {

    display: 'flex',
    flexDirection: 'row',
    marginLeft: '20%',

  },
  btn: {
    backgroundColor: '#F0FFFF',
    color: '#000000',
    padding: '7px',
    margin: '1%',
    fontSize: '20px',
    //borderStyle: 'solid',
    //borderWidth: '1px',
    borderRadius: '5px',

  },

};
export default Main