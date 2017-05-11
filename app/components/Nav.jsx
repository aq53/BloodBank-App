var React = require('react');
var { Link } = require('react-router');
import * as actions from 'actions';
import { connect } from 'react-redux';

var Nav = React.createClass({
  onLogout(e) {
    var { dispatch } = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render() {
    return (
      <div>
        {/*<h2>Nav Component</h2>*/}
        <div className="page-actions">
          <Link to="/home">Home</Link>
          <Link to="/home/profile">Profile</Link>
          <Link to="/home/donors">Donors</Link>
          <a onClick={this.onLogout} href="#">Logout</a>
        </div>
      </div>
    );
  }
});

export default connect()(Nav);