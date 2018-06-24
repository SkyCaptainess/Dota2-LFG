import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class LFHeroes extends Component {
  onClickLFHeroes = () => {
    this.props.onClick();
  }
  
  render() {
        return <Button bsStyle="danger" onClick={this.onClickLFHeroes} className="lfHeroesButton">{this.props.LFHeroesText}</Button>
  }
}

export default LFHeroes;