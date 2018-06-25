import React, { Component } from 'react';
import '../../css/group.css'
import _heroes from '../../dota-constants/heroes.js';
import {connect} from 'react-redux';
import {
  toggleLoginModalVisibility
} from '../../_actions'

class GroupHero extends Component {

  getHero = () => {
    let {hero_id, steamid32} = this.props.slot;
    let id, key;
    let onClick;
    let className;

    //steamid32(group)_steamid32(slot)_slot#
    let _id;

    if(steamid32) {
      _id = `${this.props.steamid32}_${steamid32}_${this.props.number}`;
      className = "heroImg"
    } else {
      _id = `${this.props.steamid32}_${this.props.number}`
      onClick = this.handleClick;
      className = "heroImg selectableSlot"
    }

    id = _id;
    key = _id;

    let src = '';
    let alt = '';
    
    let color = '';
    if(hero_id) {
      let {name, localized_name, primary_attr} = _heroes.find(h => {
        return h.id === hero_id
      });

      console.log(name, localized_name, primary_attr);

      src=`/images/heroes/${name}_hphover.png`;
      alt=`${localized_name}`

      if(primary_attr === 'int') {
        color = 'dodgerblue';
      } else if(primary_attr === 'str') {
        color = 'crimson';
      } else {
        color ='seagreen';
      }
    } else {
      src='/images/question_mark.png';
      alt='Question mark';
    }
    
    
    if(hero_id && steamid32) {
      //add class for color
    } 

    return <img className={className} src={src} alt={alt} key={key} id={id} onClick={onClick}/>
  }

 handleClick =  async () => {
    const editedHero = await this.putHero();
    console.log(editedHero);
  }

  putHero = async () => {
    try {
      const response = await fetch('/api/groups', {
        body: JSON.stringify({
          hero_id: this.props.hero_id,
          steamid32: this.props.steamid32,
          slot_number: this.props.number
        }),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'content-type': 'application/json'
        },
        method: 'PUT'
      });

      //Fetch does not throw error on status codes like 401 :(
      if(response.status === 401) {
        throw {error: 'not authorized (401)'};
      } else {
        const editedHero = await response.json();
        return editedHero;
      }
    } catch (error) {
        this.props.dispatch(toggleLoginModalVisibility(true, 'editHero'));
        return('Hello! Thanks for looking at the console. Click the steam button :D');
    }
  }

  render() {
    if(this.props.slot) {
      return (
        this.getHero()
    );
    } else {
      return ('')
    }
    
  }
}

export default connect()(GroupHero);