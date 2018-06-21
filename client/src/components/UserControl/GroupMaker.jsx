import React, { Component } from 'react';
import ModeSelect from './GMControls/ModeSelect.jsx';
import RegionSelect from './GMControls/RegionSelect.jsx';
import MoodSelect from './GMControls/MoodSelect.jsx';
import LFHeroes from './GMControls/LFHeroes.jsx';
import CreateGroupButton from './GMControls/CreateGroupButton.jsx';
import PlayerLocationSelect from './GMControls/PlayerLocationSelect';
import Options from './GMControls/Options'
import HeroSelector from './GMControls/HeroSelector';
import {connect} from 'react-redux';
import heroes from '../../dota-constants/heroes.js'
import './../../css/groupMaker.css';

import {
  changeField,
  toggleHeroSelectorVisibility,
  setHeroes,
  selectSlot
} from '../../_actions';

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
  
  handleCreateGroup = () => {
    let group = {
      mode: this.props.mode,
      mood: this.props.mood,
      region: this.props.region,
      location: this.props.location,
      micRequired: this.props.micRequired,
    }
  }
  
  handleSelectHero = e => {
    let id = e.target.id.split('_')[1];
    this.props.dispatch(selectSlot(parseInt(id)));
  }
  
  getHeroesDiv = () => {
    let atLeastOneHero = false;
    let heroImages = [];
    for (let i = 0; i < 5; i++) {
      let hero;
      let selectedStyle = {}
      if (this.props.selectedSlot === i) {
        selectedStyle = {
          border: '3px solid crimson',
          borderRadius: '2px'
        }
      }
      if(this.props.heroes[i]) {
        atLeastOneHero = true;
        
        hero = heroes.find(h => {
          return h.id == this.props.heroes[i];
        })
        
        hero = <img src={`/images/heroes/${hero.name}_hphover.png`} 
                alt={hero.localized_name}
                id={'gmhero_' + i}
                key={'gmhero_' + i}
                onClick={e => this.handleSelectHero(e)}
                style={selectedStyle}/>
      } else {
        hero = <img src="/images/question_mark.png" 
                alt="Question Mark"
                id={'gmhero_' + i}
                key={'gmhero_' + i}
                onClick={e => this.handleSelectHero(e)}
                style={selectedStyle}/>
      }
      heroImages.push(hero);
    }
    
     let text = "Looking for specific heroes?"
      if(atLeastOneHero) {
        text = "Change heroes";      
      }
      return (<div className="GMHeroes">
        <div>
          {heroImages}
        </div>
        <div>
          <LFHeroes LFHeroesText={text} onClick={this.handleLFHeroesClicked}/>
          <CreateGroupButton onCreateGroup={this.handleCreateGroup}/>
        </div>
      </div>);
  }
  
  render() {
    console.log(this.props);
    return (
      <section className="GroupMaker">
        <form inline="true">
          <div>
            <ModeSelect onChange={this.handleChange}/>
            <RegionSelect onChange={this.handleChange}/>
            <PlayerLocationSelect onChange={this.handleChange}/>
            <MoodSelect onChange={this.handleChange}/>
          </div>
          <Options onChange={this.handleChange}/>
        </form>
        {this.getHeroesDiv()}
        <HeroSelector visible={this.props.heroSelectorVisible} onSubmitHeroes={this.handleSubmitHeroes}/>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  mode: state.mode,
  region: state.region,
  location: state.location,
  mood: state.mood,
  heroSelectorVisible: state.heroSelectorVisible,
  heroes: state.heroes,
  micRequired: state.micRequired,
  selectedSlot: state.selectedSlot
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
