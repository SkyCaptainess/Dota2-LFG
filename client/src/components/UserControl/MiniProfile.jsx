import React, { Component } from 'react';
import './../../css/miniProfile.css';
import { withCookies} from 'react-cookie';

class MiniProfile extends Component {
  render() {
    const {cookies} = this.props;
    const user = cookies.get('user');
    console.log(user)
    let content;
    
    if (user) {
      content =
      <div className="MiniProfile">
        <p>{user.personaname}</p>
        <img src={user.avatarfull} alt="User's profile"/>
      </div>
    } else {
      content =
      <div className="MiniProfile">
        Login pls :D
      </div>
    }
    
    return (content);
  }
}

export default withCookies(MiniProfile);
