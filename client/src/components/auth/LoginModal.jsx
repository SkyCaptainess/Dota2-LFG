import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../../css/loginModal.css'
import { toggleLoginModalVisibility } from '../../_actions/misc.js';

export class LoginModal extends Component {
  handleLogin = () => {
    if(window.location.href.includes('local')) {
      window.location.href = "http://localhost:3000/api/auth/steam"
    } else if(window.location.href.includes('dota2')) {
      window.location.href = "https://www.dota2lfg.com/api/auth/steam"
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
      catchyPhrase = 'You\'ll never find the perfect Pudge that way...'
      more = 'You can\'t create a group without logging in! Unfortunately the technology just isn\'t there yet.';
      src = '/images/emoticons/pudge_troll.gif';
      alt = 'Pudge trolling you';
    } else if (this.props.whereFrom === 'editHero') {
      catchyPhrase = "You can't join a group without logging in. You could be a feeder!"
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
          <p className="pleaseLogin">
          Login to create a group, join a group, view others' stats and your own, chat, make friends, and more!
          </p>
          <Button bsStyle="danger" onClick={this.handleCancelLogin}>Nevermind :(</Button>
          <Button bsStyle="success" onClick={this.handleLogin}>Okay, take me to steam!</Button>
        </div>
      </section>
    );
  }
}

export default connect()(LoginModal);
