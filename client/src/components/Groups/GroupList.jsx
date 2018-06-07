import React, { Component } from 'react';
import Group from '../Group/Group';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [<Group/>,<Group/>]
    }
  }
  render() {
    return (
      <div className="Groups">
        {this.state.groups}
      </div>
    );
  }
}

export default Groups;
