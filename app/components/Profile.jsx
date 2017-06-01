import React from 'react';
import * as actions from 'actions';
import { connect } from 'react-redux';
import Home from 'Home';

var Profile = React.createClass({
    render() {
        var userInfo = this.props.userInfo;
        var name = "Name: " + userInfo.name;
        var email = "Email: " + userInfo.email;
        var age = "Age: " + userInfo.age;
        var contact = "Contact: " + userInfo.contact;
        var address = "Address: " + userInfo.address;
        var bloodGrp = "Blood Group: " + userInfo.bloodGrp;

        var status = userInfo.donate;
        
        var {dispatch}=this.props;
        return (
            <div className="container">
            <div className='row'>
                <div className='col-lg-8 col-md-offset-2'>
                    <div className="callout-auth">
                        {userInfo !== null ?
                            <div>
                                <label>
                                    <input type="checkbox" checked={status} onChange={
                                        () => {
                                            dispatch(actions.toggleDonateBlood(!status));
                                        }
                                        } />
                                    Donate Blood
                            </label>
                                <br />
                                <div className="form">
                                <input type="display" value={name} /><br />
                                <input type="display" value={email} /><br />
                                <input type="display" value={age} /><br />
                                <input type="display" value={contact} /><br />
                                <input type="display" value={address} /><br />
                                <input type="display" value={bloodGrp} /><br />
                            </div>
                            </div>
                            : <h2>Account Not Found</h2>}
                    </div>
                </div>
            </div>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            userInfo: state.userInfo,
        }
    }
)(Profile);