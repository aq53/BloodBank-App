import React from 'react';
import { connect } from 'react-redux';


var Home = React.createClass({

    render() {
        return (
            <div className="container">
                <div className='row'>
                <div className='col-lg-8 col-md-offset-2'>
                    <div className="callout-auth">
                        <h1>Welcome To Blood Bank App!</h1>
                    </div>
                </div>
            </div>
            </div>
            
        );
    }
});

export default connect()(Home);