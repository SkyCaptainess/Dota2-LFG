import React, { Component } from 'react';

import ModeSelect from './GMControls/ModeSelect.jsx';
import RegionSelect from './GMControls/RegionSelect.jsx';
import MoodSelect from './GMControls/MoodSelect.jsx';
import LFHeroes from './GMControls/LFHeroes.jsx';
import PlayerLocationSelect from './GMControls/PlayerLocationSelect';
import Options from './GMControls/Options'
import {connect} from 'react-redux';

import {
  changeField
} from '../../_actions';

class GroupMaker extends Component {
  handleChange = target => {
    console.log(target);
    this.props.dispatch(changeField(target.id, target.value));
    
  }
  render() {
    //using this for now instead of redux dev tools
    console.log(this.props);
    return (
      <section className="GroupMaker">
        <form inline>
          <div>
            <ModeSelect onChange={this.handleChange}/>
            <RegionSelect onChange={this.handleChange}/>
            <PlayerLocationSelect onChange={this.handleChange}/>
            <MoodSelect onChange={this.handleChange}/>
          </div>
          <Options/>
          <LFHeroes/>
        </form>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  mode: state.mode,
  region: state.region,
  location: state.location,
  mood: state.mood
});

export default connect(mapStateToProps)(GroupMaker);

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
*/;
