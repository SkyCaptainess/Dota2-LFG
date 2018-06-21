import React, { Component } from 'react';
import '../../css/group.css'

class Group extends Component {

  render() {
    let {createdAt, editedAt, mood, mode, region, location,
      micRequired, slot0, slot1, slot2, slot3, slot4,
      username} = this.props.group;
    return (
      <div className="Group">
        <div className="groupTopRow">
          <div className="groupProfile">
            <img className="groupProfilePic" 
                 alt="Profile"
                 src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10f08e42c4ac25b715fb0d87315171eaeccc5f73_medium.jpg"/>
            <p className="groupUserName">{username}</p>
          </div>
          <div className="groupMode">
            {mode}
          </div>
          <div className="groupInfo">
            <p>{mood}</p>
            <p>{region}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Group;