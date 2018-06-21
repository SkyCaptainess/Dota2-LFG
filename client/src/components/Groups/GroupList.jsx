import React, { Component } from 'react';
import Group from '../Group/Group';
import {connect} from 'react-redux';
import '../../css/groupList.css'

class GroupList extends Component {
  constructor(props) {
    super(props);
  }

  getGroups = () => {
    let groups = [];
    this.props.groups.forEach(group => {
      groups.push(<Group group={group} key={group._id}/>)
    })

    return groups;
  }
  render() {
    return (
      <div className="GroupList">
        {this.getGroups()}
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  groups: state.groups
});

export default connect(mapStateToProps)(GroupList);
