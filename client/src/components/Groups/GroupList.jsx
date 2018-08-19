import React, { Component } from 'react';
import Group from '../Group/Group';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';
import {addAllGroups, setCreatedGroup} from './../../_actions/group.js'
import '../../css/groupList.css'

class GroupList extends Component {
  componentDidMount = async () => {
    try {
      const response = await fetch('/api/groups', {
        method: 'GET',
        credentials: 'same-origin',
      });
      const groups = await response.json()
      this.props.dispatch(addAllGroups(groups));
      
    } catch (error) {
      console.error(error);
    }
  }
  
  componentDidUpdate = () => {
    let user = this.props.cookies.get('user');
    if(user && user.steamid32) {
      let createdGroup = this.props.groups.find(g => {
        return g.steamid32 === user.steamid32
      })
      
      if(createdGroup && this.props.createdGroup === null) {
        this.props.dispatch(setCreatedGroup(createdGroup))
      }
    }
  }

  getGroups = () => {
    let groups = [];

    this.props.groups.forEach(group => {
      groups.push(<Group group={group} key={group._id}/>)
    })
    
    if(groups.length === 0) {
      return <p className="groupListLoading">Loading Groups!</p>
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
  groups: state.group.groups,
  createdGroup: state.group.createdGroup
});

export default connect(mapStateToProps)(withCookies(GroupList));
