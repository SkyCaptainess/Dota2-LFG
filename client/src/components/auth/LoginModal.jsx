import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../../css/loginModal.css'
import { toggleLoginModalVisibility } from '../../_actions';

class LoginModal extends Component {
  handleLogin = () => {
    if(window.location.href.includes('local')) {
      window.location.href = "http://localhost:3000/api/auth/steam"
    } else if(window.location.href.includes('heroku')) {
      window.location.href = "https://evening-shelf-99951.herokuapp.com/api/auth/steam"
    } else {
      window.location.href="https://dota2lfg-flooyd.c9users.io:8080/api/auth/steam"
    }
  }

  handleCancelLogin = () => {
    console.log('hi');
    this.props.dispatch(toggleLoginModalVisibility(false, ''));
  }

  render() {
    console.log(this.props);
    let style = {display: 'none'};
    let catchyPhrase = '';
    let more = '';
    let src = '';
    let alt = '';
    
    if(this.props.visible) {
      style.display = 'initial';
    }

    if(this.props.whereFrom === 'groupMaker') {
      catchyPhrase = 'You\'ll never find the perfect pudge that way...'
      more = 'You can\'t create a group without logging in! Unfortunately the technology just isn\'t there yet.';
      src = '/images/emoticons/pudge_troll.gif';
      alt = 'Pudge trolling you';
    } else if (this.props.whereFrom === 'editHero') {
      catchyPhrase = 'If you were the shopkeeper, would you sell a Divine Rapier to someone without identification? I reckon you would be like nah, bro! You\'ll just go feed with it.'
      more = 'Same concept here! Nobody wants feeders and bots in their group, so you\'ll have to login to join a group!'
    }
    return (
      <section style={style} className="loginModal">
        <div className="loginInfo">
          <p className="pudge">{catchyPhrase}</p>
          <p className="noTechnology">{more}
            <span>
              <img src={src} alt={alt}/>
            </span>
          </p>
          <p className="pleaseLogin">Login to create a group, join a group, view your stats (and others!), chat, make friends, and more!</p>
          <Button bsStyle="danger" onClick={this.handleCancelLogin}>Nevermind :(</Button>
          <Button bsStyle="success" onClick={this.handleLogin}>Okay, take me to steam!</Button>
        </div>
      </section>
    );
  }
}

export default connect()(LoginModal);
