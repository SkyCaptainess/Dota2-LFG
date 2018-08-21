import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import GroupHero from './GroupHero'
import '../../css/group.css'
import {withCookies} from 'react-cookie';


class Group extends Component {
  handleDeleteClicked = async () => {
    try {
      const response = await fetch('/api/groups', {
        credentials: 'same-origin',
        method: 'DELETE'
      })
      const responseJson = await response.json();
      console.log(responseJson);
    } catch(error) {
      console.error(error);
    }
  }
  render() {
    let {mood, mode, region, location,
      username, groupAvatar, slot0, slot1, slot2, slot3, slot4, steamid32} = this.props.group;
      if(location === 'Prefer not to say') {
        location = 'Somewhere';
      }

      let groupInfo = '';
      if(this.props.cookies.get('user') && this.props.cookies.get('user').steamid32 === steamid32)
      {
        groupInfo = <div>
                      <p>More features to manage your group coming soon.</p>
                      <Button onClick={this.handleDeleteClicked} bsStyle="danger">Delete Group</Button>
                    </div>
      }
    return (
      <div className="Group">
        <div className="groupTopRow">
          <div className="groupProfile">
            <img className="groupProfilePic" 
                 alt="Profile"
                 src={groupAvatar}/>
            <div>
              <p className="groupUserName">{username}</p>
              <p className="groupMode">{mode}</p>
            </div>
          </div>
          <div className="groupInfo">
            <p>{mood}</p>
            <p>{region}</p>
            <p>{location}</p>
          </div>
        </div>
        <div className="comingSoon">
          {groupInfo}
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

export default withCookies(Group);