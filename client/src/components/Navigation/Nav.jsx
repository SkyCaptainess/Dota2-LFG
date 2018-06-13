import React, { Component } from 'react';
import '../../css/nav.css'

class Nav extends Component {
  render() {
    return (
      <section className="nav">
        <p className="brand">Dota 2 LFG</p>
        <div className="navOptions">
          <p className="about">About</p>
          <img src="images/steambutton.png" alt="Steam login button"/>
        </div>
      </section>
    );
  }
}

export default Nav;
