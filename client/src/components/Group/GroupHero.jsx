import React, { Component } from 'react';
import '../../css/group.css'
import _heroes from '../../dota-constants/heroes.js';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';
import {
  toggleLoginModalVisibility,
} from '../../_actions/misc.js';

import {
  updateGroup
} from '../../_actions/group.js'

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
      onClick = this.handleClick
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
    
    
    if(steamid32) {
      if(this.props.cookies.get('user') && this.props.cookies.get('user').steamid32 === steamid32) {
        className = className + ' ' + color;
      }
    } 

    return <img className={className} src={src} alt={alt} key={key} id={id} onClick={onClick}/>
  }

 handleClick =  async () => {
    const response = await this.putHero();
    if(response === 301) {
      
    } else if (response === 401) {
      this.props.dispatch(toggleLoginModalVisibility(true, 'editHero'));
    } else if (response === 'unknown') {
      
    } else {
      this.props.dispatch(updateGroup(response));
    }
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
      
      console.log(response);

      //Fetch does not throw error on status codes like 401 :(
      if(response.status === 401 || response.status === 301) {
        return response.status;
      } else {
        const editedGroup = await response.json();
        return editedGroup;
      }
    } catch (error) {
      return 'unknown';
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

export default connect()(withCookies(GroupHero));