import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Groups from './components/Groups/Groups';
import Nav from './components/Navigation/Nav';
import Filter from './components/UserControl/Filter';
import GroupMaker from './components/UserControl/GroupMaker';
import MiniProfile from './components/UserControl/MiniProfile';
import './CSS/Reset.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <GroupMaker/>
        <MiniProfile/>
        <Filter/>
        <Groups/>
        <Footer/>
      </div>
    );
  }
}

export default App;
