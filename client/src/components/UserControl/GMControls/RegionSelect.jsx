import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class Region extends Component {
  render() {
    return (
      <FormGroup className="formGroup" controlId="region">
        <ControlLabel className="GMLabel">Region</ControlLabel>
        <FormControl componentClass="select" onChange={e => this.props.onChange(e.target)}>
          <option value="US East">US East</option>
          <option value="US West">US West</option>
          <option value="Peru">Peru</option>
          <option value="Chile">Chile</option>
          <option value="South America">South America</option>
          <option value="Europe West">Europe West</option>
          <option value="Europe East">Europe East</option>
          <option value="Russia">Russia</option>
          <option value="Japan">Japan</option>
          <option value="Dubai">Dubai</option>
          <option value="Australia">Australia</option>
          <option value="South Africa">South Africa</option>
          <option value="India">India</option>
          <option value="China UC">China UC</option>
          <option value="China UC 2">China UC 2</option>
          <option value="China TC Shanghai">China TC Shanghai</option>
          <option value="China TC Zhejiang">China TC Zhejiang</option>
          <option value="China TC Wuhan">China TC Wuhan</option>
        </FormControl>
      </FormGroup>
    );
  }
}

export default Region;