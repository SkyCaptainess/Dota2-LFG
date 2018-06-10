import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class Region extends Component {
  render() {
    return (
      <FormGroup className="formGroup" controlId="region">
        <ControlLabel className="GMLabel">Region</ControlLabel>
        <FormControl componentClass="select" onChange={e => this.props.onChange(e.target)}>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="China">China</option>
        </FormControl>
      </FormGroup>
    );
  }
}

export default Region;