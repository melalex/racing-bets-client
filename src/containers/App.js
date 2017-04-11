import React, {Component} from 'react';
import Footer from '../components/Footer'
import Header from './Header'
import Notifications from '../components/Notifications'
import Progress from 'react-progress-2'
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                {this.props.language}
                <Progress.Component/>

                <div className="container big-margin-top content">
                    <Notifications errors={this.props.errors} info={this.props.info}/>

                    {this.props.children}
                </div>

                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errors: state.app.errors,
        info: state.app.info,
    }
}

export default connect(mapStateToProps)(App)