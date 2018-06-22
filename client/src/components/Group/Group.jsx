import React, { Component } from 'react';
import '../../css/group.css'
import _heroes from '../../dota-constants/heroes.js'

class Group extends Component {
  getHeroSlots = () => {
    let {slot0, slot1, slot2, slot3, slot4} = this.props.group;
    let slots = [slot0, slot1, slot2, slot3, slot4];
    let heroes = [];
    slots.forEach(slot =>{
      heroes.push({
        hero_id: slot.hero_id,
        steamid32: slot.steamid32,
        username: slot.username
      })
    })
    return heroes;
  }
  getHeroes = () => {
    let heroes = this.getHeroSlots();
    let heroImages = [];
    
    heroes.forEach((hero, i, heroesArray) => {
      let img;
      let id;
      let style;
      let alt;
      let key = `${this.props.group.steamid32}_${i}`
      if(hero.hero_id) {
        let heroName = _heroes.find(h => {
          if (h.id === hero.hero_id) {
            return h;
          }
          return '';
        }).name
        img = `/images/heroes/${heroName}_hphover.png`;
        alt = {heroName}
      } else {
        img = '/images/question_mark.png';
        alt = 'Question Mark';
      }
      
      if(hero.steamid32) {
        id = `${this.props.group.steamid32}_${hero.steamid32}_${i}`;
        style = {
          opacity: '1'
        }
      } else {
        id = `${this.props.group.steamid32}_${hero.hero_id || 'nohero'}_${i}`;
        style = {
          opacity: '.45'
        }
      }
      
      heroImages.push(<img src={img} alt={alt} id={id} key={key} style={style}/>)
    })
    return heroImages;
  }
  
  render() {
   
    let {mood, mode, region, location,
      username, groupAvatar} = this.props.group;

    return (
      <div className="Group">
        <div className="groupTopRow">
          <div className="groupProfile">
            <img className="groupProfilePic" 
                 alt="Profile"
                 src={groupAvatar}/>
            <div>
              <p className="groupUserName">{username}</p>
              <p>{mode}</p>
            </div>
          </div>
          <div className="groupMode">
            
          </div>
          <div className="groupInfo">
            <p>{mood}</p>
            <p>{region}</p>
            <p>{location}</p>
          </div>
        </div>
        <div className="groupBottomRow">
          <div className="groupHeroes">
            {this.getHeroes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Group;