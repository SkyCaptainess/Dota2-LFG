import React, { Component } from 'react';
import {Button, FormGroup} from 'react-bootstrap';
import heroes from '../../../dota-constants/heroes';
import '../../../css/heroSelector.css';

class HeroSelector extends Component {
  constructor(props) {
    super(props);
    heroes.sort((a,b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    })
    console.log(heroes);

    this.state = {
      selectedHeroes: {
        heroes: [
        <img src="/images/question_mark.png" key="slot0" id="slot_0" onClick={e => this.handleRemoveHero(e)}/>,
        <img src="/images/question_mark.png" key="slot1" id="slot_1" onClick={e => this.handleRemoveHero(e)}/>,
        <img src="/images/question_mark.png" key="slot2" id="slot_2" onClick={e => this.handleRemoveHero(e)}/>,
        <img src="/images/question_mark.png" key="slot3" id="slot_3" onClick={e => this.handleRemoveHero(e)}/>,
        <img src="/images/question_mark.png" key="slot4" id="slot_4" onClick={e => this.handleRemoveHero(e)}/>
      ],
        slotsFree: [0,1,2,3,4]
      }
    }
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

  handleClick(e) {
    let id = e.target.id
    if(this.state.selectedHeroes.slotsFree.length > 0) {
      let heroName;
      let heroLocalizedName;
      heroes.forEach(h => {
        if (h.id == id) {
          heroLocalizedName = h.localized_name;
          heroName = h.name;
        }
      })
      let selectedHeroes = this.state.selectedHeroes.heroes; 
      let slotsFree = this.state.selectedHeroes.slotsFree;
      selectedHeroes[slotsFree[0]] = <img src={`/images/heroes/${heroName}_hphover.png`} 
                                      key={id + slotsFree[0]} id={"slot_" + slotsFree[0]} onClick={e => this.handleRemoveHero(e)}/>
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
    console.log(e);
    let id = e.target.id.split('_')[1];
    let slotsFree = this.state.selectedHeroes.slotsFree;
    let slotAlreadyFree = false;
    for(let i = 0; i < slotsFree.length; i++) {
      if (id == slotsFree[i]) {
        slotAlreadyFree = true;
        break;
      }
    }
    if(!slotAlreadyFree) {
      slotsFree.push(id);
      slotsFree.sort((a,b) => {
        return a - b;
      });
      console.log(slotsFree);
      this.setState({
        slotsFree
      })
    }
  }
  
  getImages(heroes) {
    let images = [];
    heroes.forEach(h => {
      images.push(<img src={`/images/heroes/${h.name}_sb.png`} 
                  alt={`Portrait of ${h.localized_name}`}
                  key={h.id + 'HeroImg'}
                  id={h.id}
                  onClick={e => this.handleClick(e)}/>
                  );
    })
    
    return images;
  }
  
  getAgilityHeroes() {
    let agiHeroes = heroes.filter(h => {
      return h.primary_attr === 'agi';
    });
    
    return this.getImages(agiHeroes);
  }
  
  getIntelligenceHeroes() {
    let intelligenceHeroes = heroes.filter(h => {
      return h.primary_attr === 'int';
    });
    
    return this.getImages(intelligenceHeroes);
  }
  
  getStrengthHeroes() {
    let strengthHeroes = heroes.filter(h => {
      return h.primary_attr === 'str';
    });
    
    return this.getImages(strengthHeroes);
  }
  
  render() {
    return (
      <section style={this.getVisibility()} className="heroSelector">
        <div className="LFHContainer">
          <img className="emoticon" src="/images/emoticons/cm_smile.gif"/> 
          <p className="LFHInstructions">Choose up to 5 heroes! Click a selected hero to remove them.</p>
          <img className="emoticon" src="/images/emoticons/slark_blush.gif"/> 
          <div className="selectedHeroes">
            {this.state.selectedHeroes.heroes}
          </div>
          <div className="heroBox">
            <div className="heroes">
              <p className="agility">AGILITY</p>
              {this.getAgilityHeroes()}
            </div>
            <div className="heroes">
            <p className="intelligence">INTELLIGENCE</p>
              {this.getIntelligenceHeroes()}
            </div>
            <div className="heroes">
            <p className="strength">STRENGTH</p>
              {this.getStrengthHeroes()}
            </div>
        </div>
        <div className="filters">
          
        </div>
        <div className="bottomRow">
          <img className="emoticon emoticon3" src="/images/emoticons/am_laugh.gif"/>
          <img className="emoticon emoticon4" src="/images/emoticons/puck_cheeky.gif"/> 
        </div>
      </div>
    </section>
    );
  }
}

export default HeroSelector;