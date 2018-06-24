import React, { Component } from 'react';
import GroupHero from './GroupHero'
import '../../css/group.css'


class Group extends Component {
  render() {
   
    let {mood, mode, region, location,
      username, groupAvatar, slot0, slot1, slot2, slot3, slot4, steamid32} = this.props.group;
    return (
      <div className="Group">
        <div className="groupTopRow">
          <div className="groupProfile">
            <img className="groupProfilePic" 
                 alt="Profile"
                 src={groupAvatar}/>
            <div>
              <p className="groupUserName">{username}</p>
              <p>{mode}</p>
            </div>
          </div>
          <div className="groupMode">
            
          </div>
          <div className="groupInfo">
            <p>{mood}</p>
            <p>{region}</p>
            <p>{location}</p>
          </div>
        </div>
        <div className="groupBottomRow">
          <div className="groupHeroes">
            <GroupHero slot={slot0} number={0} steamid32={steamid32}/>
            <GroupHero slot={slot1} number={1} steamid32={steamid32}/>
            <GroupHero slot={slot2} number={2} steamid32={steamid32}/>
            <GroupHero slot={slot3} number={3} steamid32={steamid32}/>
            <GroupHero slot={slot4} number={4} steamid32={steamid32}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Group;