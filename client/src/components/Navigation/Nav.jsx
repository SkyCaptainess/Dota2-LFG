import React, { Component } from 'react';
import {withCookies} from 'react-cookie';
import '../../css/nav.css'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Login with Steam',
      href: '/api/auth/steam',
      loggedOut: true
    }
  }

  componentDidMount() {
    this.getLoggedIn();
  }

  getLoggedIn() {
    if(this.props.cookies.get('user') && this.state.loggedOut) {
      let text = this.props.cookies.get('user').username + ' - Logout';
      let href= '#';
      let loggedOut = false;

      this.setState({
        text,
        href,
        loggedOut
      })
    }
  }

  handleLogout() {
    this.props.cookies.remove('user');
    //this cookie is not actually removed because it is httpOnly. I will need to logout the user from the server at some point.
    this.props.cookies.remove('token');
    let href= '/api/auth/steam';
    let loggedOut = true;
    let text = 'Login with Steam';

    this.setState({
      text,
      href,
      loggedOut
    })
  }

  //the link url won't work locally. need to change 3001 to 3000 in address bar, same on return. works fine on production
  render() {
    return (
      <section className="nav">
        <p className="brand">Dota 2 &nbsp; 
        <span className="L">L<span className="e">ooking</span></span>
        <span className="F">F<span className="e">or</span></span>
        <span className="G">G<span className="e">roup</span></span></p>
        <div className="navOptions">
          <a onClick={this.handleLogout.bind(this)} className="loginLink" href={this.state.href}>{this.state.text}</a>
        </div>
      </section>
    );
  }
}

export default withCookies(Nav);
