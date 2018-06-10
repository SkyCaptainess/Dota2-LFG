import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class MoodSelect extends Component {
  render() {
    return (
      <FormGroup className="formGroup" controlId="mood">
        <ControlLabel className="GMLabel">Mood</ControlLabel>
        <FormControl componentClass="select" onChange={e => this.props.onChange(e.target)}>
          <option value="Looking for Friends">Looking for Friends</option>
          <option vlaue="Looking for Feammates">Looking for Teammates</option>
          <option value="Winners Only">Winners Only</option>
          <option value="Whatever">Whatever</option>
          <option value="All Random">All Random</option>
          <option value="Crazy Strats">Crazy Strats</option>
          <option value="Meta Worship">Meta Worship</option>
          <option value="Short Games">Short Games</option>
          <option value="Marathon Games">Marathon Games</option>
        </FormControl>
      </FormGroup>
    );
  }
}

export default MoodSelect;