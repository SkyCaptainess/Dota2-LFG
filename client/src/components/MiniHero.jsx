import React, {Component} from 'react';
import '../css/dota2minimapheroes.css'


class MiniHero extends Component {
  render() {
    return (
      <div className="miniHero">
        <i className={`d2mh hero-${this.props._id}`}></i>
        <p>W: {this.props.wins}</p>
        <p>&nbsp; L: {this.props.losses} &nbsp;</p>
      </div>
      
      )
  }
}

export default MiniHero;