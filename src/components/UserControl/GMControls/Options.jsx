import React, { Component } from 'react';
import {Button, FormGroup, Checkbox} from 'react-bootstrap';

class Options extends Component {
  render() {
    return (
      <div className="Options">
        <FormGroup className="formGroup" controlId="Options">
          <Checkbox>Mic required</Checkbox>
        </FormGroup>
        <FormGroup className="formGroup" controlId="Options">
          <Checkbox>Looking for 1, 2, and 3</Checkbox>
        </FormGroup>
        <FormGroup className="formGroup" controlId="Options">
          <Checkbox>Show username</Checkbox>
        </FormGroup>
        <FormGroup className="formGroup" controlId="Options">
          <Checkbox>Enable Match Tracker</Checkbox>
        </FormGroup>
      </div>
    );
  }
}

export default Options;