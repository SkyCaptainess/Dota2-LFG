import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class ModeSelect extends Component {
  render() {
    return (
      <FormGroup className="formGroup" controlId="ModeSelect">
        <ControlLabel className="GMLabel">Mode</ControlLabel>
        <FormControl componentClass="select">
          <option value="All Pick">All Pick</option>
          <option value="Ranked">Ranked</option>
          <option vlaue="Turbo">Turbo</option>
        </FormControl>
      </FormGroup>
    );
  }
}

export default ModeSelect;