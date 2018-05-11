import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class MoodSelect extends Component {
  render() {
    return (
      <FormGroup className="formGroup" controlId="MoodSelect">
        <ControlLabel className="GMLabel">Mood</ControlLabel>
        <FormControl componentClass="select">
          <option value="Looking for friends">Looking for Friends</option>
          <option value="Winners only">Winners only</option>
          <option value="Whatever">Whatever</option>
          <option value="All random">All random</option>
          <option value="Crazy strats">Crazy strats</option>
          <option value="Meta worship">Meta worship</option>
          <option value="Short games">Short games</option>
          <option value="Marathon games">Marathon games</option>
        </FormControl>
      </FormGroup>
    );
  }
}

export default MoodSelect;