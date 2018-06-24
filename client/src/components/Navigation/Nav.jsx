import React, { Component } from 'react';
import '../../css/nav.css'

class Nav extends Component {
  render() {
    return (
      <section className="nav">
        <p className="brand">Dota 2 &nbsp; 
        <span class="L">L<span class="e">ooking</span></span>
        <span class="F">F<span class="e">or</span></span>
        <span class="G">G<span class="e">roup</span></span></p>
        <div className="navOptions">
          <p className="about">About</p>
          <a href="/api/auth/steam"><img src="images/steambutton.png" alt="Steam login button"/></a>
        </div>
      </section>
    );
  }
}

export default Nav;
