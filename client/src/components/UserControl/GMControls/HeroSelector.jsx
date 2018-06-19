import React, { Component } from 'react';
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
          <img className="emoticon" alt="Crystal Maiden Smiling" src="/images/emoticons/cm_smile.gif"/> 
          <p className="LFHInstructions">Choose up to 5 heroes! Click a selected hero to remove them.</p>
          <img className="emoticon" alt="Slark blushing" src="/images/emoticons/slark_blush.gif"/> 
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
          <img className="emoticon emoticon3" alt="Anti-Mage laughing" src="/images/emoticons/am_laugh.gif"/>
          <img className="emoticon emoticon4" alt="Puck being cheeky and sticking his tongue out" 
                                              src="/images/emoticons/puck_cheeky.gif"/> 
        </div>
      </div>
    </section>
    );
  }
}

export default HeroSelector;