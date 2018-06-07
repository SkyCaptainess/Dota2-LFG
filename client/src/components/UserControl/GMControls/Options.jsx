import React, { Component } from 'react';
import {Button, FormGroup, Checkbox} from 'react-bootstrap';

class Options extends Component {
  onCheckboxClicked = (target) => {
    console.log(target.name, target.checked);
  }
  render() {
    return (
      <div className="Options">
        <FormGroup className="formGroup" controlId="Options">
          <Checkbox name="mic" onClick={e => this.onCheckboxClicked(e.target)}>Mic required</Checkbox>
        </FormGroup>
        <FormGroup className="formGroup" controlId="Options">
          <Checkbox name="oneTwoThree" onClick={e => this.onCheckboxClicked(e.target)}>Looking for 1, 2, and 3</Checkbox>
        </FormGroup>
        <FormGroup className="formGroup" controlId="Options">
          <Checkbox name="username" onClick={e => this.onCheckboxClicked(e.target)}>Show username</Checkbox>
        </FormGroup>
        <FormGroup className="formGroup" controlId="Options">
          <Checkbox name="matchTracker" onClick={e => this.onCheckboxClicked(e.target)}>Enable Match Tracker</Checkbox>
        </FormGroup>
      </div>
    );
  }
}

export default Options;