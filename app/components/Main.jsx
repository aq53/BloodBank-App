import React from 'react';
import * as actions from 'actions';
import {connect} from 'react-redux';
import Nav from 'Nav';

var Main=React.createClass({
    render(){
        return(
         <div>
        <Nav/>
        {/*<h2>Main Component</h2>*/}
        {this.props.children}
      </div>
        );
    }
});

export default connect()(Main);