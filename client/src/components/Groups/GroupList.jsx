import React, { Component } from 'react';
import Group from '../Group/Group';
import {connect} from 'react-redux';
import '../../css/groupList.css'

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [<Group key={1}/>,<Group key={2}/>, <Group key={3}/>, <Group key={4}/>]
    }
  }
  render() {
    return (
      <div className="GroupList">
        {this.state.groups}
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  mode: state.mode,
  region: state.region,
  location: state.location,
  mood: state.mood
});

export default connect(mapStateToProps)(GroupList);
