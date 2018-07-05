import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class ModeSelect extends Component {
  render() {
    return (
      <FormGroup className="formGroup" controlId="mode">
        <ControlLabel className="GMLabel">Mode</ControlLabel>
        <FormControl componentClass="select" onChange={e => this.props.onChange(e.target)}>
        <optgroup label="Unranked">
          <option value="All Pick">All Pick</option>
          <option value="Turbo">Turbo</option>
          <option value="Single Draft">Single Draft</option>
          <option value="Ability Draft">Ability Draft</option>
          <option value="All Random">All Random</option>
          <option value="Random Draft">Random Draft</option>
          <option value="Captains Mode">Captains Mode</option>
          <option value="Captains Draft">Captains Draft</option>
          <option value="Least Played">Least Played</option>
          <option value="All Random Deathmatch">All Random Deathmatch</option>
        </optgroup>
        <optgroup label="Ranked">
          <option value="RANKED - All Pick">All Pick</option>
          <option value="RANKED - Captains Mode">Captains Mode</option>
          <option value="RANKED - Random Draft">Random Draft</option>
        </optgroup>
        <optgroup label="Battlepass required">
          <option value="BP - Ranked Roles">Ranked Roles</option>
          <option value="BP - Mutation">Mutation</option>
        </optgroup>
        </FormControl>
      </FormGroup>
    );
  }
}

export default ModeSelect;