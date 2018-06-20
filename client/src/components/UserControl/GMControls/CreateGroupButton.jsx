import React, { Component } from 'react';
import {Button, FormGroup} from 'react-bootstrap';

class LFHeroes extends Component {
  onCreateGroup = () => {
    this.props.onCreateGroup();
  }
  
  render() {
    return (
        <Button bsStyle="success" onClick={this.onCreateGroup} className="createGroupButton">Create Group</Button>
    );
  }
}

export default LFHeroes;