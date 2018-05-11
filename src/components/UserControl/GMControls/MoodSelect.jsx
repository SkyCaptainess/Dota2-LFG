import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class MoodSelect extends Component {
  render() {
    return (
      <FormGroup className="formGroup" controlId="MoodSelect">
        <ControlLabel className="GMLabel">Mood</ControlLabel>
        <FormControl componentClass="select">
          <option value="Looking for friends">Looking for Friends</option>
          <option vlaue="Looking for teammates">Looking for Teammates</option>
          <option value="Winners only">Winners Only</option>
          <option value="Whatever">Whatever</option>
          <option value="All random">All Random</option>
          <option value="Crazy strats">Crazy Strats</option>
          <option value="Meta worship">Meta Worship</option>
          <option value="Short games">Short Games</option>
          <option value="Marathon games">Marathon Games</option>
        </FormControl>
      </FormGroup>
    );
  }
}

export default MoodSelect;