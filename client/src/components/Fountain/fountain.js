import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../../css/fountain.css'

//The Fountain is a reference to the home base in Dota 2.

class Fountain extends Component {
  render() {
    return (
      <section className="fountainContainer">
        <img src="/images/calm.jpg"/>
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
            <Button bsStyle="danger">Find a group!</Button>
            <Button bsStyle="success">About Dota 2 LFG</Button>
            <Button bsStyle="primary">Contribute</Button>
          </div>
        </div>
        <div className="firstInfo">
          <div>
            <p className="infoHeader">Create a group</p>
            <p>
              Use the Group Maker to create a group exactly how you want it. Want to play
              only with serious players who are looking to make a team? Choose Looking for
              Teammates or Winners Only. Or maybe you're looking to kill Roshan before the horn
              and so you can choose Crazy Strats. Create whatever kind of group you can imagine!
            </p>
          </div>
          <div>
            <p className="infoHeader">Create a group</p>
            <p>
              Use the Group Maker to create a group exactly how you want it. Want to play
              only with serious players who are looking to make a team? Choose Looking for
              Teammates or Winners Only. Or maybe you're looking to kill Roshan before the horn
              and so you can choose Crazy Strats. Create whatever kind of group you can imagine!
            </p>
          </div>
          <img src="images/miniprofile.png"/>
        </div>
      </section>
    );
  }
}

export default Fountain;