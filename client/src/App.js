import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
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
    //return (
    //   <div className="App">
    //     <Nav/>
    //     <Fountain/>
    //   </div>
      
      //)
    return (
      <div className="App">
        <Nav/>
        <LoginModal whereFrom={this.props.whereFrom} visible={this.props.loginModalVisible}/>
        <div className="groupTabs">
          <GroupTab text="Group Maker"/>
          <GroupTab text="My Group"/>
          <GroupTab text="Joined Group"/>
        </div>
        <div className="topRow">
          <GroupMaker/>
          <MiniProfile/>
        </div>
        <Filter/>
        <GroupList/>
        <Footer/>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loginModalVisible: state.loginModalVisible,
  whereFrom: state.whereFrom
});

export default connect(mapStateToProps)(App);
