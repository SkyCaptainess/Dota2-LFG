import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class Region extends Component {
  render() {
    return (
      <FormGroup className="formGroup" controlId="RegionSelect">
        <ControlLabel className="GMLabel">Region</ControlLabel>
        <FormControl componentClass="select">
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Turbo">China</option>
        </FormControl>
      </FormGroup>
    );
  }
}

export default Region;