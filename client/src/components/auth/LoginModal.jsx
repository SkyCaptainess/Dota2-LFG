import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../../css/loginModal.css'
import {connect} from 'redux';

class LoginModal extends Component {
  handleLogin = () => {
    if(window.location.href.includes('local')) {
      window.location.href = "http://localhost:3000/api/auth/steam"
    } else {
      window.location.href = "https://evening-shelf-99951.herokuapp.com/api/auth/steam"
    }
  }

  handleCancelLogin = () => {

  }

  render() {
    let style = {display: 'none'};
    if(this.props.visible) {
      style.display = 'initial';
    }
    return (
      <section style={style} role="region" className="loginModal">
        <div className="loginInfo">
          <p className="pudge">You'll never find the perfect Pudge that way...</p>
          <p className="noTechnology">It would be nice if you could create a group without logging in, but the technology just isn't there yet.
            <span>
              <img src="/images/emoticons/pudge_troll.gif" alt="Pudge trolling you"/>
            </span>
          </p>
          <p className="pleaseLogin">Login to create a group, join a group, view your stats (and others!), chat, make friends, and more!</p>
          <Button bsStyle="danger" onClick={this.handleCancelLogin()}>Nevermind :(</Button>
          <Button bsStyle="success" onClick={this.handleLogin}>Okay, take me to steam!</Button>
        </div>
      </section>
    );
  }
}

export default LoginModal;
