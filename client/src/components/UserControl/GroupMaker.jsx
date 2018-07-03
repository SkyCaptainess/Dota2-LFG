import React, { Component } from 'react';
import ModeSelect from './GMControls/ModeSelect.jsx';
import RegionSelect from './GMControls/RegionSelect.jsx';
import MoodSelect from './GMControls/MoodSelect.jsx';
import LFHeroes from './GMControls/LFHeroes.jsx';
import CreateGroupButton from './GMControls/CreateGroupButton.jsx';
import PlayerLocationSelect from './GMControls/PlayerLocationSelect';
import HeroSelector from './GMControls/HeroSelector';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';
import heroes from '../../dota-constants/heroes.js'
import './../../css/groupMaker.css';

import {
  createGroup,
} from '../../_actions/group.js';

import {
  changeField,
  setHeroes,
  selectSlot
} from '../../_actions/index.js';

import {
  toggleHeroSelectorVisibility,
  toggleLoginModalVisibility
} from '../../_actions/misc.js';

class GroupMaker extends Component {
  handleLFHeroesClicked = () => {
    this.props.dispatch(toggleHeroSelectorVisibility(!this.props.heroSelectorVisible));
  }
  
  handleChange = target => {
    this.props.dispatch(changeField(target.id, target.value));
  }

  handleSubmitHeroes = (cancel, heroes = []) => {
    this.props.dispatch(toggleHeroSelectorVisibility(!this.props.heroSelectorVisible));
    if(!cancel) {
      this.props.dispatch(setHeroes(heroes));
    }
  }

  prepareGroup = () => {
    let group = {
        mode: this.props.mode,
        mood: this.props.mood,
        region: this.props.region,
        location: this.props.location,
        'slot0': {
          hero_id: parseInt(this.props.heroes[0], 10) || null
        },
        'slot1': {
          hero_id: parseInt(this.props.heroes[1], 10) || null
        },
        'slot2': {
          hero_id: parseInt(this.props.heroes[2], 10) || null
        },
        'slot3': {
          hero_id: parseInt(this.props.heroes[3], 10) || null
        },
        'slot4': {
          hero_id: parseInt(this.props.heroes[4], 10) || null
        }
      }
      
    if(this.props.selectedSlot !== undefined) {
       const slot = `slot${this.props.selectedSlot}`;
       group[slot].selected = true;
    }

    return group;
  }
  
  handleCreateGroup = async  () => {
    const group = this.prepareGroup();
    const {cookies} = this.props;
    const user = cookies.get('user');
    if(!user) {
      this.props.dispatch(toggleLoginModalVisibility(true, 'groupMaker'));
      return;
    }
    try {
      const response = await fetch('/api/groups', {
        body: JSON.stringify(group),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      const responseJson = await response.json();
      if(responseJson.code === 11000) {
        throw new Error('Group already created');
      }
      this.props.dispatch(createGroup(responseJson));
    } catch(error) {
      console.error(error);
    }
  }

  handleSelectHero = e => {
    console.log(this.props);
    let id = e.target.id.split('_')[1];
    e.target.style.opacity = 1;
    this.props.dispatch(selectSlot(parseInt(id, 10)));
  }
  
  getHeroesDiv = () => {
    let atLeastOneHero = false;
    let heroImages = [];
    for (let i = 0; i < 5; i++) {
      let hero;
      
      if(this.props.heroes[i]) {
        atLeastOneHero = true;
        
        hero = heroes.find(h => {
          return h.id.toString() === this.props.heroes[i];
        })
        
        hero = <img src={`/images/heroes/${hero.name}_hphover.png`} 
                alt={hero.localized_name}
                id={'gmhero_' + i}
                key={'gmhero_' + i}
                onClick={e => this.handleSelectHero(e)}
                />
      } else {
        hero = <img src="/images/question_mark.png" 
                alt="Question Mark"
                id={'gmhero_' + i}
                key={'gmhero_' + i}
                onClick={e => this.handleSelectHero(e)}
                />
      }
      heroImages.push(hero);
    }
    
     let text = "Looking for specific heroes?"
      if(atLeastOneHero) {
        text = "Change heroes";      
      }
      return (<div className="GMHeroes">
        <div className="heroImages">
          {heroImages}
        </div>
        <div>
          <LFHeroes LFHeroesText={text} onClick={this.handleLFHeroesClicked}/>
          <CreateGroupButton onCreateGroup={this.handleCreateGroup}/>
        </div>
      </div>);
  }
  
  render() {
    return (
      <section className="GroupMaker">
        <form inline="true">
          <div>
            <ModeSelect onChange={this.handleChange}/>
            <RegionSelect onChange={this.handleChange}/>
            <PlayerLocationSelect onChange={this.handleChange}/>
            <MoodSelect onChange={this.handleChange}/>
          </div>
        </form>
        {this.getHeroesDiv()}
        <HeroSelector visible={this.props.heroSelectorVisible} onSubmitHeroes={this.handleSubmitHeroes}/>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  mode: state.groupMaker.mode,
  region: state.groupMaker.region,
  location: state.groupMaker.location,
  mood: state.groupMaker.mood,
  heroSelectorVisible: state.misc.heroSelectorVisible,
  heroes: state.groupMaker.heroes,
  selectedSlot: state.groupMaker.selectedSlot,
  groups: state.group.groups,
  loginModalVisible: state.misc.loginModalVisible
});

export default connect(mapStateToProps)(withCookies(GroupMaker));

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
