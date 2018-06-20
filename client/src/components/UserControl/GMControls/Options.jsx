import React, { Component } from 'react';
import {FormGroup, Checkbox} from 'react-bootstrap';

class Options extends Component {
  onCheckboxClicked = (target) => {
    let t = {
      id: target.name,
      value: target.checked
    }
    this.props.onChange(t);
  }
  render() {
    return (
      <div className="Options">
        <FormGroup className="formGroup" controlId="options">
          <Checkbox name="micRequired" onClick={e => this.onCheckboxClicked(e.target)}>Mic required</Checkbox>
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