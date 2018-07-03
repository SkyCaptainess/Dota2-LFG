import React, { Component } from 'react';
import {connect} from 'react-redux';

class GroupTab extends Component {
  render() {
    return (
      <div className="groupTab">
        {this.props.text}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loginModalVisible: state.misc.loginModalVisible,
  whereFrom: state.misc.whereFrom
});

export default connect(mapStateToProps)(GroupTab);
