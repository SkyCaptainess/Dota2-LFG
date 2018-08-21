import React, { Component } from 'react';

import GroupList from './components/Groups/GroupList';
import Nav from './components/Navigation/Nav';
import Filter from './components/UserControl/Filter';
import GroupMaker from './components/UserControl/GroupMaker';
import MiniProfile from './components/UserControl/MiniProfile';
import LoginModal from './components/auth/LoginModal';
import GroupTab from './components/Group/GroupTab'
import Fountain from './components/Fountain/fountain'
import {connect} from 'react-redux';
import './css/reset.css'
import './css/app.css'

class App extends Component {
  render() {
    /*Maybe I should use react router instead, but since there are only two pages and I don't want to
    have different URLs (e.g. /home /app) I have opted for this simple solution. I believe I could
    also look into using memory router to avoid having different URLS, but I'll look at that later */
    if(this.props.onHome) {
      return (
        <div className="App">
          <Nav/>
          <Fountain/>
        </div>
        
        )
    }
    console.log(this.props);
    return (
      <div className="App">
        <Nav/>
        <LoginModal whereFrom={this.props.whereFrom} visible={this.props.loginModalVisible}/>
        <div className="topRow">
          <GroupMaker/>
          <MiniProfile/>
        </div>
        <GroupList/>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loginModalVisible: state.misc.loginModalVisible,
  whereFrom: state.misc.whereFrom,
  onHome: state.misc.onHome
});

export default connect(mapStateToProps)(App);
