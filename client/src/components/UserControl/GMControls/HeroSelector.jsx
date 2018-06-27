import React, { Component } from 'react';
import {select, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import heroes from '../../../dota-constants/heroes';
import {Button} from 'react-bootstrap';
import '../../../css/heroSelector.css';
import {connect} from 'react-redux';

/*This component does WAY too much. I plan on refactoring it, but for the sake of time,
it will have to be at a later date :)*/

class HeroSelector extends Component {
  constructor(props) {
    super(props);
    heroes.sort((a,b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    })

    this.state = {
      selectedHeroes: {
        heroes: [
        <img src="/images/question_mark.png" alt="Question Mark" key="slot_0" id="slot_0?" onClick={e => this.handleRemoveHero(e)}/>,
        <img src="/images/question_mark.png" alt="Question Mark" key="slot_1" id="slot_1?" onClick={e => this.handleRemoveHero(e)}/>,
        <img src="/images/question_mark.png" alt="Question Mark" key="slot_2" id="slot_2?" onClick={e => this.handleRemoveHero(e)}/>,
        <img src="/images/question_mark.png" alt="Question Mark" key="slot_3" id="slot_3?" onClick={e => this.handleRemoveHero(e)}/>,
        <img src="/images/question_mark.png" alt="Question Mark" key="slot_4" id="slot_4?" onClick={e => this.handleRemoveHero(e)}/>
      ],
        slotsFree: [0,1,2,3,4]
      },
      filteredHeroes: heroes
    }
  }

  onSubmitHeroes = () => {
    let finalHeroes = [];
    this.state.selectedHeroes.heroes.forEach(h => {
      let type = h.props.id.split('_')[0];
      let heroId = h.props.id.split('_')[1];
      if(type === 'slot') {
        finalHeroes.push(null);
      } else {
        finalHeroes.push(heroId);
      }
    })
    this.props.onSubmitHeroes(false, finalHeroes);
  }
  
  onCancel = () => {
    this.props.onSubmitHeroes(true);
  }
  
  getVisibility() {
    let style = {
      display: 'none',
    }
    
    if(this.props.visible === true) {
      style.display = 'flex';
    } else {
      style.display = 'none';
    }
    
    return style;
  }

  handleAddHero(e) {
    let id = e.target.id
    let style = {border: '3px solid red'};
    e.target.style.opacity = '.2';
    e.target.style.cursor = 'initial';
    let selectedHeroes = this.state.selectedHeroes.heroes;
    let heroAlreadySelected = false;
    
    selectedHeroes.forEach(h => {
      if(h.props.id.toString().split('_')[1] === id) {
        heroAlreadySelected = true;
      } 
    })
    
    if(this.state.selectedHeroes.slotsFree.length > 0 && heroAlreadySelected === false) {
      let heroName;
      let heroLocalizedName;
      heroes.forEach(h => {
        if (h.id.toString() === id) {
          heroLocalizedName = h.localized_name;
          heroName = h.name;
        }
      })
      
      let slotsFree = this.state.selectedHeroes.slotsFree;
      selectedHeroes[slotsFree[0]] = <img
                                      alt={heroLocalizedName}
                                      src={`/images/heroes/${heroName}_hphover.png`} 
                                      key={'slot_' + slotsFree[0]} 
                                      id={"selected_" + id} 
                                      onClick={e => this.handleRemoveHero(e)}/>
                                      
      slotsFree.shift();

      this.setState({
        selectedHeroes: {
          heroes: selectedHeroes,
          slotsFree: slotsFree
        }
      })
    }
  }

  handleRemoveHero(e) {
    let id = e.target.id.split('_')[1];
    let removedHero = document.getElementById(id);
    removedHero.style.opacity = '1';
    removedHero.style.cursor = 'pointer';
    console.log(removedHero);
    let selectedHeroes = this.state.selectedHeroes.heroes;
    let slotsFree = this.state.selectedHeroes.slotsFree;
    
    selectedHeroes.forEach((hero, index, array) => {
      if (hero.props.id.split('_')[1] === id) {
        array[index] = <img alt="Question Mark" 
                            src={'images/question_mark.png'} 
                            key={'slot_' + index} 
                            id={'slot_' + index + '?'} />;
        slotsFree.push(index);
        slotsFree.sort((a,b) => {
          return a - b;
        })
      }
    })
      
      this.setState({
        selectedHeroes: {
          heroes: selectedHeroes,
          slotsFree: slotsFree
        }
      })
    }
  
  getImages(heroes) {
    let images = [];
    heroes.forEach(h => {
      images.push(<img src={`/images/heroes/${h.name}_sb.png`} 
                  alt={`Portrait of ${h.localized_name}`}
                  key={h.id + 'HeroImg'}
                  id={h.id}
                  onClick={e => this.handleAddHero(e)}/>
                  );
    })
    
    return images;
  }

  /*Not adding this until I refactor this component*/
  filterHeroes(type, filter) {
    console.log(filter);
    console.log(type);
    let filteredHeroes = [];
    if(type === 'legs' || type === 'attackType') {
      filteredHeroes = heroes.filter(h => {
        if(type === 'legs' && h.legs.toString() === filter) {
          return h;
        }
      })
    } else {

    }
    this.setState({
      filteredHeroes: filteredHeroes
    })
  }
  
  getAgilityHeroes() {
    let agiHeroes = this.state.filteredHeroes.filter(h => {
      return h.primary_attr === 'agi';
    });
    
    return this.getImages(agiHeroes);
  }
  
  getIntelligenceHeroes() {
    let intelligenceHeroes = this.state.filteredHeroes.filter(h => {
      return h.primary_attr === 'int';
    });
    
    return this.getImages(intelligenceHeroes);
  }
  
  getStrengthHeroes() {
    let strengthHeroes = this.state.filteredHeroes.filter(h => {
      return h.primary_attr === 'str';
    });
    
    return this.getImages(strengthHeroes);
  }
  
  render() {
    return (
      <section style={this.getVisibility()} className="heroSelector">
        <div className="LFHContainer">
          <img className="emoticon" alt="Crystal Maiden Smiling" src="/images/emoticons/cm_smile.gif"/> 
          <p className="LFHInstructions">Choose up to 5 heroes! Click a selected hero to remove them.</p>
          <img className="emoticon" alt="Slark blushing" src="/images/emoticons/slark_blush.gif"/> 
          <div className="selectedHeroes">
            {this.state.selectedHeroes.heroes}
          </div>
          <div className="options">
            <Button bsStyle="danger" className="finishedButton" onClick={this.onCancel}>Cancel</Button>
            <Button bsStyle="success" className="finishedButton" onClick={this.onSubmitHeroes}>Done</Button>
          </div>
          <div className="heroBox">
          <div className="heroes strHeroes">
            <p className="strength">STRENGTH</p>
              {this.getStrengthHeroes()}
            </div>
            <div className="heroes agiHeroes">
              <p className="agility">AGILITY</p>
              {this.getAgilityHeroes()}
            </div>
            <div className="heroes intHeroes">
            <p className="intelligence">INTELLIGENCE</p>
              {this.getIntelligenceHeroes()}
            </div>
        </div>
        {/* This introduces too many issues and I will need to add it after I refactor the hero selector component

        <div className="filters">
          <p>Filter Heroes</p>
          <form>
            <FormGroup controlId="attackType">
              <ControlLabel>Attack type</ControlLabel>
              <FormControl componentClass="select" placeholder="Melee and Ranged">
                <option value="-">-</option>
                <option value="melee">Melee</option>
                <option value="ranged">Ranged</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="role">
              <ControlLabel>Role</ControlLabel>
              <FormControl componentClass="select" placeholder="All">
                <option value="all">All</option>
                <option value="Carry">Carry</option>
                <option value="Disabler">Disabler</option>
                <option value="Durable">Durable</option>
                <option value="Escape">Escape</option>
                <option value="Initiator">Initiator</option>
                <option value="Jungler">Jungler</option>
                <option value="Nuker">Nuker</option>
                <option value="Pusher">Pusher</option>
                <option value="Support">Support</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="legs">
              <ControlLabel>Number of legs</ControlLabel>
              <FormControl componentClass="select" placeholder="All" onChange={e => this.filterHeroes('legs', e.target.value)}>
                <option value="all">I do not discriminate on the basis of legs</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8 (SPIDER WARNING!)</option>
              </FormControl>
            </FormGroup>
          </form>
        </div>*/}
        <div className="bottomRow">
          <img className="emoticon emoticon3" alt="Anti-Mage laughing" src="/images/emoticons/am_laugh.gif"/>
          <img className="emoticon emoticon4" alt="Puck being cheeky and sticking his tongue out" 
                                              src="/images/emoticons/puck_cheeky.gif"/> 
        </div>
      </div>
    </section>
    );
  }
}

export const mapStateToProps = state => ({
  heroSelectorVisible: state.heroSelectorVisible
});

export default connect(mapStateToProps)(HeroSelector);