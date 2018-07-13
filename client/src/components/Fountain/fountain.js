import React, { Component } from 'react';
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

          </div>
        </div>
      </section>
    );
  }
}

export default Fountain;