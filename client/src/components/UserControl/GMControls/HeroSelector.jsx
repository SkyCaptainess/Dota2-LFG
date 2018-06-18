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
  
  getImages(heroes) {
    let images = [];
    heroes.forEach(h => {
      images.push(<img src={`/images/heroes/${h.name}_sb.png`} 
                  alt={`Portrait of ${h.localized_name}`}
                  key={h.id}/>)
    })
    
    return images;
  }
  
  getAgilityHeroes() {
    let agiHeroes = heroes.filter(h => {
      return h.primary_attr === 'agi';
    })
    
    return this.getImages(agiHeroes);
  }
  
  getIntelligenceHeroes() {
    let intelligenceHeroes = heroes.filter(h => {
      return h.primary_attr === 'int';
    })
    
    return this.getImages(intelligenceHeroes);
  }
  
  getStrengthHeroes() {
    let strengthHeroes = heroes.filter(h => {
      return h.primary_attr === 'str';
    })
    
    return this.getImages(strengthHeroes);
  }
  
  render() {
    return (
      <section style={this.getVisibility()} className="heroSelector">
        <div className="LFHContainer">
          <p className="LFHInstructions">Choose up to 5 heroes. Use the filters or just start typing a name!</p>
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
          <p>T</p>
        </div>
      </div>
    </section>
    );
  }
}

export default HeroSelector;