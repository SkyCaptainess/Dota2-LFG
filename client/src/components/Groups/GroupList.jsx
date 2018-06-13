import React, { Component } from 'react';
import Group from '../Group/Group';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [<Group key={1}/>,<Group key={2}/>]
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
