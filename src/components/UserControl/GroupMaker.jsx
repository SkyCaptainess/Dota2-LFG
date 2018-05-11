import React, { Component } from 'react';
import {ButtonToolbar, Button, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import ModeSelect from './GMControls/ModeSelect.jsx';
import RegionSelect from './GMControls/RegionSelect.jsx';
import MoodSelect from './GMControls/MoodSelect.jsx';
import LFHeroes from './GMControls/LFHeroes.jsx';
import PlayerLocationSelect from './GMControls/PlayerLocationSelect';

class GroupMaker extends Component {

  getValidationState() {
    return 'success';
  }

  render() {
    return (
      <div className="GroupMaker">
        <p>Make Your Perfect Group</p>
        <form inline>
          <div id="gmTopRow">
            <ModeSelect/>
            <RegionSelect/>
            <PlayerLocationSelect/>
            <MoodSelect/>
          </div>
          <LFHeroes/>
          
        </form>
      </div>
    );
  }
}

/*
mode
region
show rating
description
looking for 1, 2, or 3
require mic
attitude
looking for players in
looking for heroes
show stats
min ratigin
*/

export default GroupMaker;
