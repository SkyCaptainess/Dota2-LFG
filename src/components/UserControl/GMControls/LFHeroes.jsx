import React, { Component } from 'react';
import {Button, FormGroup} from 'react-bootstrap';

class LFHeroes extends Component {
  render() {
    return (
      <FormGroup className="formGroup" controlId="LFHeroes">
        <Button className="LFHeroes">Looking for specific heroes?</Button>
      </FormGroup>
    );
  }
}

export default LFHeroes;