import React, { Component } from 'react';
import './../../css/miniProfile.css';
import {connect} from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import {instanceOf} from 'prop-types';

class MiniProfile extends Component {
  render() {
    const {cookies} = this.props;
    const img = cookies.get('user').personaname;
    const username = cookies.get('user');
    console.log(username);
    return (
      <div className="MiniProfile">
        <p>{username}</p>
        <img src={img} alt="User's profile picture"/>
      </div>
    );
  }
}

export default withCookies(MiniProfile);
