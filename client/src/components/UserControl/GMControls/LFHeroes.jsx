import React, { Component } from 'react';
import {Button, FormGroup} from 'react-bootstrap';
import heroes from '../../../dota-constants/heroes';

class LFHeroes extends Component {
  render() {
    console.log(heroes[5])
    return (
      <div className="gmHeroRow">
          <img src={`/images/heroes/${heroes[5].name}_hphover.png`}/>
          <img src={`/images/heroes/${heroes[4].name}_hphover.png`}/>
          <img src={`/images/heroes/${heroes[28].name}_hphover.png`}/>
          <img src={`/images/heroes/${heroes[75].name}_hphover.png`}/>
          <img src={`/images/heroes/${heroes[15].name}_hphover.png`}/>
      </div>
    );
  }
}

export default LFHeroes;