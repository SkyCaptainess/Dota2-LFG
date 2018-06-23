import React, { Component } from 'react';
import '../../css/group.css'
import _heroes from '../../dota-constants/heroes.js'

class GroupHero extends Component {

  getHero = () => {
    let {hero_id, selected, username, steamid32} = this.props.slot;
    let id, key;
    let onClick;
    let className;

    let style = {
      opacity: '.4'
    }

    //steamid32(group)_steamid32(slot)_slot#
    let _id;

    if(steamid32) {
      style.opacity = '1';
      _id = `${this.props.steamid32}_${steamid32}_${this.props.number}`;
      className = "heroImg"
    } else {
      _id = `${this.props.steamid32}_${this.props.number}`
      onClick = this.handleClick;
      className = "heroImg selectableSlot"
    }

    id = _id;
    key = _id;

    let src = "";
    let alt = "";

    if(hero_id) {
      let {name, localized_name} = _heroes.find(h => {
        return h.id === hero_id
      });

      src=`/images/heroes/${name}_hphover.png`;
      alt=`${name}`
    } else {
      src='/images/question_mark.png';
      alt='Question mark';
    }

    return <img className={className} src={src} alt={alt} key={key} id={id} onClick={onClick}/>
  }

  handleClick = () => {
    console.log('hello!');
  }

  render() {
    if(this.props.slot) {
      return (
        this.getHero()
    );
    } else {
      return;
    }
    
  }
}

export default GroupHero;