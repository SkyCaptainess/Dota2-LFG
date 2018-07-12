import React, { Component } from 'react';
import '../../css/fountain.css'

class Fountain extends Component {
  render() {
    return (
      <section className="fountainContainer">
        <div className="fountain">
          <div className="header">
            <p className="title">Dota 2&nbsp; 
              <span className="L">L</span>
              <span className="F">F</span>
              <span className="G">G</span></p>
            <p className="secondP">Looking for the perfect group? 😍</p>
          </div>
          <div className="info">
            <p style={{color: 'white'}}>Dota 2 LFG gives you the tools you need to find a group just to your liking!</p>
            <ul>
             <li>Create a group with the exact heroes you're looking for</li>
             <li>Join a group and chat with other users</li>
             <li>View other players stats, including their win rate for the hero they chose</li>
            </ul>
          </div>
          
        </div>
      </section>
    );
  }
}

export default Fountain;