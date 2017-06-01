import React from 'react';
import * as actions from 'actions';
import { connect } from 'react-redux';
import Home from 'Home';

var Donors = React.createClass({
    render() {
        var { dispatch } = this.props;
        var donor = this.props.donors;
        return (

            <div className="container">
                <div className='row'>
                    <div className='col-lg-8 col-md-offset-2'>

                        {
                            donor !== null ?
                                <div >
                                    <h1 className="page-title">Donors</h1>
                                    {
                                        Object.keys(donor).map(function (row, id) {
                                            if (row === this.props.uid || !donor[row].donate)
                                                return;
                                            return (<div className="donor-body">

                                                <h3>Name: {donor[row].name}</h3>
                                                <h4>Blood Group: {donor[row].bloodGrp}</h4>
                                                <p>
                                                    <span className="outer-span"><span className="inner-span">Contact:</span> {donor[row].contact}</span>
                                                    <span className="outer-span"><span className="inner-span">Email:</span> {donor[row].email}</span>
                                                    <span className="outer-span"><span className="inner-span">Age:</span> {donor[row].age}</span> <br />
                                                    <span className="outer-span"><span className="inner-span">Address:</span> {donor[row].address}</span>

                                                </p>
                                                <br />

                                            </div>)
                                        }.bind(this))
                                    }
                                </div>
                                : 'No donor available'
                        }
                    </div>
                </div>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            donors: state.donors,
            uid: state.auth.uid
        }
    }
)(Donors);