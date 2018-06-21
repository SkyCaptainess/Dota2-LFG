import React, { Component } from 'react';
import Group from '../Group/Group';
import {connect} from 'react-redux';
import {addAllGroups, createGroup} from './../../_actions'
import '../../css/groupList.css'

class GroupList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    try {
      this.setState({
        loading: true
      })
      const response = await fetch('/api/groups');
      const groups = await response.json()
      this.props.dispatch(addAllGroups(groups));
    } catch (error) {
      console.error(error);
    }
    
  }

  getGroups = () => {
    let groups = [];

    this.props.groups.forEach(group => {
      groups.push(<Group group={group} key={group._id}/>)
    })

    if(groups.length === 0) {
      return <p className="groupListLoading">Loading Groups!😊</p>
    }

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
