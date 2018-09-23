import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../../css/fountain.css'
import {toggleHome} from './../../_actions/misc.js'
import {connect} from 'react-redux'

//The Fountain is a reference to the home base in Dota 2.

class Fountain extends Component {
  handleFindClicked = () => {
    this.props.dispatch(toggleHome(false))
    localStorage.setItem('onHome', '0');
  }
  render() {
    return (
      <section className="fountainContainer">
        <img src="/images/linaandmaiden.png"/>
        <div className="fountain">
          <div className="header">
            <p className="title">Dota 2&nbsp; 
              <span className="L">L</span>
              <span className="F">F</span>
              <span className="G">G</span></p>
            <p className="secondP">Looking for the perfect group? 😍</p>
          </div>
          <div className="info">
            <p className="tools">Dota 2 LFG gives you the tools you need to find a group just to your liking!</p>
            <p className="tools">Login below or click help for more information. Thanks for stopping by!</p>
          </div>
          <div className="buttons">
            <Button bsStyle="danger" onClick={this.handleFindClicked}>Find a group!</Button>
            <Button bsStyle="primary"><a href="https://github.com/flooyd/dota2lfg" target="__blank">Contribute</a></Button>
          </div>
          <p className="poweredBy">Powered by <span className="opendotaBrand"><a target="_blank" href="https://www.opendota.com">{'\<OPENDOTA\/\>'}</a></span></p>
        </div>
      </section>
    );
  }
}

export default connect(null)(Fountain);