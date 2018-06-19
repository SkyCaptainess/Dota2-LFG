import React, { Component } from 'react';
import '../../css/group.css'

class Group extends Component {
  render() {
    return (
      <div className="Group">
        <div className="groupTopRow">
          <div className="groupProfile">
            <img className="groupProfilePic" 
                 alt="Profile"
                 src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10f08e42c4ac25b715fb0d87315171eaeccc5f73_medium.jpg"/>
            <p className="groupUserName">Pupper</p>
          </div>
          <div className="groupMode">
            All Pick
          </div>
          <div className="groupInfo">
            <p>Chill</p>
            <p>North America</p>
            <p>Texas</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Group;