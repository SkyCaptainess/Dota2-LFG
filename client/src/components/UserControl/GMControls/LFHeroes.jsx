import React, { Component } from 'react';
import {Button, FormGroup} from 'react-bootstrap';
import heroes from '../../../dota-constants/heroes';

class LFHeroes extends Component {
  onClickLFHeroes = () => {
    this.props.onClick();
  }
  render() {
    console.log(heroes[5])
    return (
      <FormGroup className="formGroup" controlId="LFHeroes">
        <Button onClick={this.onClickLFHeroes} className="LFHeroesButton">Looking for specific heroes?</Button>
      </FormGroup>
    );
  }
}

export default LFHeroes;