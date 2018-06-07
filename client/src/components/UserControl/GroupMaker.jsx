import React, { Component } from 'react';

import ModeSelect from './GMControls/ModeSelect.jsx';
import RegionSelect from './GMControls/RegionSelect.jsx';
import MoodSelect from './GMControls/MoodSelect.jsx';
import LFHeroes from './GMControls/LFHeroes.jsx';
import PlayerLocationSelect from './GMControls/PlayerLocationSelect';
import Options from './GMControls/Options'

class GroupMaker extends Component {

  getValidationState() {
    return 'success';
  }

  render() {
    return (
      <section className="GroupMaker">
        <form inline>
        <div>
          <ModeSelect/>
          <RegionSelect/>
          <PlayerLocationSelect/>
          <MoodSelect/>
        </div>
        <Options/>
        <LFHeroes/>
        
          
        </form>
      </section>
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
