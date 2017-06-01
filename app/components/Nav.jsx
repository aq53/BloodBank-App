var React = require('react');
var { hashHistory } = require('react-router');
import * as actions from 'actions';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

var Nav = React.createClass({
  onLogout(e) {
    var { dispatch } = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render() {
    return (
      <AppBar
        title={<span>Blood Bank App</span>}

        iconElementRight={
          <div>
            <FlatButton onClick={()=>{hashHistory.push("/home")}}>Home</FlatButton>
            <FlatButton onClick={()=>{hashHistory.push("/home/profile")}}>Profile</FlatButton>
            <FlatButton onClick={()=>{hashHistory.push("/home/donors")}}>Donors</FlatButton>
            <FlatButton onClick={this.onLogout}>Logout</FlatButton>
          </div>
        }
      />
    );
  }
});

export default connect()(Nav);